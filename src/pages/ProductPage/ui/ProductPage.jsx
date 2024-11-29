import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import { categories, products } from "../../../shared/ui/TableFactory/config/data.js";
import { TableFactory } from "../../../shared/ui/TableFactory/index.js";

export const ProductPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className="productPage">
      <NavigationBar />
      <h1>Продукты</h1>
      <TableFactory entityInfo = {categories} />
      <hr/>
      <TableFactory entityInfo = {products} />
      
    </div> 
  );
}
