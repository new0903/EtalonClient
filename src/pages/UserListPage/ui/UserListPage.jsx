import { NavigationBar } from "../../../shared/ui/NavigationBar/index";

export const UserListPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return (
    <div className="userListPage">
      <NavigationBar />
      <h1>Пользователи</h1>
    </div> 
  );
}
