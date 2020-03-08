import {watchTestChangeText,watchChangeMouse} from './changeSaga'
import { put, takeLatest, all } from 'redux-saga/effects';

export default function* (){

    yield all([
        watchTestChangeText(),
        watchChangeMouse()
    ])
}