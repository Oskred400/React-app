import React, { Component } from 'react'

import PropTypes from 'prop-types';
import Item from './Item';

//let newstate = <h1> Hello</h1>;

/**
 * this.props.tolist.map((todoitem) => (<Item/>)) --- wrong syntax 
 * 
 * this.props.tolist.map(todoitem => (<Item/>)) ----  correct syntax
 * key value pair 
 */
export default class Todos extends Component {

 

    
    render() {
        console.log(this.props.todos);
        console.log("hello from props");
        return this.props.todos && this.props.todos.map( todoitem => (
                   <div>
                   <Item key = {todoitem.id} todoitem = {todoitem} markasComplete = {this.props.markasComplete} deleteTodos = {this.props.deleteTodos}/> 
         
         </div>
         ));
                  
         
    }
}
//inherit proptypes from class itself
 
Todos.propTypes = {
    todos:PropTypes.array.isRequired
}