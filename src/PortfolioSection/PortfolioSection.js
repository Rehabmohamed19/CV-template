import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PortfolioSection.css';

class PortfolioSection extends React.Component {
    constructor(){
        console.log("Constructor") //1

        super();
    }
    render(){ //2
        let cards = [
            { cardTitle: "python", color: "green" },
            { cardTitle: "IOT", color: "gold" },
            { cardTitle: "web", color: "grey" },
            { cardTitle: "software", color: "pink" },
            { cardTitle: "testing", color: "light green" },
            { cardTitle: "network", color: "orange" },

        ];
        return (
            <>
                <h3 className="offset-1 p-3 text-start"> Portfolio</h3>
                <div className="container portcards">
                    {cards.map((item) => {
                        return (
                            
                                <div className="col-3 m-3" style={{ "background-color" :`${item.color}` }}>
                                    <div className="card h-100" style={{ "background-color" :`${item.color}` }}>
                                        <div className="card-body"style={{ "background-color" :`${item.color}` }} >
                                            <h5 className="card-title">{item.cardTitle}</h5>
                                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        </div>
                                    </div>
                                </div>
                            
                        );
                    })}

                </div>
        </>
        );
    }
}

export default PortfolioSection;
