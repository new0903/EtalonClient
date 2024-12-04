import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";
import { useNavigate } from "react-router-dom";
import { createCategoryFx } from "../../../api/category";


export const CreateCategoryPage = () => {
  
  const [nameCategory, setNameCategory] = React.useState("");
  let navigate = useNavigate();

  const SaveCategoryForm = async () => {
    if (nameCategory === "") {
      alert("Необходимо заполнить все поля!")
      return;
    }
    const res=await createCategoryFx({nameCategory:nameCategory})
    return navigate("/category")
  };

  return (
    <div className="createCategoryPage">
      <NavigationBar />

      <form className="createCategoryPage__form" id="login-form">
        <h1 className="createCategoryPage__form__title">Создание категории</h1>
        <label className="createCategoryPage__form__label" for="product-name">Название категории:</label>
        <input className="createCategoryPage__form__input" type="text" name="nameCategory" required onChange={(e)=>setNameCategory(e.target.value)} />
        <button className="createCategoryPage__form__subBtn" type="button" onClick={()=>{SaveCategoryForm()}}>Добавить</button>
      </form>
    </div>
  );
};
