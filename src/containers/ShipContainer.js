import React from 'react';
import { connect } from 'react-redux';
import {
    fetchShipsIfNeeded,
    loadMoreShipsForInfiniteScroll,
} from '../actions/shipActions';
import PropTypes from 'prop-types';
import Ships from '../components/Ships';
import { Container, Row } from 'reactstrap';
import InfiniteLoader from 'react-infinite-loader';


const ShipContainer = (props) => {

    let { isFetching, ships } = props;
    const shipId = props.match.params.id;

    if (!isFetching) {
        props.fetchShips(shipId); // Optional ship id
    }

    return (
        <Container style={{ minHeight: "105vh"}}>
        <Row>
            <Ships ships={ships} isFetching={isFetching} />
            {!shipId ? <InfiniteLoader onVisited={() => props.loadMore()} /> : null}
        </Row>
    </Container>
    )
}

ShipContainer.propTypes = {
    ships: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    fetchShips: PropTypes.func.isRequired,
    loadMore: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    ships: state.ships.shipList,
    isFetching: state.ships.isFetching,
})

const mapDispatchToProps = dispatch => ({
    fetchShips: (url) => dispatch(fetchShipsIfNeeded(url)),
    loadMore: () => dispatch(loadMoreShipsForInfiniteScroll()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShipContainer)
