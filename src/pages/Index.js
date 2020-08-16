import React from "react";
import Nav from "../componets/Nav";
import hello from "../images/me.svg";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Typist from "react-typist";
import cv from "../cv.pdf";
import { Tween } from "react-gsap";
function index() {
  return (
    <div>
      <Nav />

      <MDBContainer style={{ marginTop: "4%" }}>
        <MDBRow>
          <MDBCol md="5 ">
            <Tween from={{ x: "-1000px" }} duration="1.5">
              <img alt="img" src={hello} style={{ width: "100%" }} />
            </Tween>
          </MDBCol>
          <MDBCol
            md="7"
            style={{
              textAlign: "justify",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Typist>
                <h4
                  style={{
                    fontFamily: "Red Rose",
                    fontSize: "3.5em",
                    textShadow: "1px 1px 1  px #141e30",
                  }}
                >
                  Hello,I am Himanshu Joshi
                </h4>
              </Typist>
            </div>

            <div style={{ textAlign: "center" }}>
              <a href={cv} target="_new">
                <MDBBtn outline color="black">
                  CV
                </MDBBtn>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default index;
