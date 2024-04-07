import React from 'react';
import "./index.css"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      currentQualification: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // You can access form values using this.state
    console.log('Form submitted:', this.state);
  }

  render() {
    return (
      <div className="container">
        <div>
        <h1>Become ACCA in 18 months</h1>
        <p>Acquire globally recognized accountancy qualification. ACCA is called an <strong>Global CA</strong> and get placed in top MNCs & Big4s. Begin ACCA prep with <strong>10% Off</strong> now.</p>
        <div className="stats">
          <div className="stat">
            <span className="number">348,750</span>
            <span className="label">Applicants</span>
          </div>
          <div className="stat">
            <span className="number">96.47%</span>
            <span className="label">Course Passed</span>
          </div>
          <div className="stat">
            <span className="number">3,505,116</span>
            <span className="label">Placements</span>
          </div>
        </div>
        <button className="btn">Download Brochure</button>
        </div>
        <div className="form-container">
          <h2>Applying to be an ACCA? Get in touch with us!</h2>
          <form id="contactForm" onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
            <select name="currentQualification" value={this.state.currentQualification} onChange={this.handleInputChange}>
              <option value="" disabled selected>Current Qualification</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Graduate">Graduate</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
            <button type="submit">Request Call Back</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
