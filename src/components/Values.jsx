import React from "react";
import ValueCard from "./ValueCard";
import { Box, Container, Typography } from "@mui/material";

const Values = () => {
  return (
    <Box width={1} bgcolor={"#0A2640"} py={5} mb={6}>
      <Container>
        <Typography variant="h3" fontWeight={600} mb={4} color="#fff">
          Our Core Values
        </Typography>
        <ValueCard />
      </Container>
    </Box>
  );
};

export default Values;
