import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import { categories, products } from "../../../shared/config/data.js";
import { TableFactory } from "../../../shared/ui/TableFactory/index.js";

export const ProductPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className="productPage">
      <NavigationBar />
      <h1>Продукты</h1>
      <hr/>
      <TableFactory entityInfo = {products} entityType = "product" />
      
    </div> 
  );
}
