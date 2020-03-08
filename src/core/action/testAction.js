import {LISTENCHANGE,CHANGE,CHANGEMOUSE,LISTENCHANGEMOUSE} from './actionTypes'

export function doChangeText(){

    return {type:LISTENCHANGE}
}
export function mouseLeave()
{
    return{type:CHANGEMOUSE}
}