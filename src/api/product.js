import { createEffect } from "effector";
import {api} from './axiosInstance'

export const createProductFx = createEffect(async (formDataProduct) => {


    const { data } = await api.post('product/create', formDataProduct
    )
    return data;
});

export const getProductFx = createEffect( async () => {
    const {data} = await api.get('product/products/');
    console.log(data)
    return data;
});



export const deleteProductFx = createEffect( async (id) => {
    const { data } = await api.delete('product/delete/' + id);
    console.log(id)
    console.log(data)
    return data;
});

export const getOneProduct = async ( productId) => {
    const {data}  = await api.get('product/products?Id=' + productId);
    return data;
}

export const putOneProduct = createEffect( async (formDataProduct) => {
    const { data } = await api.put('product/update', formDataProduct);
    return data;
});