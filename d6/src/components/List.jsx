import React, { Component } from "react";
import { toggleCompleted, reset } from "../store/actions";
import { Button } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";

// const mapDispatchToProps = (dispatch) => ({
//   toggleCompleted: (id) => dispatch(toggleCompleted(id)),
//   reset: () => dispatch(reset()),
// });

const List = (props) => {
  const list = useSelector((state) => state.list)
  const dispatch = useDispatch()
  return (
    <>
      <ul>
        {list.map((todo) => (
          <li key={todo.id} 
          onClick={() => dispatch(toggleCompleted(todo))}
          className={todo.completed ? "strikethrough" : ""}>
            {todo.description}
          </li>
        ))}
      </ul>
      <Button onClick={() => dispatch(reset())}>reset</Button>
    </>
  );
};

export default List
//  connect((s) => s, mapDispatchToProps)(List);
