
// import './App.css';
import Search from './components/search/search';
import Header from './components/header/Header';
import SearchMainBody from './components/searchMain/searchMainBody';
import SearchMainHead from './components/searchMain/searchMainHead';
import CardHotel from './components/card-hotel/CardHotel'
import Footer from './components/footer/Footer'
import Signin from './components/Signin/Signin';
import LoginPage from './Pages/Login_page/login';
import SignUp from './components/SignUp/SignUp'
import SignUpPage from './Pages/SignUp_Page/signUp_page';
import { Route, Routes, useParams } from 'react-router-dom'
import HomePage from './Pages/home_page/HomePage';
import SearchPage from './Pages/SearchPage/SearchPage';
import HotelPage from './Pages/Hotel_Page/HotelPage';
import BookPage from './Pages/BookPage/BookPage';
import Account from './components/account/Account';
import Reviewpage from './Pages/Review_Page/ReviewPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/result' element={<SearchPage/>}/>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/hotel/:idHotel' element={<HotelPage/>}></Route>
        <Route path='/review' element={<Reviewpage/>}></Route>
        <Route path='/bookroom' element={<BookPage/>}></Route>
      </Routes>
      
      {/* <Account/> */}
    </div>

  );
}

export default App;
