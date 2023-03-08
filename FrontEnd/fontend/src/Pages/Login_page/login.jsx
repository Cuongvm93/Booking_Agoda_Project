import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SignIn from '../../components/Signin/Signin'
import './loginPage.css'
export default function LoginPage(params) {
    const navigate=useNavigate()
    const sendDatat=()=>{
        navigate('/signup',{state:"http"})
    }
    return(
       <div className="loginPage">
        <Header/>
        <div className="loginPage-body">
            <SignIn/>
        </div>
        <Footer/>
       </div>
    )
}