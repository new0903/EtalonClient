import { NavigationBar } from "../../../shared/ui/NavigationBar/index";
import { TableFactory } from "../../../shared/ui/TableFactory";
import { categories } from "../../../shared/config/data";

export const CategoryPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className="categoryPage">
      <NavigationBar />
      <h1>Категории</h1>
      <TableFactory entityInfo = {categories} />
    </div> 
  );
}
