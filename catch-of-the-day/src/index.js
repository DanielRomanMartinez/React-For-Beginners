import React from 'react'; // Import React
import  { render } from 'react-dom'; // Import render function from react-dom
import Router from './components/Router';
import "./css/style.css";

render(<Router />, document.querySelector('#main'));