import React from "react";
import Arrow from "../Svgs/Arrow.js";

class Button extends React.Component {
  render() {
    return (
      <button
        className="Button"
        btnstyle={`${this.props.btnstyle}`}
        theme={`${this.props.theme}`}
        href="https://www.google.com/"
      >
        Link Text
        {/* <Arrow /> */}
      </button>
    );
  }
}

export default Button;
