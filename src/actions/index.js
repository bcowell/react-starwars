import fetch from 'cross-fetch';
import { baseURL } from '../constants/api';
import {
    REQUEST_SHIPS,
    RECIEVE_SHIPS,
}
from '../constants/actionTypes';

function requestShips() {
    return {
        type: REQUEST_SHIPS
    }
}

function recieveShips(json) {
    return {
        type: RECIEVE_SHIPS,
        ships: json.results
    }
}

function fetchShips() {
    return dispatch => {
        dispatch(requestShips());
        return fetch(`${baseURL}/starships/`)
        .then(response => response.json())
        .then(json => dispatch(recieveShips(json)));
    }
}

function shouldFetchShips(state) {
    const ships = state.ships
    if (!ships) { return true }
    else if (ships.isFetching) { return false}
}

export function fetchShipsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchShips(getState())) {
            return dispatch(fetchShips());
        }
    }
}