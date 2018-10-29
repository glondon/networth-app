import React, { Component } from 'react';

class Options extends Component {
  render() {
    return (
      <li className="Options">
        <i>{this.props.option.title}</i>
      </li>
    );
  }
}

export default Options;
