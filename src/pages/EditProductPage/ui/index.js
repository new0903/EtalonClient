/**
 * Универсальная страница для редактирования категорий / продуктов / пользователей
 * @returns 
 */
import {useParams} from "react-router-dom";
import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import React from "react";
import { $categories } from "../../../shared/store/category";
import { useUnit } from 'effector-react';
import { getCategoryFx } from "../../../api/category";

import { putOneProduct,getOneProduct } from "../../../api/product";


export const EditProductPage = () => {


  const { id } = useParams();

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



  const [categories] = useUnit([$categories]);



  const SaveProductForm = async () => {

    var formData = new FormData();
    formData.append('id', id)
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

    const res = await putOneProduct(formData)
    console.log(res)
  };



  const getCategories = async () => {
    await getCategoryFx();
  }
  const getProduct = async () => {
    var res=await getOneProduct(id);
    console.log(res)
    setTitle(res.title)
    setArticle(res.article)
    setPriceDef(res.priceDef)
    setPriceNDS(res.priceNDS)
    setInStock(res.inStock)
    setMaxSize(res.max)
    setMinSize(res.min)
    setProperties(res.properties)
    setCategoryId(res.categoryId)




  }
  React.useEffect(() => {

    getProduct()
    getCategories()
  }, []);

  return (
    <div >
      <NavigationBar />
      <h1>Редактирование товара</h1>
      <div >
        <form id="login-form">
          <label for="product-title">Описание:</label>
          <input type="text" value={title} name="title" required onChange={(e) => setTitle(e.target.value)} />

          <label for="product-article">Артикл:</label>
          <input type="text" value={article} name="article" required onChange={(e) => setArticle(e.target.value)} />
          <label for="product-priceDef">Цена без НДС:</label>
          <input type="number" value={priceDef} name="priceDef" required onChange={(e) => setPriceDef(e.target.value)} />
          <label for="product-priceNDS">Цена с НДС:</label>
          <input type="number" value={priceNDS} name="priceNDS" required onChange={(e) => setPriceNDS(e.target.value)} />
          <label for="product-inStock">количество на складе:</label>
          <input type="number" value={inStock} name="inStock" required onChange={(e) => setInStock(e.target.value)} />
          <label for="product-maxSize">макисмальный размер:</label>
          <input type="number" value={maxSize} name="maxSize" required onChange={(e) => setMaxSize(e.target.value)} />
          <label for="product-minSize">минимальный размер:</label>
          <input type="number" value={minSize} name="minSize" required onChange={(e) => setMinSize(e.target.value)} />

          <label for="product-properties">Состав:</label>
          <input type="text" value={properties} name="properties" required onChange={(e) => setProperties(e.target.value)} />

          <label for="product-category">Категория:</label>
          <select id="product-category" name="product-category" required onChange={(e) => setCategoryId(e.target.value)}>
            <option value="">Выберете категорию</option>
            {
            categories.map((el) => el.id == CategoryId ?(<option selected value={el.name}>{el.name}</option>):(<option value={el.name}>{el.name}</option>))
              
            }
          </select>

          <input type="file" name="files" onChange={(e) => {
            let image_as_files = e.target.files[0];

            // let image_as_base64 = URL.createObjectURL(e.target.files)
            setFiles(image_as_files)
            //  setCounterFiles(image_as_files.length)
            console.log(image_as_files)
            
            }} />
          <button type="button" onClick={() => { SaveProductForm() }}>Войти</button>
        </form>
      </div>
    </div>
  );
}