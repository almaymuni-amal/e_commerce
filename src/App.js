import React ,{useState,useEffect} from 'react';
import {Products , Navbar , Cart} from './components';
import {commerce} from './lib/commerce';
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
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
        const {cart} = await commerce.cart.add(productId,quantity);
        setCart(cart);
    }

    const handleUpdateCartQty= async (productId, quantity)=>{
        const {cart} = await commerce.cart.update(productId,{quantity});
        setCart(cart);
    }

    const handleRemoveFromCrt= async (productId)=>{
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart);
    }

    const handlEemptyCart= async ()=>{
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[])

    console.log(cart);

    return (
        <Router>
            <div>
                <Navbar allItems={cart.total_items}/>
                {/* Which to show using Routes*/}
                <Routes> 
                    <Route exact path="/" element={<Products products={products} onAddToCart={handleAddToCart} />}/>
                    <Route 
                        exact path="/cart" 
                        element={
                        <Cart 
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCrt={handleRemoveFromCrt}
                            handlEemptyCart={handlEemptyCart}
                        />}/>
                </Routes>
            </div>
        </Router>
    )
}
export default App;


