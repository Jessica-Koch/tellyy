import React, {PureComponent} from "react";
import "./Spinner.scss";

class Spinner extends PureComponent {
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
