import { createStore } from 'redux'
import rootReducer from '../reducers/index'
const persistedState = localStorage.getItem('fcard')
  ? JSON.parse(localStorage.getItem('fcard'))
  : {};

 const store = createStore(
  rootReducer,persistedState
)
store.subscribe(() => {
  localStorage.setItem('fcard', JSON.stringify(store.getState()));
});
export default store;