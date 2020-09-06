import {increment_Value,decrement_Value} from '../Type'


const initialState={
    count:0
}

export default function(state = initialState, action) {
  switch (action.type) {
    case increment_Value:
      return {
        ...state,
        count:state.count+action.payload
      };
    case decrement_Value:
      return {
        ...state,
        count:state.count-action.payload
      };
     
    default:
      return state;
  }
}