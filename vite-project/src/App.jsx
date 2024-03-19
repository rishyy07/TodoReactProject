// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [todo, setTodo] = useState([{ "title": "cricket", "desc": "playcricket" }, { "title": "football", "desc": "play football" }])
//   // function clickhandler() {
//   //   setCount(count + 1);
//   // }

//   let [title, setTitle] = useState("");
//   let [desc, setDesc] = useState("");


//   function todoChangeHandler() {
//     console.log("hi")
//     // todo=todo.push({title:"football", desc:"play football"}); //ye nahi karna(pichhle array mei chnge nhi krna kyuki isse pichhhle ki state change ho jaaegi) kyuki isme prev state change ho rha hai, and we do not have to chnage the prev state
//     let id = todo.length;
//     let todoobj = { title: title, desc: desc };
//     let newtodo = [...todo, todoobj]
//     //spread operator to copy array
//     console.log(newtodo)
//     setTodo(newtodo);
//     setTitle("");
//     setDesc("");

//   }

//   function titleChangeHandler(e) {
//     setTitle(e.target.value);
//     console.log(title);
//   }

//   function descChangeHandler(e) {
//     setDesc(e.target.value);
//     console.log(desc);

//   }

//   function formSubmitHandler(e) {
//     e.preventDefault();

//   }

//   function todoDeleteHandler(id) {
//     let newTodo = todo.filter((t) => t.id != id)
//     setTodo(newTodo);

//   }

//   return (
//     <>

//       <form action="" onSubmit={formSubmitHandler}>
//         <input type="text" value={title} name="" id="" onChange={titleChangeHandler} />
//         <input type="text" value={desc} name="" id="" onChange={descChangeHandler} />
//         <button onClick={todoChangeHandler}>Add</button>
//       </form>
//       <div className='todolist'>
//         {/* {todo.toLocalString()} */}

//         {todo.map((t) => {
//           return <Todo title={t.title} desc={t.desc} />
//         })}



//       </div>


//     </>
//   )
// }
// function Todo(props) {
//   //props is an object that contains all the input value
//   //props.title  props.desc
//   return (<div className='container'>
//     <div className='title'>{props.title}</div>
//     <div className='desc'>{props.desc}</div>
//   </div>)

// }




// export default App




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import TodoButton from './components/TodoButton'

function App() {
  const [todo, setTodo] = useState([])

  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");

  function todoChangeHandler() {
    let id = todo.length;
    let obj = { id: id, title: title, desc: desc };
    //peechle state ke sath ched chad not allowed so make new array

    //to copy objects from purana array elements we will use spreaad operator 
    //spreadoperator array se elements nikalta hai 

    let newTodo = [...todo, obj];
    setTodo(newTodo);
    setTitle("");
    setDesc("");

  }

  function titleChangeHandler(e) {//e is event => javascript concept

    setTitle(e.target.value);
    console.log(title);
  }
  function descChangeHandler(e) {

    setDesc(e.target.value);
    console.log(desc);
  }
  function formSubmitHandler(e) {
    e.preventDefault();
  }
  function todoDeleteHandler(id) {
    let newTodo = todo.filter((t) => t.id != id)
    setTodo(newTodo)
  }

  return (
    <>
      <form action="" onSubmit={formSubmitHandler}>
        <input type="text" value={title} name="" id="" onChange={titleChangeHandler} />
        <input type="text" value={desc} name="" id="" onChange={descChangeHandler} />
        <button onClick={todoChangeHandler}>Addition</button>
      </form>



      <div className="todolist">
        {todo.map((t) => {
          return (
            <>
              <Todo id={t.id} key={t.id} title={t.title} desc={t.desc} />
              <TodoButton todoDeleteHandler={todoDeleteHandler} id={t.id}></TodoButton>
            </>


          )
          // <TodoButton></TodoButton>
        })}


      </div>
    </>
  )
}


// input jo aata hai component mein woh hota hai props

//app component mein likhi cheez hi show hoti hai
export default App