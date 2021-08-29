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
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export class About extends Component {
  render() {
    return (
      <div id="about"  >
        <MDBContainer
          id="about"
          fluid
          style={{
            padding: "2%",
            fontFamily: "Red Rose",
            
          }}
          className="color con"
        >
          <h1 className="white-text"> <FontAwesomeIcon icon={faAddressCard}  /> ABOUT ME</h1>
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
                      English
                    </MDBBadge>
                    <MDBBadge color="default" style={{ margin: "1%" }}>
                      Hindi
                    </MDBBadge>
                    <MDBBadge color="default" style={{ margin: "1%" }}>
                    Gujarati
                    </MDBBadge>
                   
                    
                  </MDBContainer>
                </h2>
                <br />
                <MDBCard
                  style={{  textAlign: "center", margin: "auto" }}
                >
                  <MDBCardBody>
                    <MDBCardTitle>Social Media</MDBCardTitle>
                    <MDBRow>
                      <MDBCol size="12">
                        <MDBRow>
                          <MDBCol size="6">
                            <a
                              href="https://github.com/himanshu72"
                              target="blank"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                            >
                              <img
                                src={github}
                                alt="github"
                               className="grow"
                              />
                            </a>
                          </MDBCol>

                          <MDBCol size="6">
                            <a
                              href="https://www.linkedin.com/in/himanshu-joshi-81a586178/"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                              target="blank"
                            >
                              <img
                                src={linkedin}
                                alt="linkedin"
                                className="grow"
                              />
                            </a>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol size="12">
                        <MDBRow>
                          <MDBCol size="6" >
                            <a
                              href="https://www.instagram.com/himanshu_j_o_s_h_i/"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                              target="blank"
                            >
                              <img
                                src={insta}
                                alt="instagram"
                                className="grow"
                              />
                            </a>
                          </MDBCol>
                          <MDBCol size="6">
                            <a
                              href="mailto:hjoshi115@gmail.com"
                              className="color btn"
                              style={{ borderRadius: "45%" }}
                              target="blank"
                            >
                              <img
                                src={gmail}
                                alt="gmail"
                                className="grow"
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
