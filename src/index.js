import React from 'react';
import { render } from 'react-dom';
import Root from './containers';
import store from './store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

render(<Root store={store} />, document.getElementById('root'));