import React, { Component } from "react";

class Contact extends Component {
  state = {
    Name: "",
    Email: "",
    Message: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${this.state.Name}, message has been sent!`);
    this.setState({
      Name: "",
      Email: "",
      Message: "",
    });
  };

  render() {
    return (

      <div className='container bg-white'>
        <div className='row content-heading'>
          <div className='col-md-12'>
            <h1>Contact</h1>
          </div>
        </div>
        <hr></hr>
        <form className='form'>
          <div className='form-group'>
            <label for='name'>Name</label>
            <input
              type='text'
              value={this.state.Name}
              name='Name'
              onChange={this.handleInputChange}
              className='form-control'
              id='formGroupExampleInput'
              placeholder='Name Last name'
            ></input>
          </div>
          <div class='form-group'>
          <label for='name'>Email</label>

            <input
              type='text'
              name='Email'
              value={this.state.Email}
              onChange={this.handleInputChange}
              className='form-control'
              id='formGroupExampleInput2'
              placeholder='Example@Email.com'
            ></input>
          </div>
        </form>
        <form className='was-validated'>
          <div className='mb-3'>
            <label for='validationTextarea'>Message</label>
            <textarea
              type='text'
              name='Message'
              className='form-control is-invalid'
              id='validationTextarea'
              value={this.state.Message}
              onChange={this.handleInputChange}
              placeholder='Message here'
              required
            ></textarea>
          </div>
        </form>
        <button className='btn' onClick={this.handleFormSubmit}>
          Submit
        </button>
      </div>
    );
  }
}

export default Contact;
