import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createUserFx,getUserFx} from "../../api/user"

export const $users = createStore([]);
export const $userId = createStore('');

export const filterUsers = createEvent();
export const setUserId = createEvent();

$users.on(createUserFx.doneData, (users, newUser) => [...users, newUser]);

$users.on(getUserFx.doneData, (_, users) => users);

$users.on(filterUsers, (users, userId) => users.filter((user) => user.id == userId));

$userId.on(setUserId, (_, userId) => userId);