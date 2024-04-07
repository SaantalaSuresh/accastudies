
import React from 'react';
import "./index.css"

const PlacementContainer = () => {
    return (
        <div>
         

            <div className="kick-off-container">
                <div className="content">
                    <h2>Kick off your ACCA Prep journey with IndigoLearn</h2>
                    <p>Sign-in and get instant access to our FREE Courses</p>
                    <button className="start-learning-button">START LEARNING NOW</button>
                </div>
                <form className="kick-off-form">
                    <h2 className="form-heading">Applying to be an ACCA? Get in touch with us!</h2>
                    <div className="form-group">
                        <input type="text" placeholder="Full Name" className="sector-input" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email ID" className="sector-input" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Current Qualification" className="sector-input" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Interested In" className="sector-input" />
                    </div>
                    <button type="submit" className="request-call-back-button">Request Call Back</button>
                </form>
            </div>
        </div>
    );
}

export default PlacementContainer;
