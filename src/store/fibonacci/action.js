import {
  fetchFibonacci,
  fetchFibonacciCreate,
  fetchFibonacciDelete,
} from '../../service/api';

export const REQUEST_FIBONACCI = 'REQUEST_FIBONACCI';
export const REQUEST_FIBONACCI_SUCCESS = 'CREATE_FIBONACCI_SUCCESS';
export const REQUEST_FIBONACCI_FAILURE = 'CREATE_FIBONACCI_FAILURE';

const requestFibonacci = () => ({
  type: REQUEST_FIBONACCI
});

const requestFibonacciSuccess = (fibonacciList) => ({
  type: REQUEST_FIBONACCI_SUCCESS,
  fibonacciList,
});

const requestFibonacciFailure = (error) => ({
  type: REQUEST_FIBONACCI_FAILURE,
  error,
});

export function getFibonacci() {
  return (dispatch) => {
    dispatch(requestFibonacci());
    return fetchFibonacci()
      .then((response) => dispatch(requestFibonacciSuccess(response)))
      .catch((error) => dispatch(requestFibonacciFailure(error)));
  };
}

export function createFibonacci() {
  return (dispatch) => {
    //dispatch(requestFibonacci());
    return fetchFibonacciCreate()
      .then((response) => dispatch(requestFibonacciSuccess(response)))
      .catch((error) => dispatch(requestFibonacciFailure(error)));
  };
}

export function deleteFibonacci() {
  return (dispatch) => {
    //dispatch(requestFibonacci());
    return fetchFibonacciDelete()
      .then((response) => dispatch(requestFibonacciSuccess(response)))
      .catch((error) => dispatch(requestFibonacciFailure(error)));
  };
}
