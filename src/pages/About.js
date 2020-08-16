import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCardBody,
} from "mdbreact";
import { Fade } from "react-awesome-reveal";
import js from "../images/js.svg";
import me from "../images/me.jpg";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import insta from "../images/instagram.svg";
import gmail from "../images/gmail.svg";

export class About extends Component {
  render() {
    return (
      <div>
        <MDBContainer
          id="about"
          fluid
          style={{
            marginTop: "4%",
            padding: "2%",
            fontFamily: "Red Rose",
            border: "1px solid white",
          }}
          className="color"
        >
          <br />
          <br />
          <br />
          <h1 className="white-text">ABOUT ME</h1>
          <br />
          <br />
          <br />
          <MDBRow style={{ marginTo: "5%" }}>
            <MDBCol md="5" style={{ textAlign: "center" }}>
              <Fade triggerOnce>
                <img
                  src={me}
                  className="img-fluid "
                  style={{
                    width: "35%",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                  alt="img"
                />

                <br />
                <br />
                <p
                  className="white-text"
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "1em",
                    fontWeight: "300",
                    textShadow: "0.4px 0.4px 0.4px #141e30",
                    textAlign: "justify",
                  }}
                >
                  Hi, my name is Himanshu joshi I am a full stack developer
                  from&nbsp;
                  <a
                    href="https://medium.com/@.s/india-is-the-greatest-country-in-the-world-dae29e4c8e6b"
                    target="_new"
                  >
                    India.
                  </a>
                  &nbsp;I love to develop digital products like websites,
                  android apps, desktop apps, etc. I am a fan of science and
                  technology wants to be an entrepreneur. My areas of interest
                  are software-development, Data science, and entrepreneurship.{" "}
                </p>
                <h2 className="white-text">
                  <p>Language I Speak </p>
                  <MDBContainer
                    style={{
                      fontSize: "0.8em",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                    }}
                  >
                    <br />
                    <MDBBadge color="default" style={{ margin: "1%" }}>
                      C/C++
                    </MDBBadge>
                    <MDBBadge color="default" style={{ margin: "1%" }}>
                      Java
                    </MDBBadge>
                    <MDBBadge color="default" style={{ margin: "1%" }}>
                      Javascript
                    </MDBBadge>
                    <MDBBadge color="default" style={{ margin: "1%" }}>
                      Python
                    </MDBBadge>
                  </MDBContainer>
                </h2>
                <br />
                <MDBCard
                  style={{ width: "60%", textAlign: "center", margin: "auto" }}
                >
                  <MDBCardBody>
                    <MDBCardTitle>Social Media</MDBCardTitle>
                    <MDBRow>
                      <MDBCol size="12">
                        <MDBRow>
                          <MDBCol>
                            <a
                              href="https://github.com/himanshu72"
                              target="blank"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                            >
                              <img
                                src={github}
                                alt="github"
                                style={{ width: "100%" }}
                              />
                            </a>
                          </MDBCol>

                          <MDBCol>
                            <a
                              href="https://www.linkedin.com/in/himanshu-joshi-81a586178/"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                              target="blank"
                            >
                              <img
                                src={linkedin}
                                alt="linkedin"
                                style={{ width: "100%" }}
                              />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol size="12">
                        <MDBRow>
                          <MDBCol>
                            <a
                              href="https://www.instagram.com/himanshu_j_o_s_h_i/"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                              target="blank"
                            >
                              <img
                                src={insta}
                                alt="instagram"
                                style={{ width: "100%" }}
                              />
                            </a>
                          </MDBCol>
                          <MDBCol>
                            <a
                              href="mailto:hjoshi115@gmail.com"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                              target="blank"
                            >
                              <img
                                src={gmail}
                                alt="gmail"
                                style={{ width: "100%" }}
                              />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </Fade>
            </MDBCol>
            <MDBCol md="7">
              <img src={js} style={{ width: "100%" }} alt="img" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default About;
