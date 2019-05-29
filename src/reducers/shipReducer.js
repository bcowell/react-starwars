import {
    REQUEST_SHIPS,
    RECIEVE_SHIPS,
}
from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    shipList: []
}

const shipsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_SHIPS: return {...state, isFetching: true }
        case RECIEVE_SHIPS: return {...state, isFetching: false, shipList: action.ships }
        default: return state;
    }
}

export default shipsReducer;