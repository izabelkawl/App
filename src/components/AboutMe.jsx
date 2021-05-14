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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense row;
  grid-gap: 1em;
  margin: 1em;
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Gallery>
          <img src={bocian} width="400px" />
          <img src={finaly} width="400px" />
          <img src={dypw} width="400px" />
          <img src={logo1} width="400px" />
          <img src={logo2} width="400px" />
          <img src={logo3} width="400px" />
        </Gallery>
      </div>
    );
  }
}
export default AboutMe;
