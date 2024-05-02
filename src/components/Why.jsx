import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Engage from "./Engage";

const Why = () => {
  return (
    <Box mb={6}>
      <Container>
        <Typography variant="h3" mb={3} fontWeight={600} color="#0A2640">
          Why Choose Us?
        </Typography>
        <Engage
          first_step="Complementary Strengths: Our brand brings unique strengths and capabilities to the table. By partnering with us, other brands can benefit from our expertise, resources, and market insights. Whether it's our innovative technology, established customer base, or strong distribution network, our brand's strengths can complement those of potential partners, creating a win-win situation."
          second_step="Access to New Markets: Partnering with our brand can provide access to new markets and customer segments. Whether it's tapping into international markets, reaching a younger demographic, or expanding into a different industry vertical, our brand's existing reach and market penetration can open up new opportunities for growth and expansion."
          third_step="Brand Enhancement: Collaborating with our brand can enhance the reputation and image of partnering brands. Our brand is known for its quality, innovation, and customer satisfaction, and by associating with us, other brands can leverage our positive brand equity to elevate their own image and credibility in the eyes of consumers."
          fourth_step="Product Synergy: When brands come together, there is an opportunity to create synergistic products or services that leverage each other's strengths. Whether it's combining unique features, integrating technologies, or bundling offerings, a partnership with our brand can lead to the development of compelling, differentiated products that resonate with customers and stand out in the market."
          fifth_step="Shared Resources: Partnering with our brand can unlock access to shared resources, whether it's R&D capabilities, manufacturing facilities, logistics, or marketing expertise. By pooling resources, brands can achieve economies of scale, reduce costs, and accelerate the development and delivery of new products and services."
          sixth_step="Innovation and Creativity: Our brand is committed to innovation and creativity, and we are constantly exploring new ideas and opportunities. By partnering with us, other brands can tap into our culture of innovation, collaborative brainstorming, and problem-solving, leading to the co-creation of novel solutions and experiences that can captivate consumers and drive competitive advantage.
"
          seventh_step=" Customer Engagement: A partnership with our brand can enhance customer engagement and loyalty. With our brand's proven track record of delivering exceptional customer experiences, partnering brands can leverage our expertise to deepen customer relationships, increase retention, and drive advocacy, ultimately leading to long-term business success and Your satisfaction is our top priority. We go above and beyond to ensure you have a seamless experience with us.
"
          eighth_step="isk Mitigation: Collaborating with our brand can help mitigate risks associated with market entry, product development, or competitive challenges. By sharing the burden of risk and leveraging each other's strengths, partnering brands can navigate uncertainties more effectively and capitalize on opportunities with greater confidence."
          ninth_step="Competitive Edge: A partnership with our brand can provide a competitive edge in the marketplace. Whether it's through differentiation, access to new resources, or enhanced market positioning, collaborating with our brand can give partnering brands a distinct advantage over competitors, leading to increased market share and industry leadership."
          tenth_step="Ultimately, partnering with our brand represents an opportunity for mutual benefit, leveraging each other's strengths, capabilities, and market presence to drive growth, innovation, and success. We believe that together, we can create value that exceeds the sum of our parts, and we are excited about the potential to forge impactful partnerships with like-minded brands."
          eleventh_step="Expertise: With 2years of experience, we have honed our skills and expertise to bring you unparalleled products/services.
"
          howToOur={true}
          remove3rdButton={true}
          useAutoContainer={false}
        />
      </Container>
    </Box>
  );
};

export default Why;
