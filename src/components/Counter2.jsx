import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from '../services/action/counterAction'

 const Counter2 = () => {
    const count = useSelector(state=>state.counterReducer.count)
    const dispatch = useDispatch()
    return (
      <>
        <h1>Count : {count}</h1>
        <button onClick={() =>dispatch(increment(2)) }>increment</button>
        <button onClick={() =>dispatch(decrement(2)) }>decrement</button>
      </>
    );
}

export default Counter2;

