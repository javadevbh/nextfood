import CategoriesPage from "../../components/templates/CategoriesPage";

function Categories({ data }) {
  return <CategoriesPage data={data} />;
}

export default Categories;

export async function getServerSideProps(context) {
  const { difficulty, time } = context.query;

  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();
  const filteredData = data.filter((food) => {
    const difficultyResult = food.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty == difficulty
    );

    const timeResult = food.details.filter((detail) => {
      
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time == "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time == "more" && timeDetail && +timeDetail >= 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return food;
    } else if (time && !difficulty && timeResult.length) {
      return food;
    } else if (!time && difficulty && difficultyResult.length) {
      return food;
    }
  });

  return {
    props: { data: filteredData },
  };
}
