import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchShipsIfNeeded } from '../actions/shipActions';
import Ships from '../components/Ships';
import Pagination from '../components/Pagination';
import { Container, Row, Col } from 'reactstrap';

class ShipContainer extends Component {

    componentDidMount() {
        const shipId = this.props.match.params.id;
        this.props.fetchShips(shipId); // Optional ship id
    }

    render() {
        let { isFetching, ships } = this.props;
        return (
            <Container>
                <Row>
                    <Ships ships={ships} isFetching={isFetching} />
                </Row>
                { // only show pagination buttons for the list, not single ships
                    !this.props.match.params.id ?
                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }} >
                                <Pagination />
                            </Col>
                        </Row>
                    : null
                }
            </Container>
            )
    }
}

const mapStateToProps = state => ({
    ships: state.ships.shipList,
    isFetching: state.ships.isFetching,
})

const mapDispatchToProps = dispatch => ({
    fetchShips: (url) => dispatch(fetchShipsIfNeeded(url)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ShipContainer);