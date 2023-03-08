
import { getValue } from "@mui/system";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import {Link,Routes,Route,useNavigate, useLocation} from 'react-router-dom'
import LoginPage from "../../Pages/Login_page/login";
import "./SignUp.css";

function SignUp() {
  const navigate=useNavigate()
  const [err,setErr]=useState("")
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    fetch(' http://localhost:5000/api/v1/user',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({name:data.name,email:data.email,password:data.password})
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.status=="success") {
        navigate("/login")
      }else{
        setErr("Email đã tồn tại")
      }
    })
  }; // your form submit function which will invoke after successful validation
  const password= useRef()
  password.current=watch("password","")
  console.log(watch("password"));
  console.log(watch("re")); // you can watch individual input by pass the name of the input
  console.log(errors.re);
  return (
    <div className="form-signUp">
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Tên</label>
      <input
        {...register("name", {
          required: true,
        })}
      name="name"/>
      {errors?.name?.type === "required" && <p>Tên không được để trống và chỉ dùng tên tiếng Anh</p>}
      {/* {errors?.email?.type === "pattern" && (
        <p>Email không hợp lệ</p>
      )} */}
       <label>Họ</label>
      <input
        {...register("Ho", {
          required: true,
        })}
      name="Ho"/>
      {errors?.name?.type === "required" && <p>Họ không được để trống và chỉ dùng tên tiếng Anh</p>}
      {/* {errors?.email?.type === "pattern" && (
        <p>Email không hợp lệ</p>
      )} */}
      <label>Email</label>
      <input
       {...register("email", {
          required: true,
          pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      name="email"/>
      {errors?.email?.type === "required" && <p>This field is required</p>}
      {errors?.email?.type === "pattern" && (
        <p>Email không hợp lệ</p>
      )}
      {err.length>0?<p>{err}</p>:""}
      <label>Password</label>
      <input name="password "{...register("password", { minLength:8, required:true })} type="password" />
      {errors?.password?.type === "minLength" && (
        <p>Mật khẩu tối thiểu 8 ký tự</p>
      )}
       {errors?.password?.type === "required" && (
        <p>This field is required</p>
      )}
     <label> Re-Password</label>
      <input {...register("re"
        ,{
    
            validate:value=> value===watch("password","")
        })} 
       type="password"/>
       {errors.re  && (
        <p>Mật khẩu nhập lại không trùng</p>
      )}
      <input type="submit" value={"SignUp"} />
      <div className="form-signUp-footer">
        <p>Đã có tài khoản? <Link to="/login">Login</Link></p>
        
    </div>
    </form>
   
    </div>
  );
  
}

const App=()=>{
    return(
        <div className="signUp-form-container">
            <SignUp/>
            <div className="signup-form-rightbar">
              <div className="signup-form-rightbar-img">
                  <img src="./images/signupcage.svg" alt="" />
              </div>
              <div className="signup-form-right-bar-footer">
                <p>Sign in to to unlock more benefits!</p>
                <span><i class="fa-sharp fa-solid fa-circle-check"></i>&nbsp; Best Price Guarantee on bookings</span><br/>
                <span><i class="fa-sharp fa-solid fa-circle-check"></i>&nbsp; Access our best Insider and VIP deals</span><br/>
                <span><i class="fa-sharp fa-solid fa-circle-check"></i>&nbsp; Earn AgodaCash to save even more</span><br/>
                <span><i class="fa-sharp fa-solid fa-circle-check"></i>&nbsp; Collect bookings towards your next VIP status</span>
              </div>
            </div>
        </div>
    )
}
export default App;