import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

const SeriesApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default SeriesApp;