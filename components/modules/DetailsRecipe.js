import { Box, Typography } from "@mui/material";

function DetailsRecipe({ recipe }) {
  return (
    <Box component="div">
      <Typography component="h2" variant="h5" color="primary" fontWeight={700}>
        Recipe
      </Typography>
      <ul>
        {recipe.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "20px",
              backgroundColor: index % 2 === 0 ? "#bcff93" : "#e8ffd8",
            }}
          >
            <Typography component="p" variant="h4" marginRight={2}>
              {index + 1}
            </Typography>
            <Typography component="p" variant="p">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default DetailsRecipe;
