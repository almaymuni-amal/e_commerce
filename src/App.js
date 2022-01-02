import React from 'react';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// or this way followed by index.js in components file
import {Products , Navbar} from './components';
const App = () => {
    return (
        <div>
            <Navbar/>
            <Products/>
        </div>
    )
}

export default App
