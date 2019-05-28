import React from 'react';
import PropTypes from 'prop-types';

const Ships = props =>

    props.ships ?
    <ul>
        {props.ships.map((ship, i) => (
            <li key={i}>{ship.name}</li>
        ))}
    </ul>
    : 'No ships...'


Ships.propTypes = {
    ships: PropTypes.array
}

export default Ships;