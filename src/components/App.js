import React from 'react';
import Todo from './Todo';
import _ from 'lodash';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { todo : [], text : "" }
  }

  render(){
    return (
      <>
        <h1>This is the todo app</h1>
        <Todo items={this.state.todo} removeItem={this.removeItem} />
        <br/>
        <form>
          <label htmlFor="newTodo"> Enter new item </label>
          <br/>
          <input id="newTodo" type="text" value={this.state.text} onChange={this.handleTextChange}/>
          <br/>
          <button onClick={this.handleClick}>Add</button>
        </form>

      </>
    );
  }

  handleTextChange = (e) => {
    this.setState({ text : e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    
    this.setState(
      { 
        todo : this.state.todo.concat({ id: Date.now(), name: this.state.text }),
        text : ""
      }
    );
  }

  removeItem = (id, e) => {
    e.preventDefault();

    this.setState(
      { 
        todo : _.filter(this.state.todo, (item) => item.id !== id)
      }
    )
  }

}

export default App;
