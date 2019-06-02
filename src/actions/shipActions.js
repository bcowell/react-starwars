import fetch from 'cross-fetch';
import { baseURL } from '../constants/api';
import {
    REQUEST_SHIPS,
    RECIEVE_SHIPS,
    REQUEST_NEXT_PAGE,
    RECIEVE_NEXT_PAGE,
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

function requestNextPage() {
    return {
        type: REQUEST_NEXT_PAGE
    }
}

function recieveNextPage(json) {
    return {
        type: RECIEVE_NEXT_PAGE,
        next: json.next
    }
}

export function getShips(url, dispatch) {
    return fetch(url)
        .then(response => response.json())
        .then(json => {
            // Possibility of fetching a single ship via id
            if (json.results) {
                dispatch(recieveShips(json));
                // And store next page for pagination
                dispatch(recieveNextPage(json));
            } else {
                dispatch(recieveShip(json))
            }
        });
}

function fetchShips(shipId) {
    return dispatch => {
        dispatch(requestShips(shipId));
        let url = `${baseURL}/starships/${shipId ? shipId : ''}`
        getShips(url, dispatch);
    }
}

function shouldFetchShips(state, shipId) {
    const ships = state.ships
    if (ships.shipList.length === 0 || // Haven't fetched ships
        (shipId && ships.shipList.length > 1) || // or we'd like to fetch a single ship's details
        (!shipId && ships.shipList.length === 1) // or we'd like to re-fetch the shipList after visiting a ship's details
    ) { return true }
    else if (ships.isFetching) { return false }
}

export function fetchShipsIfNeeded(shipId) {
    return (dispatch, getState) => {
        if (shouldFetchShips(getState(), shipId)) {
            return dispatch(fetchShips(shipId));
        }
    }
}

function getNextPage(state) {
    const ships = state.ships
    const next = state.ships.next
    if (!ships.isFetching) {
        return dispatch => {
            dispatch(requestNextPage);
            if (next) {
                getShips(next, dispatch);
            }
            // else out of ships to fetch
        }
    }
}

export function loadMoreShipsForInfiniteScroll() {
    return (dispatch, getState) => {
        dispatch(getNextPage(getState()));
    }
}