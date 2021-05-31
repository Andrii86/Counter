import {render} from "redux-logger/src/diff";
import thunk from "redux-thunk";
import {rootReducer} from "./redux/rootReducer";
import {applyMiddleware, createStore} from 'redux';
import './style.css';
import {asyncIncrement, decrement, increment} from "./redux/action";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')

const store = createStore(
    rootReducer,
    0,
    applyMiddleware(thunk)
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment());
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type: 'INIT_APPLICATION'})