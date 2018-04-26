import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import devToolsEnhancer from 'remote-redux-devtools';

import rootReducer from './reducers';

const store = createStore(rootReducer, devToolsEnhancer());

const SeriesApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default SeriesApp;