import { Link } from "react-router-dom";

export const NavigationBar = ({ storeService = null, extraClasses = [], extraAttrs = [] } = {}) => {
  
  return (
    <div className={"navigationBar " + extraClasses.join(" ")}>
      <img className="navigationBar__logo" src="" alt="Лого" />
      <ul className="navigationBar__menuList">
        <li 
          className="navigationBar__menuList__item" 
          data-js-panelName="category"
        >
          <Link to="/category">Категории</Link>
        </li>
        <li 
          className="navigationBar__menuList__item" 
          data-js-panelName="product"
        >
          <Link to="/product">Продукты</Link>
        </li>
        <li 
          className="navigationBar__menuList__item"
          data-js-panelName="userList"
        >
          <Link to="/userList">Пользователи</Link>
        </li>
        <li 
          className="navigationBar__menuList__item" 
          data-js-panelName="authorization"
        >
          <Link to="/authorization">Авторизация</Link>
        </li>
      </ul>
    </div>
  );
};
