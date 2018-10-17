import React, {Component} from "react";
import "./Spinner.scss";

class Spinner extends Component {
  render() {
    return (
      <div className="loader">
        <div className="face face1">
          <div className="circle" />
        </div>
        <div className="face face2">
          <div className="circle" />
        </div>
      </div>
    );
  }
}

export default Spinner;
