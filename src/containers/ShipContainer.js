import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShipsIfNeeded } from '../actions/shipActions';
import Ships from '../components/Ships';

class ShipContainer extends Component {

    componentDidMount() {
        const shipId = this.props.match.params.id;
        this.props.fetchShips(shipId); // Optional ship id
    }

    render() {
        return <Ships ships={this.props.ships}/>
    }
}

const mapStateToProps = state => ({
    ships: state.ships.shipList,
})

const mapDispatchToProps = dispatch => ({
    fetchShips: (shipId) => dispatch(fetchShipsIfNeeded(shipId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShipContainer);