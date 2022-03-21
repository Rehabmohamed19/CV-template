import React from 'react';
import './FooterSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

class FooterSection extends React.Component {
    constructor(){

        super();
    }
    render(){ //2
        console.log("RENDERED")
        return( 
        <> 
        <div className="bg-dark text-white footer">
          <div className="row col-12">
            <div className="col-4">
              <h6>Get In Touch</h6>
              <p>
                <FontAwesomeIcon icon={faPhoneSquare} /> 01005553713
              </p>
              <p>
              <FontAwesomeIcon className="me-3" icon={faEnvelope} />rehabmohamed@iti.com
              </p>
            </div>
            <div className="col-4 text-center">
              <button className="btn btn-outline-light"> Contact Me </button>
            </div>
            <div className="col-4 text-end">
              <p>
                <FontAwesomeIcon className="me-3" icon={faFacebook} />
                <FontAwesomeIcon className="me-3" icon={faTwitter} />
                <FontAwesomeIcon className="me-3" icon={faLinkedin} />
              </p>
              <p>CopyRight © 2019 KR</p>
            </div>
          </div>
        </div>
        </>
        );
    }
}

export default FooterSection;