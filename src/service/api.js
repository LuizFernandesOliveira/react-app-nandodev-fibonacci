import axios from 'axios';

const BASE_URL = 'https://nandodev-fibonacci.herokuapp.com/fibonacci';

export const fetchFibonacci = () => new Promise((resolve, reject) => {
  axios.get(BASE_URL)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export const fetchFibonacciById = (id) => new Promise((resolve, reject) => {
  axios.get(`${BASE_URL}/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export const fetchFibonacciCreate = () => new Promise((resolve, reject) => {
  axios.post(`${BASE_URL}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export const fetchFibonacciDelete = () => new Promise((resolve, reject) => {
  axios.delete(`${BASE_URL}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
