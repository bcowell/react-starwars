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

function recieveShip(json) {
    return {
        type: RECIEVE_SHIPS,
        ships: [json]
    }
}


function fetchShips(shipId) {
    return dispatch => {
        dispatch(requestShips(shipId));
        return fetch(`${baseURL}/starships/${shipId ? shipId : ''}`)
        .then(response => response.json())
        .then(json => {
            // Possibility of fetching a single ship via id
            json.results 
            ? dispatch(recieveShips(json))
            : dispatch(recieveShip(json))
        });
    }
}

function shouldFetchShips(state, shipId) {
    const ships = state.ships
    if (shipId || ships.shipList.length === 0) { return true }
    else if (ships.isFetching) { return false}
}

export function fetchShipsIfNeeded(shipId) {
    return (dispatch, getState) => {
        if (shouldFetchShips(getState(), shipId)) {
            return dispatch(fetchShips(shipId));
        }
    }
}