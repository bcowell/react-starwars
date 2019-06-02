import {
    REQUEST_SHIPS,
    RECIEVE_SHIPS,
    REQUEST_NEXT_PAGE,
    RECIEVE_NEXT_PAGE,
}
from '../constants/actionTypes';

const initialState = {
    isFetching: false,
    shipList: [],
    next: null,
}

function doRecieveShips(state, action) {
    // We are either recieving one or a list of ships 
    let shipList = state.shipList;
    if (action.ships.length > 1) {
        JSON.parse(JSON.stringify(state.shipList)); // deep copy, so we don't mutate
        shipList = shipList.concat(action.ships);
    }
    else {
        shipList = action.ships
    }
    return {...state, isFetching: false, shipList: shipList }
}

const shipsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_SHIPS: return {...state, isFetching: true }
        case RECIEVE_SHIPS: return doRecieveShips(state, action);
        case REQUEST_NEXT_PAGE: return {...state, isFetching: true }
        case RECIEVE_NEXT_PAGE: return {...state, next: action.next }
        default: return state;
    }
}

export default shipsReducer;