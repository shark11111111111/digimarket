import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import about1 from "../Assets/Images/about-1.jpg"
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={about1}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              subtitle of website
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
              Welcome to  digimart – Your One-Stop Online Marketplace!

              At digimart, we strive to bring a seamless shopping experience to your fingertips.
              Whether you're looking for the latest gadgets, trendy fashion, home essentials, or unique artisanal products,
              we are here to offer a wide range of products tailored to your needs.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >

              doloribus exercitationem!
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
