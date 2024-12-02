import { NavigationBar } from "../../../shared/ui/NavigationBar/index";

import { TableFactory } from "../../../shared/ui/TableFactory";
import {$users} from "../../../shared/store/user.js";
import { useUnit } from 'effector-react';
import {getUserFx,deleteUserFx} from "../../../api/user.js"
import React from "react";

export const UserListPage = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  
  
  const [users] = useUnit([$users]);

  const deleteUser = async (id) => {
    await deleteUserFx(id);
  }
  const getCategories = async () => {
    await getUserFx();
  }
  React.useEffect(() => {

    getCategories()
  }, []);
  return (
    <div className="userListPage">
      <NavigationBar />
      <h1>Пользователи</h1>  
      {users.length>0 ? (<TableFactory entityInfo = {users} entityDeleteMethod={deleteUser} entityType = "product" />) :
      <h1>Нет продуктов</h1> }
      
    </div> 
  );
}
