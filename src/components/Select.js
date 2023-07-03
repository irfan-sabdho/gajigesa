import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { connect } from "react-redux";

class Select extends Component {
  render() {
    return (
      <Row className="py-3">
        <Col>
          <p className="mt-1">Withdrawl Amount</p>
        </Col>
        <Col md="auto">
          <Form.Select
            className="select-account"
            defaultValue={this.props.value}
            onChange={this.props.handleChange}
          >
            <option value="5000000">Akun Gaji</option>
            <option value="2085500">Employee 1</option>
            <option value="9875000">Employee 2</option>
            <option value="18000000">Employee 3</option>
          </Form.Select>
        </Col>
      </Row>
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
      dispatch({
        type: "SELECTED_ACC",
        newSalary: e.target.value,
        newValue: e.target.value * 0.5,
        newColor: "#" + Math.random().toString(16).slice(2, 8),
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
