import React, { Component } from "react";
import styled from "styled-components";

import inzynierka from "../img/inzynierka.png";
import bocian from "../img/bocian.png";
import finaly from "../img/finaly.png";
import dekada from "../img/Dekada różnorodnośći biologicznej.png";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import dypw from "../img/dypw.jpg";
import kawa1 from "../img/kawa 1.png";
import kawa2 from "../img/kawa 2.png";
import kawa3 from "../img/kawa 3.png";

const Gallery = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
const Column = styled.div`
  flex: 100%;
  max-width: 100%;
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
          <Column>
            <img src={dekada} />
            <img src={logo1} />
            <img src={kawa1} />
            <img src={dypw} />
          </Column>
          <Column>
            <img src={finaly} />
            <img src={logo2} />
            <img src={kawa2} />
          </Column>
          <Column>
            <img src={bocian} />
            <img src={logo3} />
            <img src={kawa3} />
          </Column>
        </Gallery>
      </div>
    );
  }
}
export default AboutMe;
