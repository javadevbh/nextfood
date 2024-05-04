import { useTheme } from "@emotion/react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

function Banner() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container marginTop={matchesSm ? 2 : 10} padding={3}>
      <Grid item md={6} xs={12}>
        <Typography
          component="h2"
          variant="h5"
          fontWeight={700}
          borderBottom="3px solid"
          borderColor="primary.main"
          width="fit-content"
        >
          BotoFood
        </Typography>
        <Typography component="p" variant="p" margin="30px 0" fontWeight={500}>
          Food Delivery and Takeout!
        </Typography>
        <Typography component="p" variant="p" color="text.secondary">
          NextFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes, or on foot.
        </Typography>
        <Link
          href="/menu"
          style={{ display: "inline-block", marginTop: "20px" }}
        >
          <Button size="large" variant="contained" sx={{ color: "#fff" }}>
            See All
          </Button>
        </Link>
      </Grid>
      <Grid item md={6} xs={12} textAlign="center">
        <img
          src="/images/banner.png"
          alt="Food image"
          style={{
            width: matchesSm
              ? "90%"
              : matchesMd
              ? "350px"
              : matchesLg
              ? "450px"
              : "450px",
            marginTop: matchesSm ? "40px" : 0,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Banner;
