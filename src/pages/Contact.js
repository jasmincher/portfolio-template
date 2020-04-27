import React from "react";
import axios from "axios";
import "../css/Contact.css";
import Header from "../components/Header";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const isFormValid = ({ errors, ...inputs }) => {
  let valid = true;

  //makes sure form isn't empty
  Object.values(errors).forEach((value) => {
    value.length > 0 && (valid = false);
  });

  //makes sure the form is filled out
  Object.values(inputs).forEach((value) => {
    value === "" && (valid = false);
  });

  return valid;
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: [null, null],
      name: "",
      email: "",
      message: "",
      errors: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const inputs = [this.state.name, this.state.email, this.state.message];

    if (isFormValid(this.state)) {
      e.target.reset();
      this.setState({ success: ["Email Sent", true] });
      console.log("Form submission successful!");

      //if form fields are filled in correctly then we submit form

      axios
        .post(
          "https://smartforms.dev/submit/5ea39d998a02626591cb5aa0",
          inputs,
          {
            headers: { Accept: "multipart/form-data" },
          }
        )
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      this.setState({ success: ["Fill in all fields", false] });
      console.error("Form submission unsuccessful");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = { ...this.state.errors };
    console.log(errors);

    switch (name) {
      case "name":
        errors.name = value.length < 2 ? "Name is too short" : "";
        break;
      case "email":
        errors.email = emailRegex.test(value) ? "" : "Invalid email";
        break;
      case "message":
        errors.message = value.length < 6 ? "Message must be longer" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value, success: [null, null] });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="form-container">
        <Header
          heading="Contact Me"
          subheading="You can email me directly or connect with me via social media"
        />

        <div className="social-icons">
         <a href="https://github.com/Stephen8898" target="_blank"> {<GitHubIcon id="github-icon"/>} </a>
        <a href="https://www.linkedin.com/in/stephen-sarfo98/" target="_blank"> <LinkedInIcon id="linkedin-icon"/> </a>
        </div>

        <div className="email-submission">{this.state.success[0]}</div>

        <form onSubmit={this.handleSubmit} className="mail-form" noValidate>
          <div id="item1">
            <label>Name</label>
            <input
              className={errors.name.length > 0 ? "error" : null}
              type="text"
              name="name"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <div id="item2">
            <label>Email</label>
            <input
              className={errors.email.length > 0 ? "error" : null}
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
            />
          </div>

          <div id="item3">
            <label>Message</label>
            <textarea
              className={errors.message.length > 0 ? "error" : null}
              type="textarea"
              name="message"
              noValidate
              onChange={this.handleChange}
            ></textarea>
          </div>

          <input type="hidden" name="_gotcha"></input>
          <button type="submit" className="form-btn">
            Send Message
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
