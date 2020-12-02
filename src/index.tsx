import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import allReducers from './reducers';

const store = createStore(
    allReducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App chat="" />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
