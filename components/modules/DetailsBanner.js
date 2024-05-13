import { Box, Typography, useMediaQuery } from "@mui/material";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import { useTheme } from "@emotion/react";

function DetailsBanner({ id, name, price, discount, details }) {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection={matchesSm ? "column" : "row"}
      marginTop={6}
      gap={matchesSm ? 1 : 4}
    >
      <img
        src={`/images/${id}.jpeg`}
        alt={name}
        style={{ width: matchesSm ? "100%" : "300px", borderRadius: "10px" }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap={matchesSm ? 3 : 0}
      >
        <Typography
          component="h2"
          variant="h6"
          color="primary"
          fontWeight={700}
        >
          {name}
        </Typography>
        <Box display="flex" alignItems="center" gap="4px">
          <Location />
          <Typography component="span" variant="p" color="text.secondary">
            {details[0].Cuisine}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Dollar />
          {discount ? (
            <Box component="div" display="flex" alignItems="center" gap={1}>
              <Typography component="span" variant="span" color="red">
                {(price * (100 - discount)) / 100}$
              </Typography>
              <Typography
                component="span"
                variant="span"
                color="text.secondary"
                fontSize={14}
                sx={{ textDecoration: "line-through" }}
              >
                {price}$
              </Typography>
            </Box>
          ) : (
            <Typography component="span" variant="span">
              {price}$
            </Typography>
          )}
        </Box>
        {discount ? (
          <Typography
            component="p"
            variant="p"
            borderRadius={1}
            padding={1}
            textAlign="center"
            color="#fff"
            sx={{ backgroundColor: "#ED4133" }}
          >
            {discount}% OFF
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

export default DetailsBanner;
