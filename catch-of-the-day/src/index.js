import React from 'react'; // Import React
import  { render } from 'react-dom'; // Import render function from react-dom
import StorePicker from './components/StorePicker';
import "./css/style.css";

render(<StorePicker></StorePicker>, document.querySelector('#main'));