import React from 'react';
import { render } from 'react-dom';
import Root from '../index';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    render(<Root />, div);
})