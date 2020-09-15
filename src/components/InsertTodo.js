import React, { Component } from 'react'

export class InsertTodo extends Component {
    //state level component change
    //initial title: empty
    stateComp = {
        title: ''
    }

    //changes on event e being triggered
    //event e is updation of title
    //title = e.target.name
    getChange = (e) => this.setState( {title: e.target.value} ); 


//Action for submit button 

    getSubmitAction = (e) => {
        //always include this
        e.preventDefault();
        //go higher up the tree

        this.props.insertTodo(this.state.title);
        //clear the inout field without refresh 
        //back to initial state

        this.setState( { title : '' } )

    }
    render() {
        return ( 

            <form onSubmit = {this.getSubmitAction} style = {{display: 'flex' }}>

                <input type = "text" name = "title" placeholder = "Enter title here" style = {{ flex : '5' }} onChange = {this.getChange} /> 
                <input type = "submit" value = "Add Todo"
                className = "addbtn"
                style = {{flex: '1' }}
                />



            </form>
        )
    }
}

export default InsertTodo
