import CarouselBanner from "../components/Carousel";
import { Typography, Grid } from "@mui/material";
import Product from "../components/Product";

export default function Home() {
  return (
    <>
      <CarouselBanner />
      <Typography sx={{ my: 4 }} variant="h4" textAlign="center">
        Featured Products
      </Typography>
      <Grid justifyContent="center" container spacing={1}>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
      </Grid>
      <Typography sx={{ my: 4 }} variant="h4" textAlign="center">
        Latest Products
      </Typography>
      <Grid justifyContent="center" container spacing={1}>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
      </Grid>
    </>
  );
}
