import './App.css';
import MainPage from './main';
import Header from './include/Header';
import Footer from './include/Footer';
import ProductPage from './product';
import { Routes, Route } from 'react-router-dom'; 
import UploadPage from './upload';

function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="product" element={<ProductPage/>}/>
            <Route path="upload" element={<UploadPage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
