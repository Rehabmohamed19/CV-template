import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeaderSection.css";

class HeaderSection extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Rehab",
      position: "Full stack Developer",
    };
  }
  render() {
    //2
    return (
      <>
        
        <div className="card bg-dark text-white">
          <img
            src={
              "https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
            }
            className="card-img"
            alt="Logo"
            height={"50%"}
          />
          <div className="card-img-overlay col-6 align-items-center">
            <h1 className="card-title">Rehab Mohamed</h1>
            <p className="card-text fs-3">Full Stack Developer </p>
            <a href="#" className="btn btn-outline-light border-light">
              Contact Me
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderSection;
