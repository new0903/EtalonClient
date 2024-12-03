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

    if (password!=passwordConfirm) {
  
      return;
    }
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
  };


  return (
    <div className="editCategoryPage">
      <NavigationBar />
      <h1>Регистрация пользователя</h1>

      <div >
        
        <form>
        <label for="product-name">Почта:</label>
            <input type="text" name="email" required onChange={(e)=>setEmail(e.target.value)} />
            <label for="product-description">Логин:</label>
            <input type="text" name="login" required onChange={(e)=>setLogin(e.target.value)} />
            <label for="product-price">Пароль:</label>
            <input type="password" name="password" required onChange={(e)=>setPassword(e.target.value)} />
            <label for="product-price">Подтвердите пароль:</label>
            <input type="password" name="confirmPassword" required onChange={(e)=>setConfPassword(e.target.value)} />
            <button type="button" onClick={()=>{RegisterUserForm()}}>Зарегестрироваться</button>
        </form>
      </div>
    </div>
  );
};
