import React from "react";
import AccommodationList from "../components/accommodations/AccommodationList";
import Heading from "../components/common/Heading";
import Paragraph from "../components/common/Paragraph";
import Motion from "../components/motion/Motion";

const Accommodations = () => {

  document.title = "Holidaze | Find Accommodation";

  return(
    <Motion>
      <Heading size="1">Accommodations</Heading>
      <Paragraph>We hope you find what you're looking for!</Paragraph>
      <AccommodationList/>
    </Motion>
  );
};

export default Accommodations;
