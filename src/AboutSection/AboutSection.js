import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutSection.css';

class AboutSection extends React.Component {
    constructor(){
        console.log("Constructor") //1

        super();
        this.state=
        {
            name: "RehabHeader",
            position:"Full stack Developer"
        };
    }
    render(){ //2
        return( 
        <> 
        {/* <div className='row align-bottom'>        
        <div className='col-6 '>
            About me
        </div>
        <div className='col-6'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </div>
        </div> */}
<div className="">
                    <div className="row p-3 m-3">
                        <div className="col-3 ">
                            <h2 className="text-center">ABOUT ME</h2>
                        </div>
                        <div className="col-8 about-info">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of
                                Lorem Ipsum.
                            </p>
                            <button className="btn btn-dark btn-lg">Download Resume</button>
                        </div>
                    </div>
                </div>
        </>
        );
    }
}

export default AboutSection;

