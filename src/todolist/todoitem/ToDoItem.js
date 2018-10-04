import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
  }

  handleChange(e) {
    this.setState({
      checked: e.target.checked
    });
  }

  toggleCheckBox() {
    this.setState((state) => {
      return { checked: !state.checked }
    });
  }

  render() {
    return (
      <li key={this.key}>
        <input type="checkbox" onChange={this.handleChange} checked={this.state.checked}/>
        <span onClick={this.toggleCheckBox}>{this.props.text}</span>
        <button onClick={this.props.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default ToDoItem;
