import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";

function Restrictions() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box padding={3} marginTop={8} marginBottom={matchesSm ? 4 : 15}>
      <Typography component="h2" variant="h5" color="primary" fontWeight={700}>
        Restrictions
      </Typography>
      <Typography
        component="p"
        variant="p"
        marginTop={2}
        fontWeight={500}
        lineHeight={2}
      >
        Prohibited items. Merchants may only offer to sell items expressly
        permitted by their agreement with Uber. A merchant cannot offer
        specially regulated or illicit items, like cannabidiol (CBD) and
        tetrahydrocannabinol (THC), on their Uber Eats menu.
      </Typography>
    </Box>
  );
}

export default Restrictions;
