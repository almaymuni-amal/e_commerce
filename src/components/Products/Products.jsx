import React from "react";
import  {Grid}  from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './styles';

// const products=[
//     {id:1, name:'shoes' , desc: 'running shoes',price:'300$', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgvChT-knPlb23LVKlta7WGLLY6-ZQmnXQw&usqp=CAU'},
//     {id:2, name:'iphone' , desc: 'smart device',price:'3000$', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSJcnhgVA4wlCcgXVHRDJCiy5yyRFZB6VJA&usqp=CAU'}
// ]
const Products = ({products , onAddToCart}) =>{
    const classes=useStyles();

    return(
    <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Grid container justifyContent="center" spacing={4}>
            {products.map((product)=>{
                return(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    {/* product component */}
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
                )
            })}
        </Grid>
    </main>
    )
}

export default Products;