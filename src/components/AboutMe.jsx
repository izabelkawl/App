import React, { Component } from "react";
import styled from "styled-components";

import bocian from "../img/bocian.png";
import finaly from "../img/finaly.png";
import dypw from "../img/dypw.jpg";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px 15px;
  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "col1 col2 col3";
  }
`;
const imageitem = {
  width: "30%",
};

class AboutMe extends Component {
  render() {
    return (
      <div>
        About me
        <Gallery>
          <img src={bocian} style={imageitem} />
          <img src={finaly} style={imageitem} />
          <img src={dypw} style={imageitem} />
          <img src={logo1} style={imageitem} />
          <img src={logo2} style={imageitem} />
          <img src={logo3} style={imageitem} />
        </Gallery>
      </div>
    );
  }
}
export default AboutMe;
