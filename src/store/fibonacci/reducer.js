import {
  REQUEST_FIBONACCI,
  REQUEST_FIBONACCI_SUCCESS,
  REQUEST_FIBONACCI_FAILURE,
} from './action';

export const INITIAL_STATE = { fibonacci: [], isFetching: false, error: '' };

function fibonacciReducer(state=INITIAL_STATE, action){
  if (action.type === REQUEST_FIBONACCI) {
    return { ...state, isFetching: true };
  }
  if (action.type === REQUEST_FIBONACCI_SUCCESS) {
    return { ...state, isFetching: false, fibonacci: action.fibonacciList };
  }
  if (action.type === REQUEST_FIBONACCI_FAILURE) {
    return { ...state, isFetching: false, error: action.error };
  }
  return { ...state };
}

export default fibonacciReducer;