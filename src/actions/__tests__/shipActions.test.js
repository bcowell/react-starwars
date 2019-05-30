import { getShips } from '../shipActions';
import { mockResponseOnce } from 'jest-fetch-mock';
import { shipResponse, shipsResponse } from '../../constants/responses';

it('Fetch list of ships from SWAPI', () => {
    mockResponseOnce(shipsResponse);
    getShips()
    .then(response => response.json())
    .then(json => {
        expect(json.results).toEqual(shipsResponse); 
    });
})