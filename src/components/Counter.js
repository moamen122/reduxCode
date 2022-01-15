import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decreamentAction, increamentAction, IncreaseBy5 } from '../redux/actions/counterActions';


const Counter = () => {
    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleIncreament = () => {
        increamentAction(dispatch);
    }

    const handleDecreament = () => {
        decreamentAction(dispatch)
    }
    const handleIncrease = (vl) => {
        IncreaseBy5(vl, dispatch)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDecreament}>Decreament</button>
            <button onClick={() => handleIncrease(5)}>Increase 5</button>

        </div>
    )
}

export default Counter
