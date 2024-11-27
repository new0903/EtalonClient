import { NavigationBar } from "../../../shared/ui/NavigationBar/index";

export const ProductPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className="productPage">
      <NavigationBar />
      <h1>Продукты</h1>
    </div> 
  );
}
