import React, { Component } from "react";
import styled from "styled-components";

import inzynierka from "../img/inzynierka.png";
import bocian from "../img/bocian.png";
import finaly from "../img/finaly.png";
import dekada from "../img/Dekada różnorodnośći biologicznej.png";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import kawa1 from "../img/kawa 1.png";
import kawa2 from "../img/kawa 2.png";
import kawa3 from "../img/kawa 3.png";
import dypw from "../img/dypw.jpg";
import wyr from "../img/wyr1.jpg";
import druk from "../img/druk.jpg";
import plakat from "../img/plakat.png";

const Gallery = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  padding-top: 50px;
  flex: 100%;
  max-width: 100%;
  -webkit-box-shadow: 0px 5px 8px -2px rgba(56, 56, 56, 0.62);
  box-shadow: 0px 5px 8px -2px rgba(56, 56, 56, 0.62);
  > img {
    width: 100%;
    padding: 5px;
  }
  @media (min-width: 768px) {
    flex: 50%;
    max-width: 50%;
  }
  @media (min-width: 1366px) {
    flex: 33%;
    max-width: 33%;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Gallery>
          <img src={inzynierka} width="100%" />
          <img src={plakat} width="100%" />
          <Column>
            <img src={dekada} />
            <img src={wyr} />
            <img src={logo1} />
            <img src={kawa1} />
          </Column>
          <Column>
            <img src={finaly} />
            <img src={druk} />
            <img src={logo2} />
            <img src={kawa2} />
          </Column>
          <Column>
            <img src={bocian} />
            <img src={dypw} />
            <img src={logo3} />
            <img src={kawa3} />
          </Column>
        </Gallery>
      </div>
    );
  }
}
export default AboutMe;
