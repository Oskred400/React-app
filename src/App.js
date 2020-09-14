 
 
 

import React, { Component } from 'react'
import Todos from './components/Todos';

export default class App extends Component {


  state = {

    todos: [
      {

        id: 1,
        title: "Order Take out",
        completed: false


      },
      
      
      {

        
        id: 2,
        title: "Eat Lunch",
        completed: false



      },
      
      
      {

        
        id: 3,
        title: "Study React",
        completed: false



      },

      {

        
        id: 4,
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




  render() {

    //log the todos
    console.log(this.state.todos);

    return (
      <div>
        hello world
        <Todos todos = { this.state.todos } markasComplete = {this.markasComplete} />
      </div>
    )
  }
}

 


 