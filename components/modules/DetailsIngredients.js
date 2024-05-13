import { Box, Typography } from "@mui/material";

function DetailsIngredients({ ingredients }) {
  return (
    <Box marginTop={5} marginBottom="50px">
      <Typography component="h2" variant="h5" color="primary" fontWeight={700}>
        Ingredients
      </Typography>
      <ul>
        {ingredients.map((item, index) => (
          <li
            key={index}
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Typography component="h4" variant="h6" fontSize={18}>
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default DetailsIngredients;
