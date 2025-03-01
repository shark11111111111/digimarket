import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import pic from "../Assets/Images/single-image1.png";
const Banner = () => {
  return (
    <Box
      sx={{
        bgcolor: "#cfcfcfba",
        overflow: "hidden",
        mt: 5,
        px: 4,
        py: 6,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { md: 4 } }}>
            <Typography  sx={{ fontWeight: "bold" }}>
              Our Mission

              Our mission is simple: to connect buyers and sellers in a trustworthy, convenient,
              and secure online marketplace. We believe in providing our customers with the best selection of quality products at competitive prices,
              while ensuring fast and reliable delivery services.


            </Typography>
            <Typography
              //variant="h5"
              sx={{textAlign: "justify",
                //textTransform: "uppercase",
                color: { xs: "white", sm: "#212121" },
                fontWeight: "ariel",
                pb: 3,
              }}
            >
              Why Choose Us?

              <p>Diverse Selection: From electronics to fashion, health products to home décor, we offer an extensive variety of products from trusted sellers around the world.</p>
              Customer-Centric Experience: We put our customers first by offering easy navigation,personalized recommendations, and customer support whenever you need it.<br/>
              Secure Shopping: Your security is our priority. We use the latest encryption technology to ensure your personal and payment information is always safe.<br/>
              Fast Delivery: Our reliable shipping partners ensure that your orders are delivered promptly, so you can enjoy your purchases as soon as possible
            </Typography>
          </Box>
        </Grid>

        {/* Right Content (Empty for Now) */}
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
