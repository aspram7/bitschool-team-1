import React, { Component } from "react";

import "./GoToTop.scss";

class GoToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      is_visible: window.pageYOffset > 300 ? true : false,
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleVisibility);
  }

  render() {
    return (
      <>
        {this.state.is_visible && (
          <div
            id="goToTop"
            className="go-to-top"
            onClick={() => this.scrollToTop()}
          >
            <i className="icon-angle-up"></i>
          </div>
        )}
      </>
    );
  }
}

export default GoToTop;
