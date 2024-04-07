import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us-container">
            <h2>Why Choose Us?</h2>
            <div className="card">
                <div className="icon">
                    <img src="https://img.freepik.com/free-photo/surprised-male-teacher-wearing-glasses-holding-points-abacus-sitting-table-with-school-tools-classroom_141793-114513.jpg" alt="Expert Faculty Icon" />
                </div>
                <div className="content">
                    <h3>Expert Faculty</h3>
                    <p>Our faculty are subject matter experts with practical experience. They focus on personalized learning.</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="https://img.freepik.com/premium-vector/inscription-success-successful-teamwork-overcoming-crisis-concept-achieving-career-flat-illustration-isolated-white_169479-854.jpg" alt="Complete Success Package Icon" />
                </div>
                <div className="content">
                    <h3>Complete Success Package</h3>
                    <p>Leading Exam Prep Materials with video lessons, live sessions, doubt resolution forums, and webinars.</p>
                </div>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="https://img.freepik.com/premium-photo/successful-business-deals-job-placements-celebrated-with-handshakes_875825-110422.jpg" alt="Placements Icon" />
                </div>
                <div className="content">
                    <h3>Placements</h3>
                    <p>Interactive learning workshops, mock interviews, and placement drives will help you impress the employers and get the dream job.</p>
                </div>
            </div>
            <div class="container-options">
        <div class="options-card">
            <h3>Levels</h3>
            <p>Three (13 papers)</p>
        </div>
        <div class="options-card">
            <h3>Duration</h3>
            <p>6-18 months</p>
        </div>
        <div class="options-card">
            <h3>Exams</h3>
            <p>Quarterly (Online)</p>
        </div>
        <div class="options-card">
            <h3>Exemptions</h3>
            <p>Up to 9 papers</p>
        </div>
    </div>
        </div>
    );
}

export default WhyChooseUs;
