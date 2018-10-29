import React, { Component } from 'react';

class AddItem extends Component {
  constructor(){
    super();
    this.state = {
      added: {}
    }
  }
  static defaultProps = {
    categories: ['Asset', 'Liability', 'Monthly Expense', 'Monthly Income']
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.refs.category.value);
    this.setState({
      added:{category: this.refs.category.value}
    }, function(){
      console.log(this.state);
      //this.props.addItem(this.state.added);
    });
  }

  render() {
    let categories = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Item</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Category</label>
          <select ref="category">
            {categories}
          </select>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddItem;
