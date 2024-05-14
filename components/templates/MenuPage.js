import { Grid, Typography } from "@mui/material";
import FoodCard from "../modules/FoodCard";

function MenuPage({ data }) {
  return (
    <Grid container padding={3} marginTop={4}>
      <Grid item xs={12}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight={700}
          borderBottom="5px solid"
          borderColor="primary.main"
          width="fit-content"
        >
          Menu
        </Typography>
        <Grid container>
          {data.length &&
            data.map((food) => (
              <Grid key={food.id} item xs={12} md={6} lg={4}>
                <FoodCard {...food} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MenuPage;
