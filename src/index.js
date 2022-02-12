import React from 'react';
import ReactDOM from 'react-dom';

// Importing user defined components...
import Main from './components/Main'

// Importing redux based components...
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

// Getting reducers...
import FilterReducer from './redux/reducers/FilterReducer'
import FruitReducer from './redux/reducers/FruitReducer';
import VegetableReducer from './redux/reducers/VegetableReducer';

// Combining reducers...
const reducers = combineReducers({
  "filter": FilterReducer,
  "fruit": FruitReducer,
  "vegetable": VegetableReducer
});

// Creating store...
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
