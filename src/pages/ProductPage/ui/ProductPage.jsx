import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import { categories, products as productsTest } from "../../../shared/config/data.js";
import { TableFactory } from "../../../shared/ui/TableFactory/index.js";
import {$products} from "../../../shared/store/product.js";
import { useUnit } from 'effector-react';
import {getProductFx,deleteProductFx} from "../../../api/product.js"
import React from "react";

export const ProductPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  const [products] = useUnit([$products]);

  const deleteProduct = async (id) => {
    await deleteProductFx(id);
  }
  const getCategories = async () => {
    await getProductFx();
  }
  React.useEffect(() => {

    getCategories()
  }, []);

  return (
    <div className="productPage">
      <NavigationBar />
      <div className="productPage__subheader">
        <h1>Продукты</h1>
        <a className="productPage__createProductBtn" href="/createProduct">Добавить продукт</a>
      </div>
      <hr/>
      {products.length>0 ? (<TableFactory entityInfo = {products} entityDeleteMethod={deleteProduct} entityType = "product" />) :
      <h1>Нет продуктов</h1> }
    </div> 
  );
}
