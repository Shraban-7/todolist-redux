import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement } from '../services/action/counterAction'

function Counter({increment,decrement,count}) {
    return (
        <>
          <h1>Count : {count}</h1>
          <button onClick={()=>increment(5)}>increment</button>  
          <button onClick={()=>decrement(1)}>decrement</button>  
        </>
    )
}

const mapStateToProps=(state)=>({
    count:state.counterReducer.count
})

export default connect(mapStateToProps,{increment,decrement})(Counter); 

