import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createCategoryFx,getCategoryFx} from "../../api/category"

export const $categories = createStore([]);
export const $categoryId = createStore('');

export const filterCategories = createEvent();
export const setCategoryId = createEvent();

$categories.on(createCategoryFx.doneData, (categories, newCategory) => [...categories, newCategory]);

$categories.on(getCategoryFx.doneData, (_, categories) => categories);

$categories.on(filterCategories, (categories, categoryId) => categories.filter((category) => category.id == categoryId));

$categoryId.on(setCategoryId, (_, categoryId) => categoryId);