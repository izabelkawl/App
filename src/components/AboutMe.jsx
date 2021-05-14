import React, { Component } from "react";
import styled from "styled-components";

import bocian from "../img/bocian.png";
import finaly from "../img/finaly.png";
import dypw from "../img/dypw.jpg";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";

const Gallery = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px 15px;
  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 200px;
    grid-auto-flow: dense;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Gallery>
          <img src={bocian} />
          <img src={finaly} />
          <img src={dypw} />
          <img src={logo1} />
          <img src={logo2} />
          <img src={logo3} />
        </Gallery>
      </div>
    );
  }
}
export default AboutMe;
