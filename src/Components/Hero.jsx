import { Box, Typography } from "@mui/material";
import React from "react";
import hero from "../Assets/Images/about-2.jpg"
//C:\workshop\digibazar-skeleton-master\src\Assets\Images\acfc0d5ee6521591b7c9723e1578f8e4.webp
export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${hero})`,
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "#000000b8",
          }}
          gutterBottom
        >
          Welcome to Digibazar
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "20px", color: "#000000b8" }}
        >
        
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "#000000b8" }}
        >
          We’re thrilled to have you here! Whether you're looking for the latest gadgets, stylish fashion, home essentials, or unique gifts, we've got you covered. Our goal is to make your shopping experience simple, fast, and enjoyable, with high-quality products at competitive prices.

          Explore our wide range of categories, discover special deals, and enjoy a seamless online shopping experience. Thank you for choosing [Your E-Market Name]—we’re excited to serve you!

          Happy shopping!
        </Typography>
      </Box>
    </Box>
  );
}
