import React from 'react';
import PropTypes from 'prop-types';
import loadingGif from '../assets/loading.gif';
import Ship from './Ship';

const Ships = props =>
    props.isFetching
        ? <img src={loadingGif} alt="loading" />
        : props.ships
            ? <Ship ships={props.ships} />
            : 'No ships...'

Ships.propTypes = {
    ships: PropTypes.array
}

export default Ships;