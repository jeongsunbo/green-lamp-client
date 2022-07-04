import axios from 'axios';
//axios 사용해서 get, put, post, delete등의 메서드로 api요청함
import React from 'react';
import './index.scss';
import useAsync from "../customHook/useAsync";
import MainProduct from './MainProduct';
async function getProducts(){
    const response = await axios.get("http://localhost:3000/products")
    return response.data;
}
const MainPage = () => {
    const [state,refetch] = useAsync(getProducts,[]);
    const {loading, data, error} = state;
    console.log(data);
    if(loading) return <div>로딩중...</div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!data) return <div>로딩중입니다</div>;
    return (
        <div>
            <div id='main'>
                <div id='banner'>
                    <img src="images/banners/banner1.png" alt=''/>
                </div>
                <div id='product-list' className='inner'>
                    <h2>그린조명 최신상품</h2>
                    <div id='pruduct-items'>
                        {data.product.map(product=><MainProduct key={product.id} product={product}/>)}
                        {/* data.map 객체로 받아와서*/}
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default MainPage;