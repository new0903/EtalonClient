import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createProductFx,getProductFx} from "../../api/product"

export const $products = createStore([]);
export const $productId = createStore('');

export const filterProducts = createEvent();
export const setProductId = createEvent();

$products.on(createProductFx.doneData, (products, newProduct) => [...products, newProduct]);

$products.on(getProductFx.doneData, (_, products) => products);

$products.on(filterProducts, (products, productId) => products.filter((product) => product.id == productId));

$productId.on(setProductId, (_, productId) => productId);