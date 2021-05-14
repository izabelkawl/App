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
  padding-top: 50xp;
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  flex: 33%;
  max-width: 33%;
  padding: 15px;
  > img {
    width: 100%;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Gallery>
          <Column>
            <img src={finaly} />
            <img src={dypw} />
            <img src={bocian} />
            <img src={logo1} />
          </Column>
          <Column>
            <img src={bocian} />
            <img src={logo1} />
            <img src={dypw} />
            <img src={bocian} />
          </Column>
          <Column>
            <img src={logo2} />
            <img src={logo3} />
            <img src={logo2} />
            <img src={logo3} />
          </Column>
        </Gallery>
      </div>
    );
  }
}
export default AboutMe;
