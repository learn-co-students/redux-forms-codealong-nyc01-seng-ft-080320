import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux'
 
class CreateTodo extends Component {
 
  state = {
    text: ''
  };
=======
 
class CreateTodo extends Component {
 
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
>>>>>>> c5d5fff0547a4f2d24f384b7cfe432d88bfc3274
 
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }
<<<<<<< HEAD

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
=======
>>>>>>> c5d5fff0547a4f2d24f384b7cfe432d88bfc3274
 
  render() {
    return(
      <div>
<<<<<<< HEAD
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={ event => this.handleChange(event)} value={this.state.text}/>
=======
        <form>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.text}/>
>>>>>>> c5d5fff0547a4f2d24f384b7cfe432d88bfc3274
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   );
  }
};
<<<<<<< HEAD

const mapDispatchToProps = dispatch => {
  return { addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData }) };
}
=======
>>>>>>> c5d5fff0547a4f2d24f384b7cfe432d88bfc3274

export default connect(null, mapDispatchToProps)(CreateTodo);