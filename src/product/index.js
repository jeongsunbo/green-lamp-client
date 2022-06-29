import React from 'react';
import "./product.scss";
const ProductPage = () => {
    return (
        <div>
            <div id="image-box" className='inner'>
                <img src="images/products/product2.jpg" alt=''/>
            </div>
            <div id='profile-box' className='inner'>
                <ul>
                    <li>
                        <div>
                            <img src="images/icons/avatar.png" alt=''/>
                            <span>그린</span>
                        </div>
                    </li>
                    <li>
                        제품명 새로운 조명
                    </li>
                    <li>
                        가격 50000원
                    </li>
                    <li>등록일 2022년 6월 29일</li>
                    <li>상세설명</li>
                </ul>
            </div>
        </div>
    );
};

export default ProductPage;