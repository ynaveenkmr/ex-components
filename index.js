import React from 'react';
import { render } from 'react-dom';
import './style.css';
import NavRouter from './NavRouter'


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

//
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function App (){ 
    return (
   <NavRouter/>
    );
}

render(<App />, document.getElementById('root'));
