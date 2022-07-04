import React from 'react';
import "./product.scss";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../customHook/useAsync';
async function getProducts(id){
    const response = await axios.get(`http://localhost:3000/product/${id}`)
    return response.data;
}
const ProductPage = () => {

    // useParams()가 실행되면 파라미터 값을 가지고 있는 객체를 반환
    // product/1
    const { id } = useParams();
    console.log(id);
    const [state] = useAsync(()=>getProducts(id),[id]);
    const { loading, data:product, error} = state;
    console.log(product);
    if(loading) return <div>로딩중입니다.......</div>;
    if(error) return <div>에러가 발생</div>;
    if(!product) return null;
    
    return (
        <div className='inner'>
            <div id="image-box">
            {/* "/images/products/product2.jpg" */}
                <img src={product.imageUrl} alt=''/>
            </div>
            <div id='profile-box' className='inner'>
                <ul>
                    <li>
                        <div>
                            <img src="/images/icons/avatar.png" alt=''/>
                            <span>{product.seller}</span>
                        </div>
                    </li>
                    <li>
                        {product.name}
                    </li>
                    <li>
                        {product.price}
                    </li>
                    <li>등록일 2022년 6월 29일</li>
                    <li>상세설명</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;