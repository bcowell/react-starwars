import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import Ship from './Ship';


const Ships = props =>

    props.isFetching ? 'Loading...' :
        props.ships ?
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    {props.ships.map((ship, i) => (
                        <Ship ship={ship} i={i} key={i} />
                    ))}

                </tbody>

            </Table>
            : 'No ships...'


Ships.propTypes = {
    ships: PropTypes.array
}

export default Ships;