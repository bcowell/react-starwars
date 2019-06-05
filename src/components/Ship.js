import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import PropTypes from 'prop-types';

// The Star Wars api doesn't include a reference to each ship id
// Instead it includes a url, which isn't as useful
// when we want to use params from react-router-dom
// There's even a feature request for it here: https://github.com/phalt/swapi/issues/84
const regExp = /[^\d]/g
const parseUrlForId = url => url.replace(regExp, '')


const Ship = ({ ships, history }) => {

    const updateRoute = (ship) => {
        history.push(`/ships/${parseUrlForId(ship.url)}`)
    }

    return (
        ships.length === 1
            ? <SingleShip ships={ships} updateRoute={updateRoute} />
            : <ShipList ships={ships} updateRoute={updateRoute} />
    )
}

Ship.propTypes = {
    ships: PropTypes.array.isRequired,
    history: PropTypes.object
}

const ShipList = ({ ships, updateRoute }) =>
    <Table responsive hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Model</th>
                <th>Manufacturer</th>
            </tr>
        </thead>
        <tbody>
            {
                ships.map((ship, i) => (
                    <tr onClick={() => updateRoute(ship)} key={i}>
                        <th scope="row">{i}</th>
                        <th>{ship.name}</th>
                        <th>{ship.model}</th>
                        <th>{ship.manufacturer}</th>
                    </tr>
                ))
            }
        </tbody>
    </Table>

ShipList.propTypes = {
    ships: PropTypes.array.isRequired,
    updateRoute: PropTypes.func.isRequired
}

const SingleShip = ({ ships, updateRoute }) =>
    <Table responsive hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Starship Class</th>
                <th>Model</th>
                <th>Manufacturer</th>
                <th>Cost (Galactic Credits)</th>
                <th>Length</th>
                <th>Crew</th>
                <th>Passengers</th>
                <th>Cargo Capacity</th>
                <th>Consumables</th>
                <th>Hyperdrive Rating</th>
            </tr>
        </thead>
        <tbody>
            {
                ships.map((ship, i) => (
                    <tr onClick={() => updateRoute(ship)} key={i}>
                        <th>{ship.name}</th>
                        <th>{ship.starship_class}</th>
                        <th>{ship.model}</th>
                        <th>{ship.manufacturer}</th>
                        <th>{ship.cost_in_credits}</th>
                        <th>{ship.length}</th>
                        <th>{ship.crew}</th>
                        <th>{ship.passengers}</th>
                        <th>{ship.cargo_capacity}</th>
                        <th>{ship.consumables}</th>
                        <th>{ship.hyperdrive_rating}</th>
                    </tr>
                ))
            }
        </tbody>
    </Table>

SingleShip.propTypes = {
    ships: PropTypes.array.isRequired,
    updateRoute: PropTypes.func.isRequired
}

export default withRouter(Ship);