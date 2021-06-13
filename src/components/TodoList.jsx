import React from 'react'

const TodoList = (props) =>{

    

   
    return(
        <ol>
          {props.text.map( (itemVal, index) => {
            return  (
            <>
            <div className="todo_style">
            
            <li> {itemVal} </li>
            &nbsp;
            <i className="fa fa-times" aria-hidden="true"
                onClick= {() => {
                   props.fn(index) 
                }}
            
            />
            </div>
            </>
            )
          })}
        </ol>
    )
}

export default TodoList;