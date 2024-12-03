import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";

import {useParams} from "react-router-dom";
import { putOneCategory,getOneCategory } from "../../../api/category";

export const EditCategoryPage = () => {
  
  const { id } = useParams();
  const [nameCategory, setNameCategory] = React.useState("");


  const SaveCategoryForm = async () => {

    var formData = new FormData();

    formData.append('id', id)
    formData.append('nameCategory', nameCategory)
    const res=await putOneCategory({id:id,nameCategory:nameCategory})
    console.log(res)
  };

  const getCategory = async () => {
    var res=await getOneCategory(id);
    console.log(res)
    setNameCategory(res.name)




  }

  React.useEffect(() => {

    getCategory()
  }, []);

  return (
    <div className="editCategoryPage">
      <NavigationBar />
      <h1>Редактирование категории</h1>

      <div >
        <form id="login-form">
          <label for="product-name">Название категории:</label>
          <input type="text" value={nameCategory} name="nameCategory" required onChange={(e)=>setNameCategory(e.target.value)} />
          <button type="button" onClick={()=>{SaveCategoryForm()}}>Войти</button>
        </form>
      </div>
    </div>
  );
};
