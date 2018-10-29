import React, { Component } from 'react';
import Options from './Options';

class Assets extends Component {
  render() {
    let optionItems = null;
    if(this.props.options)
      optionItems = this.props.options.map(options => {
        //console.log(option); //works
        return(
          <Options key={options.title} option={options} />
        );
      });
    return (
      <div className="Assets">
        <h2>Assets</h2>
        {optionItems}
      </div>
    );
  }
}

export default Assets;
