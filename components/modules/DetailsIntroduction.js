import { Box, Typography } from "@mui/material";

function DetailsIntroduction({ details }) {
  return (
    <Box marginTop={5} marginBottom="50px">
      <Typography component="h2" variant="h5" color="primary" fontWeight={700}>
        Details
      </Typography>
      <ul>
        {details.map((detail, index) => (
          <li
            key={index}
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Typography component="h4" variant="h6" fontSize={18}>
              {Object.keys(detail)[0]} :
            </Typography>
            <Typography component="span" variant="span" color="text.secondary">
              {Object.values(detail)[0]}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default DetailsIntroduction;
