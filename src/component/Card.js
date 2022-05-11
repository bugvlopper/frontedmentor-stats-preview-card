import React from "react";
import "../css/Card.css"
class Card extends React.Component {
    
    render() { 
        return (
            <div id="cardComponent">
                <div id="card">
                    <div id="image">
                        <img className="mainImg" alt="co-working" />
                    </div>
                    <div id="info">
                        <h1>Get <span>insights</span> that help your business grow.</h1>
                        <div id="subInfo">
                            <p className="gray firstP">Discover the benefits of data analytics and make better decisions regarding revenue,customer experience, and overall efficiency.</p>
                            <div id="dataContainer">
                                <div id="data">
                                    <h2 className="number">10k+</h2>
                                    <p className="text gray">companies</p>
                                </div>
                                <div id="data">
                                    <h2 className="number">314</h2>
                                    <p className="text gray">templates</p>
                                </div>
                                <div id="data">
                                    <h2 className="number">12m+</h2>
                                    <p className="text gray">queries</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/bugvlopper" target="_blank" rel="noreferrer">Bugvlopper</a>.
                </div>
            </div>
        );
    }
}
 
export default Card;