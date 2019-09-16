import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './assets/Resources/css/app.css';
import Routes from './Routes';

const App = () => {
    return (
        <BrowserRouter>
           <Routes/>
        </BrowserRouter>
    )
}

render(<App />, document.getElementById('root'));

