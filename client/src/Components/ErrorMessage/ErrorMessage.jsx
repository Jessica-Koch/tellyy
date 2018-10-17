import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ErrorMessage extends Component {
  render() {
    return (
      <div className="weatherCardContainer">
        <div className="weatherCardError">
          <p> Whoa! Looks like there was an error with your request.</p>
          <Link to="/">
            <button>Try Again</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;
