import { getShips } from '../shipActions';
import { mockResponseOnce } from 'jest-fetch-mock';
import { shipResponse, shipsResponse } from '../../constants/responses';

it('Fetch list of ships from SW api', () => {
    mockResponseOnce(shipsResponse);
    getShips()
    .then(response => response.json())
    .then(json => {
        expect(json.results).toEqual(shipsResponse); 
    });
})

it('Fetch single ship from SW api', () => {
    const dummyShipId = 15;
    mockResponseOnce(shipResponse);
    getShips(dummyShipId)
    .then(response => response.json())
    .then(json => {
        expect(json.results).toEqual(shipResponse); 
    });
})