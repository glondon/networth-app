import React, { Component } from 'react';

class AddItem extends Component {
  constructor(){
    super();
    this.state = {
      added: {}
    }
  }
  static defaultProps = {
    categories: ['Asset', 'Liability', 'Credit Cards', 'Credit Lines', 'Monthly Income', 'Monthly Expense']
  }

  handleSubmit(e){
    e.preventDefault();
    //console.log(this.refs.category.value);
    console.log(this.refs);
    var errors = [];
    document.getElementById('errors').innerHTML = '';
    if(this.refs.category.value === '')
      errors.push('Category cannot be empty');
    if(this.refs.name.value === '')
      errors.push('Name cannot be empty');
    if(this.refs.type.value === '')
      errors.push('Type cannot be empty');
    if(this.refs.val.value === '')
      errors.push('Value cannot be empty');
    if(this.refs.name.value.length > 50)
      errors.push('Name too long');
    if(this.refs.type.value.length > 30)
      errors.push('Type too long');
    if(this.refs.val.value !== '' && isNaN(this.refs.val.value))
      errors.push('Value must be a number');
    if(!isNaN(this.refs.val.value) && this.refs.val.value.length > 11)
      errors.push('Value too long');

    if(errors.length > 0){
      var ul = document.getElementById('errors');
      for(let i = 0; i < errors.length; i++){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(errors[i]));
        ul.appendChild(li);
      }
    }
    else{
      this.setState({
        added:{
          category: this.refs.category.value,
          name: this.refs.name.value,
          type: this.refs.type.value,
          value: this.refs.val.value
        }
      }, function(){
        console.log(this.state);
        //this.props.addItem(this.state.added);
      });
    }
  }

  render() {
    let categories = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Item</h3>
        <ul id="errors"></ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <table cellSpacing="5">
          <tbody>
            <tr>
              <td><label>Category: </label></td>
              <td>
                <select ref="category">
                  {categories}
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Name: </label></td>
              <td><input type="text" ref="name" /></td>
            </tr>
            <tr>
              <td><label>Type: </label></td>
              <td><input type="text" ref="type" /></td>
            </tr>
            <tr>
              <td><label>Value: </label></td>
              <td><input type="text" ref="val" /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Submit" /></td>
            </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default AddItem;
