import React, { Component } from "react";

import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Button from "../../components/Button/Button";

import logoWithUrl from "../../assets/logo/logo-withe.png";
import logoDarkUrl from "../../assets/logo/logo-dark.png";

import "./Header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      logo: {
        mainUrl: "/",
        logoWith: {
          url: logoWithUrl,
          alt: "Withe Logo",
        },
        logoDark: {
          url: logoDarkUrl,
          alt: "Dark Logo",
        },
      },
      isSticky: false,
      isHeaderHeight: false,
      isOpenNavigation: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handeleOpenNavigation = this.handeleOpenNavigation.bind(this);
  }

  handleScroll() {
    this.setState({
      isSticky: window.scrollY > 0 ? true : false,
      isHeaderHeight: window.scrollY > 100 ? true : false
    })
  }

  handeleOpenNavigation(){
    this.setState({
      isOpenNavigation: !this.state.isOpenNavigation ? true : false
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }



  render() {
    console.log(this.state.isOpenNavigation)
    return (
      <header className={`header-main${this.state.isOpenNavigation ? " is-open-navigation" : ""}${this.state.isSticky ? " is-sticky" : ""}${ this.state.isHeaderHeight ? " is-min-height" : ""}`}>
        <div className="container">
          <div className="header-main-content">
            {!this.state.isSticky && (
              <Logo
                url={this.state.logo.mainUrl}
                imgLink={this.state.logo.logoWith.url}
                imgAlt={this.state.logo.logoWith.alt}
              />
            )}

            {this.state.isSticky && (
              <Logo
                url={this.state.mainUrl}
                imgLink={this.state.logo.logoDark.url}
                imgAlt={this.state.logo.logoDark.alt}
              />
            )}

            <Button className={"menu-trigger"} onClick={this.handeleOpenNavigation}>
              <svg className="svg-trigger" viewBox="0 0 100 100">
                <path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
                <path d="m 30,50 h 40"></path>
                <path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
              </svg>
            </Button>
            <Navigation className={this.state.isOpenNavigation ? "is-open" : ""} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
