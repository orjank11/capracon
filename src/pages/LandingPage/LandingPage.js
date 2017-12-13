import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";

import "./LandingPage.scss";

import friday from "../../constants/friday";
import saturday from "../../constants/saturday";

import Icon from "../../components/Icon";

const getBackground = type =>
  type === "tech" ? "rgb(33, 150, 243)" : "rgb(243, 150, 33)";
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: "friday",
      fridaySpeakers: friday,
      saturdaySpeakers: saturday
    };
  }
  render() {
    const { selectedDay, fridaySpeakers, saturdaySpeakers } = this.state;
    const speakers =
      selectedDay === "friday" ? fridaySpeakers : saturdaySpeakers;
    return (
      <section className="LandingPage">
        <nav>
          <h1>Program</h1>
          <button
            className={(selectedDay === "friday" && "active") || ""}
            onClick={() => this.setState({ selectedDay: "friday" })}
          >
            Fredag
          </button>
          <button
            className={(selectedDay === "saturday" && "active") || ""}
            onClick={() => this.setState({ selectedDay: "saturday" })}
          >
            Lørdag
          </button>
        </nav>
        <VerticalTimeline>
          {speakers.map(({ type, speaker, time, header, article }) => {
            return (
              <VerticalTimelineElement
                key={time}
                className="vertical-timeline-element--work"
                date={time}
                iconStyle={{ background: getBackground(type), color: "#fff" }}
                icon={<Icon type={type} />}
              >
                <h3 className="vertical-timeline-element-title">{header}</h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {speaker}
                </h4>
                <p>{article}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </section>
    );
  }
}

export default LandingPage;
