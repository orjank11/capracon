import React, { Component } from "react";
import { connect } from "react-redux";

import { Footer, Header } from "../../components/Defaults";

import "./Wrapper.scss";

class Wrapper extends Component {
  constructor(props) {
    super(props);
    // props.dispatch(getUserData());
  }

  render() {
    return (
      <div className="Wrapper">
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
export default Wrapper;
