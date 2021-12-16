import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import {fetchProducts} from '../redux/action';
import SingleProduct from './SingleProduct';


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProducts);
    /* eslint-disable */
    React.useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    if(isEmpty(products)) {
       return <>Loading ...</>
    }
   
    return (
        <Box display='flex' flexWrap='wrap' p={5}> 
            {products.map((item) => (
                <Link to={`/product/${item.id}`} key={item?.id}>
                    <SingleProduct image={item.image} title={item.title} category={item.category} price={item.price} />
               </Link> 
            ))}
        </Box>    
    )
}

export default Products;