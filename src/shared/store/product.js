import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createProductFx,getProductFx} from "../../api/product"

export const $products = createStore([]);
export const $productId = createStore('');

export const filterProducts = createEvent();
export const setProductId = createEvent();

$books.on(createProductFx.doneData, (products, newProduct) => [...products, newProduct]);

$books.on(getProductFx.doneData, (_, products) => products);

$books.on(filterProducts, (products, productId) => products.filter((product) => product.id == productId));

$bookId.on(setProductId, (_, productId) => productId);