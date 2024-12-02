import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";

import { createCategoryFx } from "../../../api/category";

export const CreateCategoryPage = () => {
  
  const [nameCategory, setNameCategory] = React.useState("");


  const SaveCategoryForm = async () => {


    const res=await createCategoryFx({nameCategory:nameCategory})
    console.log(res)
  };


  return (
    <div className="editCategoryPage">
      <NavigationBar />
      <h1>Редактирование категории</h1>

      <div >
        <form id="login-form">
          <label for="product-name">Название товара:</label>
          <input type="text" name="nameCategory" required onChange={(e)=>setNameCategory(e.target.value)} />
          <button type="button" onClick={()=>{SaveCategoryForm()}}>Войти</button>
        </form>
      </div>
    </div>
  );
};
