import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const SingleProduct = ({image, title, category, description, price}) => {
    return  (
        <Card style={{width: 200, margin: 10}}>
            <CardMedia
                component="img"
                height='300'
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant='subtitle2'>
                    <b>{title}</b>
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                    {category}
                </Typography>
                <Typography variant='body2'>
                    ${price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SingleProduct;