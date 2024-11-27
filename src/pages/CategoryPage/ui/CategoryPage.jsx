import { NavigationBar } from "../../../shared/ui/NavigationBar/index";

export const CategoryPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className="categoryPage">
      <NavigationBar />
      <h1>Категории</h1>
    </div> 
  );
}
