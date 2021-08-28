import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {MDBBtn,MDBCol } from "mdbreact";

library.add(fab); 
export default class Buttons extends Component {
    render() {
        let icon=this.props.icon;
        return (

            
            <div>
              <a target="_blank" href={this.props.link} >
              <button  className="langsbtn" style={{margin:"4% 0"}}>
               
                <span className="langs"> &nbsp;{this.props.name} </span>

            </button>                 
                </a> 
            </div>
            
        )
    }
}
