import { combineReducers } from 'redux';
import {
    REQUEST_SHIPS,
    RECIEVE_SHIPS,
}
from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    ships: []
}

const shipsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_SHIPS: return {...state, isFetching: true }
        case RECIEVE_SHIPS: return {...state, isFetching: false, ships: action.ships }
        default: return state;
    }
}

function dummyReducerB() { return false }

const rootReducer = combineReducers({
    shipsReducer,
    dummyReducerB
})

export default rootReducer;