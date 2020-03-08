import {LISTENCHANGE,CHANGE,CHANGEMOUSE,LISTENCHANGEMOUSE} from '../action/actionTypes'


const defaultState ={

    value:"Không"
}
const randomX=()=>{
    let X = Math.floor(Math.random()*window.innerWidth)
    return X;

}
const randomY=()=>{
    let Y = Math.floor(Math.random()*window.innerHeight)
    return Y;

}
export default( state =defaultState, action )=>{


    switch(action.type){
        case CHANGE:
            return{...state, value:"Có"}
            
        case CHANGEMOUSE: 
            return {...state, x:randomX(),y:randomY()}
        default:
            return state;
    }
}