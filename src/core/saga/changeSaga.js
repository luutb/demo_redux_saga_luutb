import { put, takeEvery } from 'redux-saga/effects'
import {LISTENCHANGE,CHANGE,CHANGEMOUSE,LISTENCHANGEMOUSE} from '../action/actionTypes'
export function* testChangeText()
{
    yield put({type:CHANGE})
}

export function* watchTestChangeText()
{
    yield takeEvery(LISTENCHANGE,testChangeText)
}

export function* changeOnMouse()
{
    yield put({type:CHANGEMOUSE})
}
export function* watchChangeMouse()
{
    yield takeEvery(LISTENCHANGEMOUSE,changeOnMouse)
}
