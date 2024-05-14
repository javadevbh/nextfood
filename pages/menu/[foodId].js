import FoodDetailsPage from "../../components/templates/FoodDetailsPage";

function FoodDetails({ data }) {
  return <FoodDetailsPage {...data} />;
}

export default FoodDetails;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/data");
  const json = await res.json();
  const data = json.slice(0, 10);
  const paths = data.map((food) => ({
    params: { foodId: food.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { foodId } = context.params;
  const res = await fetch(`http://localhost:4000/data/${foodId}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 1 * 60 * 60,
  };
}
