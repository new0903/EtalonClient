import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createUserFx,getUserFx} from "../../api/user"

export const $users = createStore([]);
export const $userId = createStore('');

export const filterUsers = createEvent();
export const setUserId = createEvent();

$books.on(createUserFx.doneData, (users, newProduct) => [...users, newProduct]);

$books.on(getUserFx.doneData, (_, users) => users);

$books.on(filterUsers, (users, userId) => users.filter((category) => category.id == userId));

$bookId.on(setUserId, (_, userId) => userId);