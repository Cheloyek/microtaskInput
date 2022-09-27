import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
  const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
      ])

let[title, setTitle] = useState('')
console.log(title)
const addMessage = (title:string) => {
      // console.log({title}) - после нажатия выводит в консоль введенное
    //добавляет newMesage в массив message
    let newMessage={message: title}
        setMessage([newMessage, ...message])
}

const callBackButtonHandler = () => {
      addMessage(title)
      setTitle('')
}

  return (
    <div className="App">
        <Input setTitle={setTitle} title={title}/>
        {/*<Button name={'+'} callBack={() => {}}/>*/}
        <Button name={'+'} callBack={callBackButtonHandler}/>
      {message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )
      })}
    </div>
  );
}

export default App;
