import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import isEmpty from 'lodash/isEmpty';
import {fetchProduct, removeProductDetails} from '../redux/action';

const Product = () => {
    const dispatch = useDispatch();
    const match = useParams();
    const productDetails = useSelector((state) => state.productDetails)
    console.log('match', match, productDetails)
    /* eslint-disable */
    React.useEffect(() => {
        dispatch(fetchProduct(match?.productId))
        return () => {
            dispatch(removeProductDetails())
        }
    },[])
    if(isEmpty(productDetails)){
        return <>Loading...</>
    }
    return (
        <Box display='flex' flexDirection='column' p={5}>
            <img src={productDetails?.image} alt={productDetails?.title} width={300} />
            <br/> <br/>
            <Typography variant='h4'>{productDetails?.title}</Typography>
            <Typography variant='h6'>Category: {productDetails?.category}</Typography>
            <br />
            <Typography variant='subtitle2'>{productDetails?.description}</Typography>
            <Typography variant='subtitle2'>Price: {productDetails?.price}</Typography>
        </Box>
    )
}

export default Product;