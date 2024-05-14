import { useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@emotion/react";
import FoodCard from "../modules/FoodCard";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";

function CategoriesPage({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({
    difficulty: router.query.difficulty,
    time: router.query.time,
  });

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    console.log(query);
    router.push({ pathname: "categories", query });
  };

  return (
    <Grid container marginTop={4} padding={3}>
      <Grid item xs={12}>
        <Typography
          component="h2"
          variant="h4"
          fontWeight={700}
          borderBottom="5px solid"
          borderColor="primary.main"
          width="fit-content"
        >
          Categories
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        display="flex"
        flexDirection={matchesSm ? "column" : "row"}
        gap={1}
        alignItems="center"
        marginTop={4}
      >
        <FormControl
          sx={{
            m: 1,
            minWidth: matchesSm ? "100%" : 170,
            boxShadow:
              "rgba(92, 245, 115, 0.123) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">Difficulty</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Difficulty"
            name="difficulty"
            value={query.difficulty}
            onChange={changeHandler}
          >
            <MenuItem value="">
              <em>Difficulty</em>
            </MenuItem>
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            minWidth: matchesSm ? "100%" : 170,
            boxShadow:
              "rgba(92, 245, 115, 0.123) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          }}
          size="small"
        >
          <InputLabel id="demo-select-small-label">Cooking Time</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Cooking Time"
            name="time"
            value={query.time}
            onChange={changeHandler}
          >
            <MenuItem value="">
              <em>Cooking Time</em>
            </MenuItem>
            <MenuItem value="more">More than 30 min</MenuItem>
            <MenuItem value="less">Less than 30 min</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{ color: "#fff", width: matchesSm ? "100%" : 170 }}
          onClick={searchHandler}
        >
          Search
        </Button>
      </Grid>
      <Grid container marginTop={5}>
        {!data.length ? (
          <img
            src="/images/search.png"
            alt="category"
            style={{
              margin: "20px auto",
              width: matchesSm ? "250px" : "360px",
            }}
          />
        ) : null}
        {data.map((food) => (
          <Grid key={food.id} item xs={12} md={6} lg={4}>
            <FoodCard {...food} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default CategoriesPage;
