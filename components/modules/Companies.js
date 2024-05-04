import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import { Box } from "@mui/material";

function Companies() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-around">
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </Box>
  );
}

export default Companies;
