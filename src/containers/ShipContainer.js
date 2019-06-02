import React from 'react';
import { connect } from 'react-redux';
import {
    fetchShipsIfNeeded,
    loadMoreShipsForInfiniteScroll,
} from '../actions/shipActions';
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
        <Container>
        <Row>
            <Ships ships={ships} isFetching={isFetching} style={{ height: '100vh' }} />
            {!shipId ? <InfiniteLoader onVisited={() => props.loadMore()} /> : null}
        </Row>
    </Container>
    )
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
