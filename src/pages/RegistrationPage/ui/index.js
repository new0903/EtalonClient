import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";
import { $categories } from "../../../shared/store/category";
import { useUnit } from 'effector-react';
import { getCategoryFx } from "../../../api/category";

import { createProductFx } from "../../../api/product";

export const RegisterUserPage = () => {

 
  return (
    <div className="editCategoryPage">
      <NavigationBar />
      <h1>Регистрация пользователя</h1>

      <div >
        
        <form method='Post' action='http://localhost:3000/api/auth/reg/' >
            <input type="text" name="email" />
            <input type="text" name="login" />
            <input type="text" name="password" />
            <input type="submit" value="Create" class="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};
