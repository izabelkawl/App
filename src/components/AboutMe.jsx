import React, { Component } from "react";
import styled from "styled-components";

import img from "../img/aboutme.svg";
// import bg from "../img/yellow_bg.svg";
// import me from "../img/me.svg";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px 15px;
  grid-template-areas: "col1 col2 col3";
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        About me
        <Gallery>
          <img src={img} />
          <img src={img} />
          <img src={img} />
          <img src={img} />
          <img src={img} />
        </Gallery>
      </div>
    );
  }
}
export default AboutMe;
