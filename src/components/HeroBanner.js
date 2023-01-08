import React from "react";
import { Box,  Typography, Button } from "@mui/material";


const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "200px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>

    <Button href="#exercises" variant="contained" color="error">
      Explore Exercises
    </Button>

    
  </Box>
);

export default HeroBanner;