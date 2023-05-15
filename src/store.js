import { createStore } from 'redux';
import inputReducer from './inputReducer';

const store = createStore(inputReducer);

export default store;
