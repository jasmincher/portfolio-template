import React from 'react';
import '../css/Blurb.css';

class Blurb extends React.Component {
  render() {
    
    if (this.props.textPosition == "left") {
      return (
        <div className="blurb-container">
          <div className="blurb-text">{this.props.text}</div>
          <img src={this.props.image} className="blurb-img" />
        </div>
      );
    } else {
      return (
        <div className="blurb-container">
          <img src={this.props.image} className="blurb-img" />
          <div className="blurb-text">{this.props.text}</div>
        </div>
      );
    }
  }
}

export default Blurb;
