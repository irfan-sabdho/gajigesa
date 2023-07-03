import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";

class Slider extends Component {
  render() {
    return (
      <div>
        <input
          type="range"
          value={this.props.value}
          min={this.props.min}
          max={this.props.salary}
          step={this.props.step}
          onChange={this.props.handleChange}
          style={{ accentColor: this.props.color }}
        />

        <Row className="pt-3">
          <Col>
            <p>Rp {this.props.min}</p>
          </Col>
          <Col md="auto">
            <p>Rp {this.props.salary}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    min: state.min,
    salary: state.salary,
    step: state.step,
    value: state.value,
    color: state.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) =>
      dispatch({ type: "SET_VALUE", newValue: e.target.value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
