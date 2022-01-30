import React from 'react';
import {AppBar, Toolbar , IconButton , Badge, MenuItem, Menu , Typography} from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import Logo from '../../assets/logo.png';
import {Link , useLocation} from 'react-router-dom'


const Navbar = ({allItems}) => {

const classes=useStyles();
const location = useLocation(); //to hide cart icon if user in cart page

    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    {/* left */}
                    <Typography variant='h6' className={classes.title} color='inherit' component={Link} to='/'>
                        {/* LOGO and Shop name */}
                        <img src={Logo} alt='Maymouni Shop' height='25px' className={classes.image}/>
                        Maymouni Shop
                    </Typography>
                    {/* right */}
                    {/* div for a space  فاصل*/}
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        {/* 1-  <Link to='/cart'></Link> */}
                        {/* or matrial-ui allows us to do this */}
                        {/* using && in react : If false , React will ignore and skip it */}
                        {location.pathname === '/' && 
                        (
                        <IconButton component={Link} to='/cart' aria-label='shopping cart items' color='inherit'>
                            {/* badge is the number of items in a shopping cart */}
                            <Badge badgeContent={allItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
