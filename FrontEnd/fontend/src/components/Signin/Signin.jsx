
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./signin.css";

function Signin(props) {
  const navigate=useNavigate()
  console.log(navigate(-1));
  props.handel("cuongvm")
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const [errpass, seterrPass]=useState("")
  const [erremail,seterrEmail]=useState("")
  const onSubmit = (data) => {
    console.log(data.lastName);
    fetch('http://localhost:5000/api/v1/login',{
      method:'Post',
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({
        email:data.email,
        password:data.lastName
      })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
     if (data.errEmail) {
        seterrEmail("Email không tồn tại")
     }else if(data.errPass){
      seterrPass("Password không đúng")
      seterrEmail("")
     }else if(data.status){
      seterrPass("")
      localStorage.setItem("tokelogin",JSON.stringify(data))
     navigate('/')
     }
    })
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div className="form-login">
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", {
          required: true,
          pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
      />
      {errors?.email?.type === "required" && <p>This field is required</p>}
      {errors?.email?.type === "pattern" && (
        <p>Email không hợp lệ</p>
      )}
      {erremail.length>0?<p>Email không tồn tại</p>:""}
      <label>Password</label>
      <input {...register("lastName", { minLength:8, required:true })} type="password" />
      {errors?.lastName?.type === "minLength" && (
        <p>Mật khẩu tối thiểu 8 ký tự</p>
      )}
       {errors?.lastName?.type === "require" && (
        <p>This field is required</p>
      )}
      {errpass.length>0?<p>{errpass}</p>:""}
      <input type="submit" value={"Signin"} />
    </form>
    <div className="login_with_facebook">
    <div class="fb-login-button" data-width="100px" data-size="" data-button-type="" data-layout="" data-auto-logout-link="false" data-use-continue-as="false"></div>
    </div>
    <div className="form-login-footer">
        <Link to="/signup">Create Account</Link>
        <p>Forgot password</p>
    </div>
    </div>
  );
}

const App=()=>{
  const handelSyncData=(e)=>{
    console.log(e);
  }
    return(
        <div className="signin-form-container">
            <Signin handel={handelSyncData}/>
        </div>
    )
}

export default App;