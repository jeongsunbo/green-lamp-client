import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.scss';
import MainProduct from './MainProduct';

const MainPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        axios.get(`http://localhost:3000/products`) //이주소로 요청
        .then(result=>{
            const products = result.data.product; //result의 
            setProducts(products);
            console.log(products);
        }).catch((e)=>{
            console.log(e);
        })
    },[])
    if(products===[]) return <div>로딩중입니다</div>;
    return (
        <div>
            
            <div id='main'>
                <div id='banner'>
                    <img src="images/banners/banner1.png" alt=''/>
                </div>
                <div id='product-list' className='inner'>
                    <h2>그린조명 최신상품</h2>
                    <div id='pruduct-items'>
                        {products.map(product=><MainProduct key={product.id} product={product}/>)}
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default MainPage;