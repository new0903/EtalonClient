import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";
import { $categories } from "../../../shared/store/category";
import { useUnit } from 'effector-react';
import { getCategoryFx } from "../../../api/category";
import { useNavigate } from "react-router-dom";

import { createProductFx } from "../../../api/product";

export const CreateProductPage = () => {

  const [title, setTitle] = React.useState(null);
  const [article, setArticle] = React.useState(null);
  const [priceDef, setPriceDef] = React.useState(null);
  const [priceNDS, setPriceNDS] = React.useState(null);
  const [inStock, setInStock] = React.useState(null);
  const [maxSize, setMaxSize] = React.useState(null);
  const [minSize, setMinSize] = React.useState(null);
  const [properties, setProperties] = React.useState(null);
  const [CategoryId, setCategoryId] = React.useState(null);
  const [files, setFiles] = React.useState(null);
  let navigate = useNavigate();


  const [categories] = useUnit([$categories]);


  const SaveProductForm = async () => {
    try {
      var formData = new FormData();
      formData.append('title', title)
      formData.append('article', article)
      formData.append('priceDef', priceDef)
      formData.append('priceNDS', priceNDS)
      formData.append('inStock', inStock)
      formData.append('maxSize', maxSize)
      formData.append('minSize', minSize)
      formData.append('properties', properties)
      formData.append('categoryId', CategoryId)
      formData.append('files', files)

      var allFieldsValid = true;
      formData.forEach((value, key) => {
        if (value === null || value === '') {
          console.debug("!!!")
          allFieldsValid = false;
        }
      });

      if (allFieldsValid) {
        const res = await createProductFx(formData)
        return navigate("/product");
      }

      else {
        alert("Необходимо заполнить все поля!");
      }
    } catch (e) {
      console.error("Ошибка при добавлении нового продукта!")
    }
  };


  const getCategories = async () => {
    await getCategoryFx();
  }
  React.useEffect(() => {

    getCategories()
  }, []);
  return (
    <div className="createProductPage">
      <NavigationBar />

      <form className="createProductPage__form" id="login-form">
        <h1 className="createProductPage__form__title">Создание продукта</h1>
        <label className="createProductPage__form__label" for="product-title">Описание:</label>
        <input className="createProductPage__form__input" type="text" name="title" required onChange={(e) => setTitle(e.target.value)} />

        <label className="createProductPage__form__label" for="product-article">Артикл:</label>
        <input className="createProductPage__form__input" type="text" name="article" required onChange={(e) => setArticle(e.target.value)} />
        <label className="createProductPage__form__label" for="product-priceDef">Цена без НДС:</label>
        <input className="createProductPage__form__input" type="number" name="priceDef" required onChange={(e) => setPriceDef(e.target.value)} />
        <label className="createProductPage__form__label" for="product-priceNDS">Цена с НДС:</label>
        <input className="createProductPage__form__input" type="number" name="priceNDS" required onChange={(e) => setPriceNDS(e.target.value)} />
        <label className="createProductPage__form__label" for="product-inStock">количество на складе:</label>
        <input className="createProductPage__form__input" type="number" name="inStock" required onChange={(e) => setInStock(e.target.value)} />
        <label className="createProductPage__form__label" for="product-maxSize">макисмальный размер:</label>
        <input className="createProductPage__form__input" type="number" name="maxSize" required onChange={(e) => setMaxSize(e.target.value)} />
        <label className="createProductPage__form__label" for="product-minSize">минимальный размер:</label>
        <input className="createProductPage__form__input" type="number" name="minSize" required onChange={(e) => setMinSize(e.target.value)} />

        <label className="createProductPage__form__label" for="product-properties">Состав:</label>
        <input className="createProductPage__form__input" type="text" name="properties" required onChange={(e) => setProperties(e.target.value)} />

        <label className="createProductPage__form__label" for="product-category">Категория:</label>
        <select id="product-category" name="product-category" required onChange={(e) => setCategoryId(e.target.value)}>

        <option value="">Выберете категорию</option>
          {categories.map((el) => (
            <option value={el.name}>{el.name}</option>))}
        </select>

        <input className="createProductPage__form__input" type="file" name="files" onChange={(e) => {
          let image_as_files = e.target.files[0];

          // let image_as_base64 = URL.createObjectURL(e.target.files)
          setFiles(image_as_files)
          //  setCounterFiles(image_as_files.length)
          console.log(image_as_files)
          
          }} />
        <button className="createProductPage__form__subBtn" type="button" onClick={() => { SaveProductForm() }}>Добавить</button>
      </form>
    </div>
  );
};
