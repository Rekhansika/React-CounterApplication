import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue,setInputValue] = useState(0);
  const [inputVisbility,setInputVisibility] = useState(true);


  return (
    <>
      <div>
        <button
        onClick={()=>{
          /*setInputVisibility(!inputVisbility);*/
          if(inputVisbility){
            setInputVisibility(false);
          }else{
            setInputVisibility(true);
          }
        }}
        >Toggle Visibility input tag</button>


       {
        inputVisbility && (
          <input type="number" 
        value={inputValue}
        onChange={(event)=>{
          console.log(event.target.value);
          setInputValue(event.target.value);
        }}/>

        )
       }

        
        <button 
        onClick={()=>{
          setCount(parseInt(inputValue));
          setInputValue(0);
        }}
        >set counter value</button>
        <button 
        style={{backgroundColor:'lightslategray'}}
        onClick={()=>{
          setCount(count+1);
        }}
        >count:{count}</button>
      </div>
    </>
  )
}

export default App
