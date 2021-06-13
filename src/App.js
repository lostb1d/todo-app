import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css'
const App = () =>{
  
  const[inputList, setInputList] = useState("");
  const [items, setItems] = useState([])

  const itemEvent = (event) =>{
      setInputList(event.target.value)
  }


  const listOfItems = () =>{
      setItems((oldItems) =>{
        return [...oldItems, inputList];
      });
      setInputList("");
  }

  const deleteItems = (i) =>{
    setItems((oldItems) =>{
        return oldItems.filter((arrElem, index)=>{
                return index!== i;
        })
    })
}
return(
  

    <>
    <div className="main-div">

      <div className="center-div">
        <br/>
        <h1>Todo List </h1>
        <br/>
        <input 
          type="text"
          placeholder="Add an item"
          onChange={itemEvent}
          value={inputList}
        />
        <button onClick= {listOfItems}> + </button>

    <TodoList 
    
      text = {items}
      fn = {deleteItems}
    />

        
      </div>
    </div>
    </>

)

};



export default App;
