import React, { Component } from 'react';
import './ToDoForm.css';

class ToDoForm extends Component {
  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit}>
          <div className="input-icon">
              
         <i class="fas fa-list-ol icon" aria-hidden="true"></i>
        
            <input 
              type="text"
              placeholder="Add a Taskss..."
              autoComplete="off"
              value={this.props.newTodo}
              onChange={this.props.handleChange}
            />
          </div>
        </form> 
    
      </div>
    )
  }
}

export default ToDoForm;