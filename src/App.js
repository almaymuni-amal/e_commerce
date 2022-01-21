import React ,{useState,useEffect} from 'react';
import {Products , Navbar , Cart} from './components';
import {commerce} from './lib/commerce';
// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// or this way followed by index.js in components file
const App = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]=useState({});

    //fetch products from commercejs api
    // func to fetch
    const fetchProducts = async ()=>{
        //or result then ...
        const {data} =await commerce.products.list();
        // result.data instead of {data}
        // console.log(data);
        setProducts(data);
    }

    const fetchCart= async ()=>{
        setCart(await commerce.cart.retrieve());
    }
    
    const handleAddToCart= async (productId,quantity) => {
        const item = await commerce.cart.add(productId,quantity);
        setCart(item.cart);
    }
    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[])

    console.log(cart);

    return (
        <div>
            <Navbar allItems={cart.total_items}/>
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart}/>
        </div>
    )
}
export default App;


