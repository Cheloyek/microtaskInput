import React from 'react';

// универсальный button
// 1. содержит name и callBack
// 2. в app кнопке передается name и callBack
// 3. callBack вызывает addMessage и передает в addMessage title

type ButtonPropsType = {
    name:string,
    callBack: () => void
}

//универсальный button
export const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
            <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};
