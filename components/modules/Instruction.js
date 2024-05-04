import { Box, Typography } from "@mui/material";

function Instruction() {
  return (
    <Box padding={3} marginTop={5}>
      <Typography component="h2" variant="h5" color="primary" fontWeight={700}>
        How to Order?
      </Typography>
      <ul>
        <li style={{ fontWeight: 500, fontSize: "18px" }}>
          Sign in (or create an account) and set your delivery address.
        </li>
        <li style={{ fontWeight: 500, fontSize: "18px" }}>
          Choose the restaurant you want to order from.
        </li>
        <li style={{ fontWeight: 500, fontSize: "18px" }}>
          Select your items and tap “Add to Cart”.
        </li>
        <li style={{ fontWeight: 500, fontSize: "18px" }}>
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li style={{ fontWeight: 500, fontSize: "18px" }}>
          Review your order and tap “Place Order”...
        </li>
        <li style={{ fontWeight: 500, fontSize: "18px" }}>
          Track your order progress.
        </li>
      </ul>
    </Box>
  );
}

export default Instruction;
