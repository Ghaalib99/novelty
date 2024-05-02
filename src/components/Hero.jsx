import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CustomButton from "./Button";
import herographics from "../assets/herographics.svg";
import Ellipse9 from "../assets/Ellipse9.svg";
import { Toolbar, IconButton, Menu, MenuItem } from "@mui/material";
import { IoMenu } from "react-icons/io5";

const Hero = ({ active }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      width={1}
      color={"#fff"}
      bgcolor={"#0A2640"}
      py={3}
      mb={6}
      position={"relative"}
      zIndex={999}
      sx={{
        textAlign: { xs: "center", md: "left" },
        height: { xs: "auto", md: "85vh" },
      }}
    >
      {/* <img
        src={Ellipse9}
        alt="svg image"
        style={{ position: "absolute", right: "-50px", top: "-50px" }}
      /> */}
      <Container>
        <AppBar
          position="fixed"
          color={isScrolled ? "default" : "transparent"}
          elevation={isScrolled ? 4 : 0}
          sx={{
            bgcolor: isScrolled ? "#fcf0dc" : "transparent",
            height: 70,
            py: 2,
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h3" fontWeight={600}>
                Novelty
              </Typography>
            </Box>

            {/* Mobile */}
            <div sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ display: { xs: "block", md: "none" }, height: 50 }}
              >
                <IoMenu size={40} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Products</MenuItem>
                <MenuItem onClick={handleMenuClose}>Services</MenuItem>
                <MenuItem onClick={handleMenuClose}>About</MenuItem>
                <MenuItem onClick={handleMenuClose}>Login</MenuItem>
              </Menu>
            </div>

            {/* Web */}
            <Box display={"flex"} sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                sx={{
                  color: isScrolled ? "#0A2640" : "#fff",
                  textTransform: "none",
                  fontSize: 14,
                  mr: 2,
                }}
              >
                Products
              </Button>
              <Button
                sx={{
                  color: isScrolled ? "#0A2640" : "#fff",
                  textTransform: "none",
                  fontSize: 14,
                  mr: 2,
                }}
              >
                Sevices
              </Button>
              <Button
                sx={{
                  color: isScrolled ? "#0A2640" : "#fff",
                  textTransform: "none",
                  fontSize: 14,
                  mr: 2,
                }}
              >
                About
              </Button>
              <button
                // className={`button ${active ? "active" : ""}`}
                className=" button"
                type="button"
                style={{
                  backgroundColor: isScrolled && "#0A2640",
                  color: isScrolled && "#fcf0dc",
                }}
              >
                Login
              </button>
            </Box>
          </Container>
        </AppBar>

        <Grid container mt={5} spacing={8} position={"relative"}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" mt={3} mb={2} color={"#fff"}>
              Welcome to
            </Typography>
            <Typography variant="h2" mb={4} color={"#fff"}>
              Novelty Global Ventures!
            </Typography>
            <Typography variant="body1" mb={5} color={"#fff"}>
              At Novelty Global Ventures, we're dedicated to providing you with
              the best services tailored to meet your needs. Our commitment to
              excellence and customer satisfaction sets us apart.
            </Typography>
            <Button
              variant="outlined"
              width={200}
              sx={{
                border: "2px solid white",
                color: "white",
                borderRadius: 3,
                height: 50,
                width: 200,
                "&:hover": {
                  bgcolor: "#fcf0dc",
                  color: "#0A2640",
                },
              }}
            >
              Explore
            </Button>
          </Grid>
          <Grid item xs={12} md={6} height={400}>
            <img
              src={herographics}
              alt="hero image"
              style={{ width: "100%", height: "90%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
