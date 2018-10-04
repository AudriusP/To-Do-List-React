import React, {Component} from 'react';
import './ToDoList.css';
import ToDoItem from "./todoitem/ToDoItem";
import ToDoAdd from "./todoadd/ToDoAdd";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checklist: ['First', 'Second'],
      inputValue: '',
      error: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd() {
    if (!this.state.inputValue || this.state.error) {
      this.setState({
        error: true
      });
      return;
    }

    const newCheckList = this.state.checklist;
    newCheckList.push(this.state.inputValue);

    this.setState((state) => {
      return {checklist: newCheckList}
    });
  }

  handleDelete(item) {
    const newCheckList = this.state.checklist;
    newCheckList.splice(this.state.checklist.indexOf(item), 1);

    this.setState((state) => {
      return {checklist: newCheckList}
    });
  }

  updateInput(event) {
    this.setState({inputValue: event.target.value},
      () => {
        if (!this.state.inputValue || this.state.checklist.includes(this.state.inputValue)) {
          this.setState({
            error: true
          });
        } else {
          this.setState({
            error: false
          });
        }
      });
  }

  render() {
    return (
      <div>
        <ToDoAdd updateInput={this.updateInput} handleAdd={this.handleAdd} error={this.state.error}/>
        {this.state.error &&
        <span className='error'>Input field is empty or this task already exists in the list...</span>}
        <ul>
          {this.state.checklist.map((item, index) =>
            <ToDoItem handleDelete={() => this.handleDelete(item)} text={item} key={index}/>
          )}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
