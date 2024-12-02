import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";
import axios from "axios";
//import {$user,$userToken,setToken,setUserEmail,setUserLogin} from "../../../shared/store/authorize";
//import { useUnit } from 'effector-react';

export const AuthorizationPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {

 // const [user,userToken]=useUnit([$user,$userToken]);
  const [email, setEmail] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [password, setPassword] = React.useState(null);


  

  const LoginUserForm = async () => {


    const res=await axios.post("http://localhost:4000/api/auth/login",
      {
        email:email,
        login:login,
        password: password
      }
    )

    console.log(res);
    console.log(res.data);
    //пока так
     localStorage.setItem('userToken', res.data.acessToken );
     localStorage.setItem('userEmail', email );
     localStorage.setItem('userLogin', login );
  };


  return (
    <div className="authorizationPage">
      <NavigationBar />
      <h1>Авторизация</h1>
      <div >
        <form id="login-form">
          <label for="product-name">Название товара:</label>
          <input type="text" name="email" required onChange={(e)=>setEmail(e.target.value)} />

          <label for="product-description">Описание:</label>
          <input type="text" name="login" required  onChange={(e)=>setLogin(e.target.value)}/>

          <label for="product-price">Цена (руб):</label>
          <input type="text" name="password" required  onChange={(e)=>setPassword(e.target.value)}/>

          <button type="button" onClick={()=>{LoginUserForm()}}>Войти</button>
        </form>
      </div>
    </div>
  );
}
