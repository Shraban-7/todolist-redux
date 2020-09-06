import { increment_Value, decrement_Value } from "../Type";


export const increment=(a)=>{
    return {
        type:increment_Value,
        payload:a
    }
}


export const decrement=(a)=>{
    return {
        type:decrement_Value,
        payload:a
    }
}