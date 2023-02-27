import React , {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/AddItems/AddItems';
import './App.css';

class App extends Component {

  state = {
    items: [
      {id:1, name:'Raheem', age:23},
      {id:2, name:'Samir', age:23},
      {id:3, name:'Lyas', age:22}
    ]
  }

  deleteItem = (id) => {
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // items.splice(i,1);
    // this.setState({items})

    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})

  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})


  }
  render(){
      return (
    <div className="App container">
      <div>
      <h1 className='text-center'>TodoList App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItems addItem = {this.addItem}/>
      </div>
      
    </div>
  );
  }

}

export default App;
