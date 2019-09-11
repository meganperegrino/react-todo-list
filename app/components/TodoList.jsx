import React, { Component } from "react";
import FlipMove from "react-flip-move";
import "../TodoList.css";
 
class TodoList extends Component {
  
  constructor(props) {
    super(props);
 
    this.state = {
      items: []
    };
    
    this.addItem = this.addItem.bind(this);
    this.createTasks = this.createTasks.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  addItem(event) {
    if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
    console.log(this.state.items);
     
    event.preventDefault();
  }
  
  createTasks(item) {
    return <li onClick={() => this.deleteItem(item.key)} 
              key={item.key}>{item.text}</li>
  }
  
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
 
    this.setState({
      items: filteredItems
    });
  }
  
  /*delete(key) {
    this.props.delete(key);
  }*/
  
  render() {
    
    {/*var todoEntries = this.props.entries;*/}
    var todoEntries = this.state.items;
    var listItems = todoEntries.map(this.createTasks);
    
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(el) => this._inputElement = el} placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        {/*<TodoItems entries={this.state.items}
          delete={this.deleteItem}/>*/}
        <ul className="theList">
          <FlipMove duration={100} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
}
 
export default TodoList;

// read more about binding
// add functionality to undo delete
// can you combine TodoItems and TodoList? -> YES!