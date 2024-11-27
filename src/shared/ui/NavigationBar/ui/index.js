export const NavigationBar = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className={"navigationBar " + extraClasses.join(" ")}>
      <img className="navigationBar__logo" src="" alt="Лого" />
      <ul className="navigationBar__menuList">
        <li className="navigationBar__menuList__item">Категории</li>
        <li className="navigationBar__menuList__item">Продукты</li>
        <li className="navigationBar__menuList__item">Пользователи</li>
        <li className="navigationBar__menuList__item">Авторизация</li>
      </ul>
    </div>
  );
};
