import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";

import ModifyTask from "./ModifyTask";

import { checkTask, deleteTask } from "../JS/actions/actionTasks";

const ListToDo = () => {
  const list = useSelector((state) => state.listItems);
  const filtred = useSelector((state) => state.filtred);

  const dispatch = useDispatch();

  return (
    <ListGroup>
      {(filtred ? list.filter((el) => el.isDone === true) : list).map(
        (task, key) => (
          <ListGroup.Item
            key={key}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <section
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                width: "25%",
              }}
            >
              <Button
                variant="outline-primary"
                onClick={() => dispatch(checkTask(task))}
              >
                {task.isDone ? "isDone" : "notDone"}
              </Button>
              <ModifyTask Item={task} /> 
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Remove
              </Button>
            </section>
            <div style={{ margin: "0px" , lineHeight:"38px", backgroundColor:"pink" , color: "blue" }} className={task.isDone ? "check" : ""}>
              {task.text}
            </div>
          </ListGroup.Item>
        )
      )}
    </ListGroup>
  );
};

export default ListToDo;