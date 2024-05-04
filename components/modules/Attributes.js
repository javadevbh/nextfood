import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";
import { useTheme } from "@emotion/react";

function Attributes() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container padding={3}>
      <Grid item xs={12} marginBottom={5}>
        <Typography
          component="h2"
          variant="h5"
          color="primary"
          fontWeight={700}
        >
          Why us?
        </Typography>
      </Grid>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={matchesSm ? "center" : "space-between"}
        width="100%"
        flexWrap="wrap"
        gap={2}
        
      >
        <Box
          boxShadow="rgba(92, 245, 115, 0.123) 0px 4px 16px,
            rgba(17, 17, 26, 0.05) 0px 8px 32px;"
          width="130px"
          borderRadius="10px"
          padding="25px 20px 20px"
          textAlign="center"
        >
          <Fast />
          <Typography component="p" variant="p" fontWeight={500} marginTop={2}>
            Fast
          </Typography>
        </Box>
        <Box
          boxShadow="rgba(92, 245, 115, 0.123) 0px 4px 16px,
            rgba(17, 17, 26, 0.05) 0px 8px 32px;"
          width="130px"
          borderRadius="10px"
          padding="25px 20px 20px"
          textAlign="center"
        >
          <Food />
          <Typography component="p" variant="p" fontWeight={500} marginTop={2}>
            Best Restaurants
          </Typography>
        </Box>
        <Box
          boxShadow="rgba(92, 245, 115, 0.123) 0px 4px 16px,
            rgba(17, 17, 26, 0.05) 0px 8px 32px;"
          width="130px"
          borderRadius="10px"
          padding="25px 20px 20px"
          textAlign="center"
        >
          <Choice />
          <Typography component="p" variant="p" fontWeight={500} marginTop={2}>
            Your Choice
          </Typography>
        </Box>
        <Box
          boxShadow="rgba(92, 245, 115, 0.123) 0px 4px 16px,
            rgba(17, 17, 26, 0.05) 0px 8px 32px;"
          width="130px"
          borderRadius="10px"
          padding="25px 20px 20px"
          textAlign="center"
        >
          <Clock />
          <Typography component="p" variant="p" fontWeight={500} marginTop={2}>
            24-7
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default Attributes;
