import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const values = [
  {
    id: 1,
    title: "Strategic Vision",
    body: "We maintain a forward-thinking strategic vision that guides our investment decisions, business partnerships, and overall growth trajectory to create long-term value",
  },
  {
    id: 2,
    title: "Leadership Excellence",
    body: "We cultivate a culture of leadership excellence by promoting mentorship, professional development, and a commitment to delivering exceptional results in all aspects of our operations.",
  },
  {
    id: 3,
    title: "Stakeholder Value",
    body: "We prioritize creating value for all stakeholders, including investors, employees, business partners, and the communities we operate in, through prudent investments and ethical business practices.",
  },
  {
    id: 4,
    title: "Adaptability",
    body: "We embrace change, remain agile, and adapt quickly to evolving market conditions, technological advancements, and business trends to stay ahead of the curve and capitalize on new opportunities.",
  },
  {
    id: 5,
    title: "Collaborative Partnerships",
    body: "We believe in fostering collaborative partnerships with our portfolio companies, industry peers, and external advisors to leverage collective expertise, insights, and networks for mutual growth and success.",
  },
];

const ValueCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {values.map((value) => (
        <div key={value.id}>
          <Card sx={{ width: "90%", my: 3, mr: 2 }} variant="outlined">
            <CardContent>
              <Typography variant="h5" mb={3} component="div">
                {value.title}
              </Typography>
              <Typography variant="body2">{value.body}</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export default ValueCard;
