import React, { Component } from "react";

import Button from "../../../components/Button/Button";
import SliderBox from "../../../components/Box/SliderBox/SliderBox";
import { sliderData } from "../../../data-mockup/slider-mockup";
import { Carousel } from "react-responsive-carousel";

import "./JoinUs.scss";

class JoinUs extends Component {
  constructor() {
    super();
    this.state = {
      sliderGrup: [],
    };
    this.carateNewArray = this.carateNewArray.bind(this);
  }

  carateNewArray() {
    let sliderItem = [],
        sliderGrup = [];

    sliderData.forEach((el, index) => {
      sliderItem.push(el);

      if (index % 2 === 1) {
        sliderGrup.push(sliderItem);
        sliderItem = [];
      }
    });

    this.setState({
      sliderGrup: sliderGrup,
    });
  }

  componentDidMount() {
    this.carateNewArray();
  }

  componentWillUnmount() {
    this.carateNewArray();
  }

  render() {
    return (
      <section className="section-joinus">
        <div className="container">
          <div className="joinus-content-items">
            <div className="joinus-content-item">
              <div className="joinus-info">
                <h2 className="joinus-info-title">Join to Happy Customers</h2>
                <p className="joinus-info-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates deserunt facere placeat est animi, sunt?
                </p>
                <Button className={"btn-joinus-custmer"}>Join Us Now</Button>
              </div>
              <div className="jounus-custmer-conter-items">
                <div className="jounus-custmer-conter-item is-yellow">
                  <h3>1136+</h3>
                  <h5>Happy Customers</h5>
                </div>
                <div className="jounus-custmer-conter-item is-blue">
                  <h3>145+</h3>
                  <h5>Pets Hosted</h5>
                </div>
                <div className="jounus-custmer-conter-item is-red">
                  <h3>50+</h3>
                  <h5>Professionals</h5>
                </div>
              </div>
            </div>
            <div className="joinus-content-item">
              <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                swipeable={true}
                infiniteLoop={true}
              >
                {this.state.sliderGrup.map((elemet, index) => {
                  return (
                    <div className="joinus-slider-item" key={index}>
                      {elemet.map((el) => {
                        return (
                          <SliderBox
                            key={el.id}
                            img={el.img}
                            title={el.title}
                            description={el.description}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default JoinUs;
