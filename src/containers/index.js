import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from '../store';
import { MemoryRouter } from 'react-router-dom';

const Root = () =>
    <Provider store={store}>
        <MemoryRouter>
            <App />
        </MemoryRouter>
    </Provider>

export default Root;