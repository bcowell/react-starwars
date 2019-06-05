import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Root = ({ store }) =>
    <Provider store={store}>
        <MemoryRouter>
            <App />
        </MemoryRouter>
    </Provider>

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root;