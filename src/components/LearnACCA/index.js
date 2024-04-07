import React from 'react';
import "./index.css"

const LearnACCA = () => {
    return (
        <div>
            <div className="heading-container">
                <h1>What will you Learn in ACCA?</h1>
                <hr />
            </div>
            <div className="acca-container">
                <div className="section">
                    <h2>Knowledge Level</h2>
                    <ul>
                        <li>Business and Technology (BT)</li>
                        <li>Management Accounting (MA)</li>
                        <li>Financial Accounting (FA)</li>
                    </ul>
                    <p>3 papers</p>
                </div>
                <div className="section">
                    <h2>Skill Level</h2>
                    <ul>
                        <li>Corporate and Business Law (LW)</li>
                        <li>Performance Management (PM)</li>
                        <li>Taxation (TX)</li>
                        <li>Financial Reporting (FR)</li>
                        <li>Audit and Assurance (AA)</li>
                        <li>Financial Management (FM)</li>
                    </ul>
                    <p>6 papers</p>
                </div>
                <div className="section">
                    <h2>Professional Level</h2>
                    <ul>
                        <li>Compulsory:</li>
                        <ul>
                            <li>SBL - Strategic Business Leader</li>
                            <li>SBR - Strategic Business Reporting</li>
                        </ul>
                        <li>Two out of the following:</li>
                        <ul>
                            <li>Advanced Financial Management (AFM)</li>
                            <li>Advanced Performance Management (APM)</li>
                            <li>Advanced Taxation (ATX)</li>
                            <li>Advanced Audit and Assurance (AAA)</li>
                        </ul>
                    </ul>
                    <p>4 papers</p>
                </div>
            </div>
        </div>
    );
}

export default LearnACCA;
