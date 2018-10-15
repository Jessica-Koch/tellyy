import React, {PureComponent} from "react";
import styles from "./Content.module.scss";
import Home from "../Home";
class Content extends PureComponent {
  render() {
    return (
      <div className={styles.content}>
        <Home />
      </div>
    );
  }
}

export default Content;
