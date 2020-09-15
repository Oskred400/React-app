 
 

import React, { Component } from 'react';
import Header from './components/layouts/Header';
import Todos from './components/Todos';

//function import 
//always impirt within braces

import About from './components/pages/About';

import InsertTodo from './components/InsertTodo';


import { BrowserRouter as Router, Route} from 'react-router-dom'; 


//for random generated Ids

//import uuid from 'uuid' does not work

import { v4 as uuidv4 }  from 'uuid' ;
//import { About } from './components/pages/About';

export default class App extends Component {


  state = {

    todos: [
      {

        id: uuidv4(),
        title: "Order Take out",
        completed: false


      },
      
      
      {

        
        id: uuidv4(),
        title: "Eat Lunch",
        completed: false



      },
      
      
      {

        
        id: uuidv4(),
        title: "Study React",
        completed: false



      },

      {

        
        id: uuidv4(),
        title: "Study Spring Boot",
        completed: false



      }


    ]

  }

  //get from destructuring 

  //as setState not available from third class

  markasComplete = (id) => {

    console.log("hello world");
    console.log(id);

    this.setState({ todos: this.state.todos.map(todoid => {
      if(todoid.id === id){
        todoid.completed = !todoid.completed;

      }
      return todoid;
    })  })


}


deleteTodos = (id) => {
  console.log(id);
  //get all the other todos printed out 
  ///using filter
 this.setState( {todos: [ ...this.state.todos.filter(todo => todo.id !== id) ] } );
}
 


insertTodo = ( title ) => {

  console.log(title);
  //add a descriptor for a new todo 

  const insertedTodo = {
    id: uuidv4(),
    title: title,
    completed: false
  }
  //insert 

  this.setState( { todos: [...this.state.todos, insertedTodo] } );
}




  render() {

    //log the todos
    console.log(this.state.todos);

    return (
      <Router>
      <div>
        <Header/>

        <Route exact path = "/" render = {props => (
          <React.Fragment>

        <Todos todos = { this.state.todos } markasComplete = {this.markasComplete} deleteTodos = {this.deleteTodos} />
        <InsertTodo insertTodo = {this.insertTodo} />

          </React.Fragment>)
        } 
        />

        <Route exact path = "/about" component = { About } />
        
      </div>
      </Router>
    )
  }
}

 


 