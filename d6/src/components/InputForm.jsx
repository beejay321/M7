import React, { useState, useEffect  } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import uniqid from "uniqid";
import { connect, useDispatch } from "react-redux";
import {  addTodo } from "../store/actions";

// const mapDispatchToProps = (dispatch) => ({
//   addTodo: (todo) => dispatch(addTodo(todo)),
// });

const InputForm = (props) => {
  // state = {
  //   description: ""
  // };
  const dispatch = useDispatch()
  const [description, setDescription] = useState("");


  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todo = {
      description: description,
      id: uniqid(),
      completed: false,
    };
    console.log(todo);
   dispatch(addTodo(todo));
    setDescription("");
  };

  return (
   <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="New task..."
          value={description}
          onChange={handleChange}        
        />
        <Form.Control type="submit" />
      </Form>
   </Container>
  );
};

export default InputForm
// connect((s) => s, mapDispatchToProps)(InputForm);
