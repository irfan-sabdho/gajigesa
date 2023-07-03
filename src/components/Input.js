import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import Slider from "./Slider";

function Input(props) {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  return (
    <Container>
      <Row className="amount mt-3">
        <Col>
          <p className="px-2">{props.value}</p>
        </Col>
        <Col md="auto">
          <FontAwesomeIcon icon={faPencil} onClick={handleClick} />
        </Col>
      </Row>
      {isShown ? <Slider /> : null}
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    min: state.min,
    salary: state.salary,
    step: state.step,
    value: state.value,
  };
};

export default connect(mapStateToProps)(Input);
