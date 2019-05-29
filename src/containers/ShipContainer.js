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
        let { isFetching, ships } = this.props;
        return <Ships ships={ships} isFetching={isFetching} />
    }
}

const mapStateToProps = state => ({
    ships: state.ships.shipList,
    isFetching: state.ships.isFetching,
})

const mapDispatchToProps = dispatch => ({
    fetchShips: (shipId) => dispatch(fetchShipsIfNeeded(shipId)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShipContainer);