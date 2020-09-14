import React, { Component } from 'react'

import PropTypes from 'prop-types'

//needs a key value paor
//key = id
export default class Item extends Component {

    getStatus = () => {
        if(this.props.todoitem.completed === false) {
            return {
                backgroundColor : "red" 
            }
        }
        else{
            return {
                backgroundColor : "green"
            }
        }
    }

   

     

    render() {
        //destructuring
        //getting data members from climbing above the tree
        const { id, title, completed } = this.props.todoitem 
        return (
            <div style = {this.getStatus()}>
            <p> Hello from Item component.<br></br>
            <input type = "checkbox" onClick = {this.props.markasComplete.bind(this, id)} />
             {title}


            
            </p>
            </div>
        )
    }
}

const colorStyle = {
    backgroundColor : "red"
}
  
Item.propTypes = {
    todoitem : PropTypes.object.isRequired
}