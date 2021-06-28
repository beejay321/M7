import React, { Component } from "react";
import { toggleCompleted, reset } from "../store/actions";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  toggleCompleted: (id) => dispatch(toggleCompleted(id)),
  reset: () => dispatch(reset())
});

class List extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.list.map((todo) => (
            <li
              key={todo.id}
              onClick={() => this.props.toggleCompleted(todo)}
              className={todo.completed ? "strikethrough" : ""}
            >
              {todo.description}
            </li>
          ))}
        </ul>
        <Button onClick={this.props.reset}>reset</Button>
      </>
    );
  }
}

export default connect((s) => s, mapDispatchToProps)(List);
