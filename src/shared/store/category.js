import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createCategoryFx,getCategoryFx} from "../../api/category"

export const $categories = createStore([]);
export const $categoryId = createStore('');

export const filterCategories = createEvent();
export const setCategoryId = createEvent();

$books.on(createCategoryFx.doneData, (categories, newCategory) => [...categories, newCategory]);

$books.on(getCategoryFx.doneData, (_, categories) => categories);

$books.on(filterCategories, (categories, categoryId) => categories.filter((category) => category.id == categoryId));

$bookId.on(setCategoryId, (_, categoryId) => categoryId);