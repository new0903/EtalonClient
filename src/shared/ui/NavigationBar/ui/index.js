import { Link } from "react-router-dom";
import { StoreService } from "../../../lib/services/storeService";

export const NavigationBar = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className={"navigationBar " + extraClasses.join(" ")}>
      <a className="navigationBar__logo" href="/">
        <img className="navigationBar__logo__link" src="" alt="Лого" />
      </a>
      <ul className="navigationBar__menuList">
        <li 
          className="navigationBar__menuList__item" 
          data-js-panelName="category"
        >
          <a className="navigationBar__menuList__item__link" href="/category">Категории</a>
        </li>
        <li 
          className="navigationBar__menuList__item" 
          data-js-panelName="product"
        >
          <a className="navigationBar__menuList__item__link" href="/product">Продукты</a>
        </li>
        <li 
          className="navigationBar__menuList__item"
          data-js-panelName="userList"
        >
          <a className="navigationBar__menuList__item__link" href="/userList">Пользователи</a>
        </li>
        <li 
          className="navigationBar__menuList__item" 
          data-js-panelName="authorization"
        >
          <a className="navigationBar__menuList__item__link" href="/authorization">Авторизация</a>
        </li>
      </ul>
    </div>
  );
};
