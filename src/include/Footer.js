import React from 'react';

const footer = () => {
    return (
        <div id='footer'>
                <div id='footer-info'>
                    <div className='inner'>
                        <div>
                            <h3>무통장 입금계좌</h3>
                            <p>BANK ACCOUNT</p>
                            <p>301-1234-5678-01</p>
                            <p>예금주 - 김그린(그린조명)</p>
                        </div>
                        <div>
                            <h3>고객센터</h3>
                            <p>영업시간 이외에는 문의게시판을 이용해주시면
                                담당자 확인 후 빠른 답변 도와드리겠습니다.
                            </p>
                            <p id='tel'>
                                02-2354-45468
                            </p>
                        </div>
                        <div>
                            <h3>공지사항</h3>
                            <ul>
                                <li>조명가이드<span>2022-06-20</span></li>
                                <li>신상품 입고안내<span>2022-06-20</span></li>
                                <li>몰 오픈을 축하합니다.<span>2022-06-20</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id='footer-copy'>
                    <div className='inner'>
                        <ul>
                            <li>홈</li>
                            <li>그린매장안내</li>
                            <li>이용약관</li>
                            <li>개인정보처리방침</li>
                        </ul>
                    </div>
                    <div id='copyright'>
                        <div className='inner'>
                        (주)그렙 / 공동대표 이확영, 임성수 / 서울특별시 서초구 강남대로 327, 2층 프로그래머스(서초동, 대륭서초타워)
                        / 사업자등록번호 220-88-75699 / 통신판매업신고 제 2014-서울강남-03241호 / 
                        직업정보제공사업 신고번호 J1200020180027 / 유료직업소개사업 등록번호 (국내)제2021-3210195-14-5-00026호 
                        (국외)서울청 유 제2021-7호
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default footer;