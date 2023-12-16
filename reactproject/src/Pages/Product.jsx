import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Breadcrum/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Descriptionsbox from '../Components/Descriptionsbox/Descriptionsbox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';



const Product = () =>
{
    const {all_product} =useContext(ShopContext);
    const {productId} = useParams();
    const product=all_product.find((e)=>e.id===Number(productId))

    return(
        <div>
             <Breadcrum product={product}/> 
             <ProductDisplay product={product }/>
             <Descriptionsbox/>
             <RelatedProducts/>
        </div>
    )
}
export default Product