import React from "react";
import "./ToDoListItems.css";
import Checkbox from "../elements/CheckBox.js";

function ToDoListItems(props) {
  const { todos } = props;

  const todoItem = todos.map((todo, index) => {
    return (
      <div key={todo.id} className="todoComponent d-flex w-75 mx-auto">
        <div className="todoCompRight">
          <label>
            <Checkbox
              className="checkbox-element"
              checked={todo.isCompleted}
              size={20}
              checkedColor="#2e3238"
              uncheckedColor="#343a40"
              hoverColor="#343a40"
              onChange={(event) => props.handleOnChange(event, index)}
            />
          </label> <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span><br/>
            
        </div> 
     
        <div className=" d-flex justify-content-between flex-grow-1 px-3">
          <div className="todoTitle">
           <span>
            <i
              className="fa fa-pencil mr-3"
              aria-hidden="true"
              onClick={() => props.handleOnEdit(index)}
            ></i>
            <i
             
              className="fa fa-trash"
              aria-hidden="true"
              onClick={() => props.handleOnRemove(index)}
            ></i>
          </span>
          </div>
          
        </div>
      </div> 
   
    );
  
  });
 
  return (
    <div className="todoListItems w-full">
      <hr />
      {todos.length === 0 && (
        <h3 className="noTodos">Write Your Plan</h3>
      )}
      {todos.length > 0 && todoItem}
    </div>
  );
}

export default ToDoListItems;