import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ListItem(props) {
  return (
    <li onClick={props.onClick}>
      {props.item}
    </li>
  );
}

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: ['unicycle', 'juggling clubs', 'stilts']
    };
  }

  addItem() {
    var item = document.getElementById("listItem").value;
    document.getElementById("listItem").value = "";
    var newList = this.state.list.slice();
    newList.push(item);
    this.setState({list: newList});
  }

  changeName() {
    let name = document.getElementById("newName").value;
    document.getElementById("newName").value = "";
    this.state.name = name;
    // let nextName = this.state.list.slice();
    // newList.push(item);
    this.setState({name: name});
  }

  onClick(index) {
    var newList = this.state.list.slice();
    newList.splice(index, 1);
    this.setState({list: newList});
  }

  render() {
    var listItems = [];
    this.state.list.forEach((item, i) => {
      listItems.push(<ListItem item={item} onClick={() => this.onClick(i)} />)
    });
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <input type="text" id="newName" placeholder="Change List Name Here"/>
        <button type="button" onClick={() => this.changeName()}>Change</button>
        <input type="text" id="listItem" placeholder="Add item"/>
        <button type="button" onClick={() => this.addItem()}>Add</button>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}


export default ShoppingList;
