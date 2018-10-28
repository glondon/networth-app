import React, { Component } from 'react';
import Assets from './Components/Assets';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      options: [
        {title: 'Assets'},
        {title: 'Liabilities'},
        {title: 'Credit Cards'},
        {title: 'Credit Lines'},
        {title: 'Income'},
        {title: 'Expenses'}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        NetWorth App
        <Assets options={this.state.options} />
      </div>
    );
  }
}

export default App;
