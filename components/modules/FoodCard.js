import Link from "next/link";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import {
  Card,
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

function FoodCard({ name, price, discount, details, id }) {
  return (
    <Card
      sx={{
        maxWidth: 280,
        boxShadow:
          "rgba(92, 245, 115, 0.123) 0px 4px 16px,rgba(17, 17, 26, 0.05) 0px 8px 32px",
        borderRadius: 2,
        marginTop: 4,
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={`images/${id}.jpeg`}
          alt="food-image"
        />
        {discount ? (
          <Typography
            position="absolute"
            top={5}
            left={5}
            padding="3px"
            borderRadius={1}
            border="3px solid #fff"
            color="#fff"
            sx={{ backgroundColor: "#ED4133" }}
          >
            {discount}%
          </Typography>
        ) : null}
        <CardContent>
          <Box
            component="div"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom={3}
          >
            <Typography variant="p" color="primary" component="h3">
              {name}
            </Typography>
            <Typography
              variant="p"
              color="text.secondary"
              component="p"
              display="flex"
              alignItems="center"
            >
              <Location />
              {details[0].Cuisine}
            </Typography>
          </Box>
          <Typography
            variant="p"
            display="flex"
            fontSize={16}
            alignItems="center"
          >
            <Dollar />
            {discount ? (
              <Box component="div" display="flex" alignItems="center" gap={1}>
                <Typography component="span" variant="span" color="red">
                  {(price * (100 - discount)) / 100}$
                </Typography>
                <Typography
                  component="span"
                  variant="span"
                  color="text.secondary"
                  fontSize={14}
                  sx={{ textDecoration: "line-through" }}
                >
                  {price}$
                </Typography>
              </Box>
            ) : (
              <Typography component="span" variant="span">
                {price}$
              </Typography>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/menu/${id}`} style={{ width: "100%" }}>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "100%", borderRadius: 1, color: "#fff" }}
          >
            See Details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default FoodCard;
