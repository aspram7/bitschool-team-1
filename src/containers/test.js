import React from "react";

import "./test.scss";

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      isSticky: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    if (window.scrollY > 100) {
      this.setState({ isSticky: true });
    } else if (window.scrollY < 100) {
      this.setState({ isSticky: false });
    }
    console.log(this.state.isSticky);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return <div className="test">Hello</div>;
  }
}

export default Test;
