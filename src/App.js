import React, { Component } from 'react';
import Categories from './Components/Categories';
import AddItem from './Components/AddItem';
//import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      options: [],
      todos: []
    }
  }

  componentWillMount(){
    this.setState({
      options: [
        {title: 'Assets'},
        {title: 'Liabilities'},
        {title: 'Credit Cards'},
        {title: 'Credit Lines'},
        {title: 'Income'},
        {title: 'Expenses'}
      ]
    });
    this.getData();
  }

  compenentWillMount(){
    this.getData();
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      cache: false,
      dataType: 'json',
      succes: function(data){
        console.log(data); //empty
        this.setState({todos: data});
        console.log(this.state); //empty
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

 /*
  handleAddItem(item){
    let all = this.state.added;
    all.push(item);
    this.setState({added:all});
  }
  */

  render() {
    return (
      <div className="App">
        <h1>NetWorth App</h1>
        <Categories options={this.state.options} />
        <br />
        <AddItem />
      </div>
    );
  }
}

export default App;
