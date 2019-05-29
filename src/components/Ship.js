import React from 'react';

const Ship = ({ ship, i }) =>
    <tr>
        <th scope="row">{i}</th>
        <th>{ship.name}</th>
        <th>{ship.model}</th>
        <th>{ship.manufacturer}</th>
    </tr>

export default Ship;