import { useState } from 'react';
import {Route , BrowserRouter} from 'react-router-dom'
import './App.css'
import './index.css';


function App() {
  // ================  RANDOM QUOTE GENERATOR

  let i = 0
  const quotes = ["hiii", "hello" , "there" , "new" , "quote" , "is" , "here"]
  const [quote , newquote] = useState(quotes[0])
  const [first , next] = useState(0)
  var nextquote = quotes[i]

  function nextQuote(){
    var random = Math.floor(Math.random() * quotes.length)
    newquote(quotes[random])

  // }

  return (
    <div className="App">
      <div>
      <h3 className='displayQuote'>{quote}</h3>
      <button onClick={nextQuote}>Change</button>
    </div>
    </div>
  );


  // ==================  TODO APP

  // const [task, newTask] = useState("")
  // const [todos, newtodo] = useState([])


  // function addtask(event) {
  //   event.preventDefault()
  //   newtodo(oldtodos => {
  //     newTask('')
  //     return [...oldtodos, task]
  //   })
  // }
  // function delete_todo() {
    
  // }

  // return (
  //   <div>
  //     <div>
  //       <form onSubmit={addtask}>
  //         <input type="text" value={task} onChange={e =>
  //           newTask(e.target.value)} />
  //         <button type='submit'>Add todo</button>
  //       </form>
  //     </div>
  //     <ul>
  //       {todos.map(todo =>
  //         <div>
  //           <li>{todo}</li>
  //           <button onClick={delete_todo}>Delete</button>
  //         </div>
  //       )}
  //     </ul>
  //   </div>
  // )




  // ========================================> ROUTING
  
  // <BrowserRouter>
  //   <link to='/hello-world' exact>go to hello world</link>
  //   <Route path="/hello-world">
  //     <h1>Hello world</h1>
  //   </Route>
  // </BrowserRouter> 



  // ==========================================> PROPS


// function Person (props) {
//   return(
//     <>
//       <p>fname: {props.fname}</p>
//       <p>lname: {props.lname}</p>
//       <p>age: {props.age}</p>

//     </>
//   )
// }


//   return (
//     <div className='App'>
//       <Person fname={'Adarsh'} lname='More' age='19'/>
//       <Person fname={'Adarsh'}/>
//       <Person/>
//     </div>
//   );


// =============================================>  USESTATE

// MAKING A COUNTING APP

  // const [old , next] = useState(0)

  // function add(){
  //   next(old+1)
  // }
  // function sub(){
  //   next(old-1)
  // }

  // return(
  //   <>
  //     <button onClick={sub}>-</button>
  //     <h1>{old}</h1>
  //     <button onClick={add}>+</button>
  //   </>
  // ) 

}
}
export default App
