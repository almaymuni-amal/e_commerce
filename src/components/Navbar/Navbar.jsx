import React from 'react';
import {AppBar, Toolbar , IconButton , Badge, MenuItem, Menu , Typography} from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import Logo from '../../assets/logo.png';


const Navbar = ({allItems}) => {

const classes=useStyles();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    {/* left */}
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        {/* LOGO and Shop name */}
                        <img src={Logo} alt='Maymouni Shop' height='25px' className={classes.image}/>
                        Maymouni Shop
                    </Typography>
                    {/* right */}
                    {/* div for a space  فاصل*/}
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label='shopping cart items' color='inherit'>
                            {/* badge is the number of items in a shopping cart */}
                            <Badge badgeContent={allItems} color='secondary'>
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
