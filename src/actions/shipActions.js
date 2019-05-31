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

export function getShips(shipId, dispatch) {
    return fetch(`${baseURL}/starships/${shipId ? shipId : ''}`)
        .then(response => response.json())
        .then(json => {
            // Possibility of fetching a single ship via id
            json.results 
            ? dispatch(recieveShips(json))
            : dispatch(recieveShip(json))
        });
}

function fetchShips(shipId) {
    return dispatch => {
        dispatch(requestShips(shipId));
        getShips(shipId, dispatch);
    }
}

function shouldFetchShips(state, shipId) {
    const ships = state.ships
    // Haven't fetched ships
    // or the case we'd like to fetch a single ship's details
    // or we'd like to re-fetch the shipList after visiting a ship's details
    if (ships.shipList.length === 0 || (shipId && ships.shipList.length > 1) || (!shipId && ships.shipList.length === 1)) { return true }
    else if (ships.isFetching) { return false}
}

export function fetchShipsIfNeeded(shipId) {
    return (dispatch, getState) => {
        if (shouldFetchShips(getState(), shipId)) {
            return dispatch(fetchShips(shipId));
        }
    }
}