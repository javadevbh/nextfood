import { Box, Typography } from "@mui/material";

function Definition() {
  return (
    <Box padding={3} marginTop={5}>
      <Typography component="h2" variant="h5" color="primary" fontWeight={700}>
        Who We Are?
      </Typography>
      <Typography
        component="p"
        variant="p"
        marginTop={2}
        fontWeight={500}
        lineHeight={2}
      >
        BotoFood company was founded in 2009 by Garrett Camp and Travis
        Kalanick.The company began food delivery in August 2014 with the launch
        of the UberFRESH service in Santa Monica, California. In 2015, the
        platform was renamed to UberEATS and the ordering software was released
        as its own application, separate from the app for Uber rides.In 2016, it
        commenced operations in both London and Paris.
      </Typography>
    </Box>
  );
}

export default Definition;
