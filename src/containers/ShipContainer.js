import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShipsIfNeeded } from '../actions';
import Ships from '../components/Ships';

class ShipContainer extends Component {

    componentDidMount() {
        this.props.fetchShips();
    }

    render() {
        return <Ships ships={this.props.ships}/>
    }
}

const mapStateToProps = state => ({
    ships: state.ships,
})

const mapDispatchToProps = dispatch => ({
    fetchShips: () => dispatch(fetchShipsIfNeeded()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShipContainer);