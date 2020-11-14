import React, { Component } from 'react'
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

class CreateTodo extends Component {
  state = {
    text: ""
  }
  
  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.todo} />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

    export default connect(null, mapDispatchToProps)(CreateTodo);
