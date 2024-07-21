import { Typography, Link, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "100px",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        {"Copyright © "}
        <Link color="inherit" href="">
          MY Shop
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
