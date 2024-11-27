import { NavigationBar } from "../../../shared/ui/NavigationBar/index";

export const AuthorizationPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className="authorizationPage">
      <NavigationBar />
      <h1>Авторизация</h1>
    </div> 
  );
}
