import React, { Component } from "react";
import styled from "styled-components";

const Contento = styled.div`
  margin: 0 auto;
  width: fit-content;
  text-align: center;
  padding-top: 200px;
`;

class Contact extends Component {
  render() {
    return (
      <>
        <Contento>
          <h4>Izabela Wlazło</h4>
          <p>
            <b>+48 733 253 028</b>
          </p>
          <p>izabelawlazlo9@gmail.com</p>
          <p>Rzeszów</p>
        </Contento>
      </>
    );
  }
}

export default Contact;
