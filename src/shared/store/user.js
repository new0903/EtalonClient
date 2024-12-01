import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createUserFx,getUserFx} from "../../api/user"

export const $users = createStore([]);
export const $userId = createStore('');

export const filterUsers = createEvent();
export const setUserId = createEvent();

$users.on(createUserFx.doneData, (users, newProduct) => [...users, newProduct]);

$users.on(getUserFx.doneData, (_, users) => users);

$users.on(filterUsers, (users, userId) => users.filter((category) => category.id == userId));

$userId.on(setUserId, (_, userId) => userId);