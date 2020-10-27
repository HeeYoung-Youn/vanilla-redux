import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const ToDo = ({ text, onButtonClick, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={onButtonClick}>DEL</button>
      </Link>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onButtonClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);