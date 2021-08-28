import React from "react";
import Nav from "../componets/Nav";
import hello from "../images/me.svg";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Typist from "react-typist";
import cv from "../cv.pdf";
import { Tween } from "react-gsap";
import anime from "../images/coder.json"
import Lottie from "lottie-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Buttons from "../componets/Buttons"
library.add(fab); 
function index() {
  let names=["Nodejs","ExpressJS","React","Angular","Graphql","MongoDB","Postgresql","android"];
  let links=["https://nodejs.org/en/about/",
   "https://expressjs.com/",
    "https://reactjs.org/",
    "https://angular.io/",
    "https://graphql.org/",
    "https://www.mongodb.com/",
    "https://www.postgresql.org/",
    "https://www.android.com/"
  ];           
  let btns=[];
  let names2=["Django","Spring","Xamarin","Automation"]
  let links2=["https://www.djangoproject.com/","https://spring.io/","https://dotnet.microsoft.com/apps/xamarin","https://www.browserstack.com/guide/selenium-webdriver-tutorial"];
  let btns2=[];  
  for(let x=0;x<names2.length;x++){
      btns2.push(  <MDBCol size="3">        
       <Buttons name={names2[x]}link={links2[x]} />
      </MDBCol>
    );
  }
  
  for(let x=0;x<names.length;x++){
     
    btns.push(
        <MDBCol size="3">        
          <Buttons name={names[x]}link={links[x]} />
        </MDBCol>

      )
  }
  
  return (
    
    <div>
   

      <MDBContainer  style={{
            padding: "2%",
            fontFamily: "Red Rose",
            border: "1px solid white",
            marginTop:"-12%"
          }}
          >
      <h1 className="h1-responsive font-weight-bold my-5" className="black-text">
      <FontAwesomeIcon icon={faCode} className="bd"  /> My Skills
        </h1> 
         
        < MDBRow>
       
         
          <MDBCol md="5" style={{textAlign:"center"}}  >
            <Lottie animationData={anime} style={{margin:"auto"}}  />
      
          </MDBCol>
          <MDBCol
            md="7"
            style={{
              padding:"5%"
            }}
          >
             <h4 className="my-3"> I Usually Woke With  </h4>
            <div style={{ textAlign: "center" }}>
              <MDBRow>
                {btns}
             </MDBRow>
            </div>

            <div style={{ textAlign: "center" }}>
            <h4 className="my-3"> I Am Familiar With </h4>
              <MDBRow>
              {btns2}
              </MDBRow>
            </div>
         
          </MDBCol>
            </MDBRow>
                <a href="https://docs.google.com/document/d/1ifHlFsvcA7aS64ghvUdaZuPtgdEd044uMnBfgO2_snE/edit?usp=sharing" target="_blank" > <MDBBtn color="dark" outline >  View Resume</MDBBtn></a>

      </MDBContainer>
    </div>
  );
}

export default index;
