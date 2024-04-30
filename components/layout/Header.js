import Link from "next/link";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              component="h1"
              variant="h6"
              fontWeight="500"
              color="primary"
            >
              NextFood
            </Typography>
          </Link>
          <Box component="div" display="flex" gap={2}>
            <Link href="/menu" style={{ color: "GrayText", fontWeight: 500 }}>
              Menu
            </Link>
            <Link
              href="/categories"
              style={{ color: "GrayText", fontWeight: 500 }}
            >
              Categories
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
