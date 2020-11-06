import React, { useState } from "react";
import { Card, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggle } from "../JS/actions/actionTasks";

const AddNewTask = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const filtred = useSelector((state) => state.filtred);

  const add = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask({ text: text, id: Date.now() , isDone: false}));
      setText("");
    }
    else {alert ("a task can't be empty")}
    
  };

  return (
    <>
      <Card bg="secondary">
      <Card.Body>
        <h1 className={"text-white"}>To Do List !</h1>

        <Form onSubmit={add}>
          <Form.Group>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <InputGroup.Append>
                <Button variant="warning" onClick={add}>
                  ADD a Task
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Form>
        <Button
          variant="success"
          className="mr-3"
          onClick={() => dispatch(toggle())}
        >
          {filtred ? "ALL" : "onlyFinished"}
        </Button>
      </Card.Body>
    </Card>
    </>
  );
};
    
 
export default AddNewTask
