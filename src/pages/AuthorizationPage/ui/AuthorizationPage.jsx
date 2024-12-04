/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthorizationPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {

 // const [user,userToken]=useUnit([$user,$userToken]);
  const [email, setEmail] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [status, setStatus] = React.useState("");
  let navigate = useNavigate();
  const LoginUserForm = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login",
        {
          email:email,
          login:login,
          password: password
        }
      );

      setStatus(res.status);
  
      console.log(res);
      console.log(res.data);
      //пока так
      localStorage.setItem('userToken', res.data.acessToken );
      localStorage.setItem('userEmail', email );
      localStorage.setItem('userLogin', login );
      return navigate("/product"); 
    } catch(e) {
      console.error("Произошла ошибка при авторизации", e)
      alert("Ошибка авторизации")
    }
    
  };

  return (
    <div className="authorizationPage">
      <form className="authorizationPage__form" id="login-form">
        <h1 className="authorizationPage__form__title">Авторизация</h1>
        <label className="authorizationPage__form__label" for="product-name">Почта</label>
        <input className="authorizationPage__form__input" placeholder="Email" type="email" name="email" required onChange={(e)=>setEmail(e.target.value)} />

        <label className="authorizationPage__form__label" for="product-description">Логин</label>
        <input className="authorizationPage__form__input" placeholder="Логин" type="text" name="login" required  onChange={(e)=>setLogin(e.target.value)}/>

        <label className="authorizationPage__form__label" for="product-price">Пароль</label>
        <input className="authorizationPage__form__input" placeholder="Пароль" type="password" name="password" required  onChange={(e)=>setPassword(e.target.value)}/>

        <div className="authorizationPage__form__controls">
          <button 
            type="button"
            className="authorizationPage__form__controls__subBtn" 
            onClick={()=>{LoginUserForm()}}
          >
            Войти
          </button>
          <a 
            className="authorizationPage__form__controls__subBtn" 
            href="/registration" 
            type="button"
          >
            Зарегистрироваться
          </a>
        </div>
        
      </form>
    </div>
  );
}
