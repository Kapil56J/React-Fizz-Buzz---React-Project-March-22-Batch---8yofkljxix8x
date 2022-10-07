import React from 'react'
import '../styles/App.css';
const App = () => {
const[count,setCount]=useState(1)

    const IncrementHandler=()=>{
          setCount(count+1)
    }

    const DecrementHandler=()=>{
        if(count != 1){
            setCount(count-1)
        }

    }
  
  return (
    <div id="main">
     <div id='count'>
        <h2 className= {count % 5 == 0 && count % 3 == 0 ? 'fizzbuzz' : (count % 3 == 0) ? 'fizz' : (count % 5 == 0 ) ? 'buzz' : 'normal'}>{count}</h2>
        <button id='increment' onClick={IncrementHandler}>Increment</button>
        <button id='decrement' onClick={DecrementHandler}>Decrement</button>
    </div>

    </div>
  )
}


export default App;
