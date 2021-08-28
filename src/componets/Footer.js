import { MDBFooter,MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import React, { Component } from 'react'
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import insta from "../images/instagram.svg";
import gmail from "../images/gmail.svg";    
export default class Footer extends Component {
    render() {
        return (
            
            <div style={{marginTop:"-3.5%",borderTop:"1px solid white"}} >
             <MDBFooter className="font-small">
                   <div className=" color footer-copyright text-center py-3">
        <MDBContainer >
          <MDBRow>
          <MDBCol size="3">
          <a href="https://www.instagram.com/himanshu_j_o_s_h_i/"
                              className="btn"
                              style={{ width:"50%",borderRadius:"25px" ,background:"white" }}

                              target="blank"
                            >
                              <img
                                src={insta}
                                alt="instagram"
                                style={{ width: "100%" }}
                              />
                            </a>
          </MDBCol>
          <MDBCol size="3">
              
          <a href="https://github.com/himanshu72"
                              className="btn"
                              style={{ width:"50%",borderRadius:"25px" ,background:"white" }}

                              target="blank"
                            >
                              <img
                                src={github}
                                alt="github"
                                style={{ width: "100%" }}
                              />
                            </a>
          </MDBCol>
          <MDBCol size="3">
          <a href="https://www.linkedin.com/in/himanshu-joshi-81a586178/"
                              className="btn"
                              style={{ width:"50%",borderRadius:"25px" ,background:"white" }}

                              target="blank"
                            >
                              <img
                                src={linkedin}
                                alt="linkedin"
                                style={{ width: "100%" }}
                              />
                            </a>

          </MDBCol>
          <MDBCol size="3">
              
          <a href="mailto:hjoshi115@gmail.com"
                              className="btn"
                              style={{ width:"50%",borderRadius:"25px" ,background:"white" }}

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
        </MDBContainer>
        
      </div> 
      </MDBFooter>
            </div>
        )
    }
}
