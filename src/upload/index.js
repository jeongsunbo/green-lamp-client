import React,{useState} from 'react';
import { Form, Divider, Input, InputNumber, Button, Upload } from 'antd';
import 'antd/dist/antd.css';
import './upload.scss';
const UploadPage = () => {
    // 이미지경로 상태관리 추가
    const [ imageUrl,setImageUrl ] = useState(null);
    //imageUrl 이미지경로 받아옴
    // 이미지 처리함수
    const onChangeImage = (info)=> {
        // 파일이 업로드 중일때
        if(info.file.status === 'uploading'){
            return;
        }
        // 파일 업로드 완료되었을때
        if(info.file.status === 'done'){
            const response = info.file.response;
            const imageUrl = response.imageUrl;
            // 받은 이미지경로를 imageUrl에 넣어줌
            setImageUrl(imageUrl);
        }
    }
    return (
        <div id='upload-container' className='inner'>
            
            <Form name='productUpload'>
                <Form.Item name='imgUpload'
                    label={<div className='upload-label'>상품사진</div>}
                >
                <Upload name='image' action="http://localhost:3000/image"
                    listType='picture' showUploadList={false} onChange={onChangeImage}>
                    {/* 업로드 이미지가 있으면 이미지를 나타내고 업로드 이미지가 없으면 회색배경에 업로드 아이콘이 나타나도록 */}
                    {imageUrl ? <img src={imageUrl}
                    alt="" width= "200px" height= "200px"/> :
                        (<div id='upload-img-placeholder'>
                            <img src='images/icons/camera.png' alt=''/>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>)
                    }       
                </Upload>
                </Form.Item>
                <Divider />
                <Form.Item name="seller"
                label={<div className='upload-label'>판매자명</div>}>
                    <Input className='nameUpload' size='large'
                    placeholder='판매자이름을 입력하세요' />
                </Form.Item>
                <Divider/>
                <Form.Item name="name" 
                label={<div className='upload-label'>상품이름</div>}>
                    <Input
                        className='upload-name'
                        size='large'
                        placeholder='상품이름을 입력해주세요'
                    />
                </Form.Item>
                <Divider/>
                <Form.Item name="price"
                label={<div className='upload-label'>상품가격</div>}>
                    <InputNumber defaultValue={0} size='large'/>
                </Form.Item>
                <Divider/>
                <Form.Item name="description"
                label={<div className='upload-label'>상품소개</div>}>
                    <Input.TextArea
                        size='large'
                        id='product-description'
                        maxLength={300}
                        placeholder='상품 소개를 적어주세요'
                    />
                </Form.Item>
                <Form.Item>
                    <Button id='submit' size='large' htmlType='submit'>
                        상품 등록하기
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default UploadPage;