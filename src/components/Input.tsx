import React, {ChangeEvent} from 'react';

// 1. local state для input вынесен в app let[title, setTitle]
// 2. в app вызываем <Input setTitle={setTitle} title={title}/>
// в который передаем значения useState
// {title} - для синхронизации input
// {setTitle} - для того чтобы могли передавать значение
// 3.набирается в input и меняется title

type InputPropsType = {
    setTitle: (title: string) => void,
    title: string
}

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        {/*console.log(event.currentTarget.value) - все что введут в input*/}
        props.setTitle(event.currentTarget.value)
    }
    return (
            <input onChange={onChangeInputHandler} value={props.title}/>
    );
};
