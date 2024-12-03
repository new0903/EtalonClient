import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";
import axios from "axios";

export const RegisterUserPage = () => {
 // const [user,userToken]=useUnit([$user,$userToken]);
 const [email, setEmail] = React.useState(null);
 const [login, setLogin] = React.useState(null);
 const [password, setPassword] = React.useState(null);
 const [passwordConfirm, setConfPassword] = React.useState(null);

  const RegisterUserForm = async () => {

    if (password !== passwordConfirm) {
  
      return;
    }

    try {
      const resRegistration=await axios.post("http://localhost:4000/api/auth/reg/",
        {
          email:email,
          login:login,
          password: password
        }
      )
      console.log(resRegistration);
      const resLogin=await axios.post("http://localhost:4000/api/auth/login",
        {
          email:email,
          login:login,
          password: password
        }
      )
  
      console.log(resLogin);
      console.log(resLogin.data);
      localStorage.setItem('userToken', resLogin.data.acessToken );
      localStorage.setItem('userEmail', email );
      localStorage.setItem('userLogin', login );
    } catch (e) {
      console.error(e);
    }
    
  };

  return (
    <div className="registrationPage">
      <form className="registrationPage__form">
        <h1 className="registrationPage__form__title">Регистрация пользователя</h1>
        <label className="registrationPage__form__label" for="product-name">Почта:</label>
        <input className="registrationPage__form__input" placeholder="Email" type="text" name="email" required onChange={(e)=>setEmail(e.target.value)} />
        <label className="registrationPage__form__label" for="product-description">Логин:</label>
        <input className="registrationPage__form__input" placeholder="Логин" type="text" name="login" required onChange={(e)=>setLogin(e.target.value)} />
        <label className="registrationPage__form__label" for="product-price">Пароль:</label>
        <input className="registrationPage__form__input" placeholder="Пароль" type="password" name="password" required onChange={(e)=>setPassword(e.target.value)} />
        <label className="registrationPage__form__label" for="product-price">Подтвердите пароль:</label>
        <input className="registrationPage__form__input" placeholder="Подтвердите пароль" type="password" name="confirmPassword" required onChange={(e)=>setConfPassword(e.target.value)} />
        <button className="registrationPage__form__subBtn" type="button" onClick={()=>{RegisterUserForm()}}>Зарегистрироваться</button>
      </form>
    </div>
  );
};
