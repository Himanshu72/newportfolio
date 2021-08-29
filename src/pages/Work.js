import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBRow, MDBCol, MDBContainer, MDBBadge } from "mdbreact";
import proj1 from "../images/proj1.svg"
import proj2 from "../images/proj2.svg"
import proj3 from "../images/proj3.svg"
function Work() {
  return (
    <div
    style={{
      fontFamily: "Red Rose",
      width:"100%"
    }}
    className="my-5 color" >
      <h1 className="white-text"   >Some Of My Work </h1>
      <br /><br /><br />
      <MDBContainer fluid className="center" >
        <MDBRow>
          <MDBCol md="4" style={{padding:"2%"}} >
          
      <MDBCard>
        <MDBCardImage className="img-fluid" src={proj1}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Teamify</MDBCardTitle>
          <MDBCardText>
          You can use this tool to boost collaboration and faster communication. 
  <br/>          <MDBBadge className="color " >Nodejs</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >EJS</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >MDBootstrap</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >Express</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >MongoDB</MDBBadge>
          </MDBCardText>
          <MDBBtn href="http://teamiify.herokuapp.com/" target="_blank" className="color" >View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
   
    
            
           </MDBCol> 
          
           <MDBCol md="4" style={{padding:"2%"}} >
         
      <MDBCard>
        <MDBCardImage className="img-fluid" src={proj2}
          waves />
        <MDBCardBody>
          <MDBCardTitle>AU_CMS</MDBCardTitle>
          <MDBCardText >
            AU-CMS is an event management system for Ahmedabad University.
            <br /><MDBBadge className="color " >Nodejs</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >EJS</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >MDBootstrap</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >Express</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >LOWDB</MDBBadge>

          </MDBCardText>
          <MDBBtn href="http://aucms.herokuapp.com/ " target="_blank" className="color" >View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    
    
            
           </MDBCol> 

           <MDBCol md="4" style={{padding:"2%"}} >
         
      <MDBCard>
        <MDBCardImage className="img-fluid" src={proj3}
          waves />
        <MDBCardBody>
          <MDBCardTitle>Xam App</MDBCardTitle>
          <MDBCardText >
            Controller will track location of agent.
            <br/>
            <MDBBadge className="color " >C#</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >Xamarin</MDBBadge>&nbsp;&nbsp;
            <MDBBadge className="color" >MaterialUI</MDBBadge>&nbsp;&nbsp;
            

          </MDBCardText>
          <MDBBtn href="https://drive.google.com/drive/folders/1z16oGvuwzaN6e8Zig-K1NbqXS_HlvU8a?usp=sharing" target="_blank" className="color" >View</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    
             
           
    
            
           
        </MDBRow>
        <br />
        <a href="https://github.com/himanshu72" target="_blank" > <MDBBtn color="light" >  View More</MDBBtn>  </a>
        </MDBContainer>
      <br />
    </div>
  );
}
export default Work;
