import { ThemeProvider } from "@mui/material";
import theme from "../mui/theme";
import Layout from "../components/layout/Layout";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
