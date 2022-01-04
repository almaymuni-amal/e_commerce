import React ,{useState,useEffect} from 'react';
import {Products , Navbar} from './components';
import {commerce} from './lib/commerce';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// or this way followed by index.js in components file
const App = () => {
    const [products, setProducts]=useState([]);

    //fetch products from commercejs api
    // func to fetch
    const fetchProducts = async ()=>{
        //or result then ...
        const {data} =await commerce.products.list();
        // result.data instead of {data}
        // console.log(data);
        setProducts(data);
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    return (
        <div>
            <Navbar/>
            <Products products={products} />
        </div>
    )
}

export default App;

//test