import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import Ship from './Ship';

const Ships = props =>
    props.isFetching
        ? <Loader />
        : props.ships
            ? <Ship ships={props.ships} />
            : 'No ships...'

Ships.propTypes = {
    ships: PropTypes.array
}

export default Ships;