import {
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
// import { FaSquareFacebook } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        background: "#0A2640",
        color: "white",
        paddingBottom: "20px",
      }}
    >
      <Container
        sx={{
          textAlign: { xs: "center", md: "left" },
          mb: 4,
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" mb={3} color="#fff">
              Join Our Mailing List
            </Typography>
            <Typography variant="body2" mb={3} color="#fff">
              Be the first to know about our latest offerings, exclusive deals,
              and industry insights. Sign up to receive our newsletter and stay
              ahead of the curve!
            </Typography>
            <Box display={"flex"} justifyContent={"space-between"} width={1}>
              <TextField
                id="filled-basic"
                label="Enter your email address"
                variant="filled"
                sx={{
                  bgcolor: "white",
                  flex: 1,
                  marginRight: 1,
                  borderRadius: 2,
                  width: 0.7,
                  height: 50,
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  border: "2px solid white",
                  color: "white",
                  height: 50,
                  width: 0.2,
                  borderRadius: 3,
                  "&:hover": {
                    bgcolor: "#fcf0dc",
                    color: "#0A2640",
                  },
                }}
              >
                Join
              </Button>
            </Box>
          </Grid>
          <Divider
            sx={{
              display: { xs: "block", md: "none" },
              mt: 12,
              width: 1,
              bgcolor: "white",
            }}
          />
          <Grid item xs={12} md={6}>
            <Typography variant="h3" mb={3} color="#fff">
              Connect with Us
            </Typography>
            <Typography variant="body2" mb={3} color="#fff">
              Follow us on [Facebook, Twitter, LinkedIn] to stay updated with
              our latest news, promotions, and community activities.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: { xs: "center", md: "left" },
              }}
            >
              <FaFacebookSquare
                size={40}
                style={{
                  marginRight: "10px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
              <FaTwitterSquare
                size={40}
                style={{
                  marginRight: "10px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
              <FaLinkedin
                size={40}
                style={{ color: "#fff", cursor: "pointer" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
