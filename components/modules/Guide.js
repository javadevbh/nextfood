import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import Link from "next/link";

function Guide() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box display="flex" justifyContent={matchesSm ? "center" : "space-around"} flexWrap={matchesSm ? "wrap" : null} gap={matchesSm ? 2 : 0} marginTop={5}>
      <Link
        href="/menu"
        style={{
          boxShadow:
            "rgba(92, 245, 115, 0.123) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          padding: "10px 50px",
          borderRadius: "10px",
        }}
      >
        Menu
      </Link>
      <Link
        href="/categories"
        style={{
          boxShadow:
            "rgba(92, 245, 115, 0.123) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          padding: "10px 50px",
          borderRadius: "10px",
        }}
      >
        Categories
      </Link>
      <Link
        href="/"
        style={{
          boxShadow:
            "rgba(92, 245, 115, 0.123) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          padding: "10px 50px",
          borderRadius: "10px",
        }}
      >
        Discount
      </Link>
    </Box>
  );
}

export default Guide;
