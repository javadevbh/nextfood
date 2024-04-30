import { AppBar, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <AppBar
      component="footer"
      variant="footer"
      position="static"
      sx={{ marginTop: "30px" }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center", padding: "10px 0" }}>
        <Typography component="p" variant="p">
          Developed by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/javadevbh/"
            style={{ color: "yellow" }}
          >
            Javad
          </a>{" "}
          with ❤️ | Next.js project &copy;
        </Typography>
      </Container>
    </AppBar>
  );
}

export default Footer;
