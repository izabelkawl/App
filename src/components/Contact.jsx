import React, { Component } from "react";
import styled from "styled-components";

import bg from "../img/yellow_bg.svg";
import me from "../img/me.svg";
import linkedin_icon from "../img/icon_in.svg";
import facebook_icon from "../img/icon_fb.svg";
import github_icon from "../img/icon_gh.svg";

const Content = styled.div`
  box-sizing: content-box;
  min-height: 70vh !important;
  display: table;
  @media (min-width: 1920px) {
    min-height: 80vh !important;
    padding: 0 5vw 0;
  }
`;
const VerticalDiv = styled.div`
  padding: 10vh 5vw;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 10vw 0;
    display: table-cell;
    vertical-align: middle;
  }
  @media (min-width: 1365px) {
    padding: 0 5vw 0;
  }
`;
const Paragraph = styled.h4`
  line-height: 40px;
  color: #a8a8a8;
  font-weight: 300;
  text-align: justify;
  padding: 30px 0;
  font-size: 18px;
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 10vh 0;
    font-size: 22px;
  }
  @media (min-width: 1365px) {
    font-size: 24px;
    line-height: 50px;
  }
`;
const ImageBg = styled.img`
  position: fixed;
  z-index: 0;
  bottom: 0;
  width: 50vw;
  right: 0;
  @media (min-width: 768px) {
    position: absolute;
    z-index: 1;
  }
  @media (min-width: 1920px) {
    width: 50vw;
  }
`;
const Person = styled.img`
  position: fixed;
  z-index: 1;
  width: 22vw;
  filter: drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.1));
  bottom: 0;
  left: 65vw;
  @media (min-width: 768px) {
    position: absolute;
    z-index: 2;
  }
  @media (min-width: 1920px) {
    width: 25vw;
  }
`;
const IconBox = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 5vh;
  left: 5vw;
  @media (min-width: 768px) {
    position: absolute;
    z-index: 3;
    bottom: 10vh;
  }
  @media (min-width: 1365px) {
    left: 6vw;
  }
  @media (min-width: 1920px) {
    left: 10vw;
  }
`;

const icon = {
  paddingRight: "2vw",
  height: "7vh",
  filter: "drop-shadow(6px 6px 4px rgba(0, 0, 0, 0.1))",
};
class Contact extends Component {
  render() {
    return (
      <>
        <Content>
          <VerticalDiv>
            <Paragraph>
              <b style={{ color: "black" }}>Izabela Wlazło</b>
              <b>+48 733 253 028</b>
              <br></br>izabelawlazlo9@gmail.com
              <br></br>Rzeszów
            </Paragraph>
          </VerticalDiv>

          <IconBox>
            <a href="https://www.facebook.com/izabelka279/">
              <img src={facebook_icon} style={icon} />
            </a>

            <a href="https://www.linkedin.com/in/izabelawl/">
              <img src={linkedin_icon} style={icon} />
            </a>
            <a href="https://github.com/izabelkawl">
              <img src={github_icon} style={icon} />
            </a>
          </IconBox>

          <ImageBg src={bg} />
          <Person src={me} />
        </Content>
      </>
    );
  }
}

export default Contact;
