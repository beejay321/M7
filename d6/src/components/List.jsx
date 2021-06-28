import React, { Component } from "react";
import { toggleCompleted, reset } from "../store/actions";
import { Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  toggleCompleted: (id) => dispatch(toggleCompleted(id)),
  reset: () => dispatch(reset()),
});

const List = (props) => {
  return (
    <>
      <ul>
        {props.list.map((todo) => (
          <li key={todo.id} onClick={() => props.toggleCompleted(todo)} className={todo.completed ? "strikethrough" : ""}>
            {todo.description}
          </li>
        ))}
      </ul>
      <Button onClick={props.reset}>reset</Button>
    </>
  );
};

export default connect((s) => s, mapDispatchToProps)(List);
