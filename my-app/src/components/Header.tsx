import React, {useState} from 'react';

export const Header: React.FC = () => {
    const [counter, setCounter] = useState<number>(0);
    const [value, setValue] = useState<string>('введи что-нибудь');

    const clickHandler = () => {
        setCounter(counter + 1)
    }

    const valueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return <>
        <p className="header"
        onClick={clickHandler}
        >Graphs</p>
        <p className="counter">{counter}</p>
        <input className="value"
        id="input"
        onInput={valueHandler}
        value={value}
        />
        <label htmlFor="index">{value}</label>
    </>
}