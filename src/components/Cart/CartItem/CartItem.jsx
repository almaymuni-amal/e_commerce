import React from 'react';
import {Typography , Button , Card , CardActions , CardContent , CardMedia} from '@material-ui/core';
 import useStyles from './styles'


function CartItem({handleRemoveFromCrt,handleUpdateCartQty ,item}) {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant='h5'>{item.name}</Typography>
                <Typography variant='h6'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={()=>handleUpdateCartQty(item.id,item.quantity - 1)}> - </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size='small'onClick={()=>handleUpdateCartQty(item.id,item.quantity + 1)}> + </Button>
                </div>
                <Button type='button' variant='contained' color='secondary' onClick={()=>handleRemoveFromCrt(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem;
