import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



import Home from './components/home';
import SinglePage from './components/singlePage';


//ReactDOM.render(<SinglePage />, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
