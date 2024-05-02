import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import energepic from "../assets/energepic.jpg";
import goumbik from "../assets/goumbik.jpg";
import pressmaster from "../assets/pressmaster.png";

const Content = () => {
  return (
    <>
      <Container sx={{ mt: 3, mb: 6 }}>
        <Typography variant="h3" fontWeight={600} mb={4} color="#0A2640">
          What we do
        </Typography>
        <Grid
          container
          mb={5}
          sx={{
            // textAlign: { xs: "center", md: "left" },
            height: { xs: "auto", md: "350" },
          }}
          spacing={4}
        >
          <Grid item xs={12} md={6} height={1}>
            <img
              src={goumbik}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              mb={3}
              sx={{ mt: { xs: "", md: 3 } }}
              textAlign={"justify"}
              color={"#0A2640"}
            >
              Welcome to Novelty Global Ventures, a leader in strategic
              investment and diversified holdings across multiple industries.
              With a rich history of successful ventures and forward-looking
              investments, we are committed to driving growth, fostering
              innovation, and creating long-term value for our partners,
              stakeholders, and the communities we serve.
            </Typography>
            <Typography
              variant="body1"
              mb={3}
              textAlign={"justify"}
              color={"#0A2640"}
            >
              At Novelty Global Ventures, we recognize the power of diversity
              and the strength it brings to our portfolio. Currently, we hold
              significant shares in five key industries, each representing an
              opportunity for sustainable growth and impactful change.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          mb={5}
          sx={{
            // textAlign: { xs: "center", md: "left" },
            height: { xs: "auto", md: "350" },
          }}
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={6}
            height={1}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <img
              src={energepic}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              mb={3}
              sx={{ mt: { xs: "", md: 3 } }}
              textAlign={"justify"}
              color={"#0A2640"}
            >
              We are partners in progress, collaborating with visionary leaders,
              empowering talented teams, and nurturing businesses to reach their
              full potential. Our commitment to excellence, integrity, and
              responsible stewardship guides everything we do.
            </Typography>
            <Typography
              variant="body1"
              mb={3}
              textAlign={"justify"}
              color={"#0A2640"}
            >
              As we continue to expand our reach and explore new opportunities,
              our dedication to fostering innovation, driving growth, and
              creating lasting value remains unwavering. Join us on this journey
              as we shape the future together.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            height={1}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <img
              src={energepic}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          mb={5}
          sx={{
            // textAlign: { xs: "center", md: "left" },
            height: { xs: "auto", md: "350" },
          }}
          spacing={4}
        >
          <Grid item xs={12} md={6} height={1}>
            <img
              src={pressmaster}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              mb={3}
              sx={{ mt: { xs: "", md: 10 } }}
              textAlign={"justify"}
              color={"#0A2640"}
            >
              For more information on our current holdings, latest news, and
              insights into our investment approach, stay tuned to our website
              and connect with us to explore potential collaborations
              and partnerships.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Content;
