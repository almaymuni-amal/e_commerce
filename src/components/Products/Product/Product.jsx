import React from 'react';
import {Card , CardActions , CardContent , CardMedia , Typography , IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'

// hook
import useStyles from './styles'


const Product = ({product}) => {
    const classes=useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.img} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary'>
                        {product.desc}
                    </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label='Add to cart'>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
