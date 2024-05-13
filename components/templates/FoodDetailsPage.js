import { Box, Typography } from "@mui/material";
import DetailsBanner from "../modules/DetailsBanner";
import DetailsIntroduction from "../modules/DetailsIntroduction";
import DetailsIngredients from "../modules/DetailsIngredients";
import DetailsRecipe from "../modules/DetailsRecipe";

function FoodDetailsPage({
  id,
  name,
  price,
  discount,
  introduction,
  details,
  ingredients,
  recipe,
}) {
  return (
    <Box component="div" padding={3} marginTop={4}>
      <Typography
        component="h2"
        variant="h4"
        fontWeight={700}
        borderBottom="5px solid"
        borderColor="primary.main"
        width="fit-content"
      >
        Details
      </Typography>
      <DetailsBanner
        id={id}
        name={name}
        price={price}
        discount={discount}
        details={details}
      />
      <Typography component="p" variant="p" margin="50px 0" lineHeight={2}>
        {introduction}
      </Typography>
      <DetailsIntroduction details={details} />
      <DetailsIngredients ingredients={ingredients} />
      <DetailsRecipe recipe={recipe} />
    </Box>
  );
}

export default FoodDetailsPage;
