import React, { useEffect, useState } from 'react';
import './style.scss';
import Product from '../../components/Product/Product';
import { appUrl } from '../../config/appUrl';
import axios from 'axios';

const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const url = appUrl.url;
            const fetchedProducts = await axios.get(`${url}/products`)
            // console.log(fetchedProducts.data);
            setProduct(fetchedProducts.data)
        }
        fetchProducts()
    }, [])
    return (
        <div className="shop">
            <div className="shop_wrapper">
                {/* <div className="shop_top"></div> */}
                <div className="shop_products">
                    {
                        product.map((p, ind) => (
                            <Product key={p._id} product={p} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Shop