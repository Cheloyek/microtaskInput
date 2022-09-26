import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";

function App() {
  const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
      ])
const addMessage = (title:string) => {
      // console.log({title}) - после нажатия выводит в консоль введенное
    //добавляет newMesage в массив message
    let newMessage={message: title}
        setMessage([newMessage, ...message])
}

  return (
    <div className="App">
      {/*<div>*/}
      {/*  <input/>*/}
      {/*  <button>+</button>*/}
      {/*</div>*/}
        <FullInput addMessage={addMessage}/>
      {message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )
      })}
    </div>
  );
}

export default App;
