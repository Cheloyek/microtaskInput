import React, {ChangeEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
//1. Когда что-то вводим должно сохраняться. Когда вводим в input - сохраняется в локальном state
// когда нажимаем на кнопку отправляет на сервер
type FullInputPropsType = {
    addMessage: (title:string) => void
}
export const FullInput = (props: FullInputPropsType) => {
    let[title, setTitle] = useState('')
    // console.log(title) - покажет все введенное в input

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        {/*console.log(event.currentTarget.value) - все что введут в input*/}
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)

        /*после нажатия на кнопку очищает input, тк onChange value={title}*/
        setTitle('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};