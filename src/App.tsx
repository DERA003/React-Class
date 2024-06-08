// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
// import Check from './Check'
// import Message from "./components/message"
// import Profile from "./components/profile"
// import Employee from "./components/employee"
// import Button from './components/buttonProps';
// import Testimonial from './components/testimonial';
// import Counter from './components/counter'
// import Register from './components/register'
// import TodoList from './components//todo/todoList'
import EmployeeTask from './components//employeeTask/employeeTask'

// function App() {
//   return(
//   <>
//   <Check/>
//   </>
//   )

// }

// export default App

function App() {
//   const employees = [
//     {
//       id: 1,
//       name: "John",
//       email: "john@gmail.com",
//       age: 25,
//     },
//     {
//       id: 2,
//       name: "Jane",
//       email: "jane@gmail.com",
//       age: 30,
//     },
//     {
//       id: 3,
//       name: "Bob",
//       email: "bob@gmail.com",
//       age: 35,
  //   },
  //   {
  //     id: 4,
  //     name: "Alice",
  //     email: "alice@gmail.com",
  //     age: 40,
  //   },
  // ];
  return(
    <>
    {/* /* <Check/> */ }
    {/* /* <Message name="Lordwill"/>
    <Message name="Chidera"/> */ }

    {/* <Profile firstname="Chidera" lastname="Umejuru"  isDuePayment={true}/> */}
    {/* <Profile firstname="Chidera" lastname="Ikechukwu" age={41} isDuePayment={true}/> */}
    {/* <Profile firstname="lordwill" lastname="Ozokechi" age={31} isDuePayment={false}/> */}
    
    {/* <Employee employees={employees} />
    <Button label='Login' onClick={()=>{alert("you just logged in")}}/>
    <Button label='Register' onClick={()=>{alert("Proceed to Registration?")}} color='grey'/>
    <Button label='Delete' onClick={()=>{alert("User response deleted")}} color='red'/>
    </> */}
{/* 
     <Testimonial name='Chidera' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, architecto. Dolorem recusandae inventore doloremque fugiat.
        'image='https://i.ytimg.com/vi/RdK_CneND2Q/maxresdefault.jpg'/>
  
    <Testimonial name='Chidera' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, architecto. Dolorem recusandae inventore doloremque fugiat.
        'image='https://i.ytimg.com/vi/RdK_CneND2Q/maxresdefault.jpg'/>
  
    <Testimonial name='Chidera' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, architecto. Dolorem recusandae inventore doloremque fugiat.
        'image='https://i.ytimg.com/vi/RdK_CneND2Q/maxresdefault.jpg'/>  */}

        {/* <Counter/>
        <Register/> */}
        {/* <TodoList/> */}
        <EmployeeTask/>
    </>
    
    
    
    
  )
}

export default App
