import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import { TableFactory } from "../../../shared/ui/TableFactory";
import { categories } from "../../../shared/config/data";
import {$categories} from "../../../shared/store/category";
import { useUnit } from 'effector-react';
import {getCategoryFx} from "../../../api/category"
import React from "react";

export const CategoryPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {


  const [categories] = useUnit([$categories]);

  const getCategories = async () => {
    await getCategoryFx();
  }
  React.useEffect(() => {

    getCategories()
  }, []);
  return (
    <div className="categoryPage">
      <NavigationBar />
      <h1>Категории</h1>
      {categories.length>0 ? (<TableFactory entityInfo = {categories} entityType = "category" />) :
      <h1>Нет категорий</h1> }
      
    </div> 
  );
}
