import { createEffect } from "effector";
import { api } from "./axiosInstance";

export const createCategoryFx = createEffect(async (formDataCategory) => {


    const { data } = await api.post('category/create', formDataCategory)
    return data;
});

export const getCategoryFx = createEffect( async () => {
    const {data} = await api.get('category/get/');
    console.log(data)
    return data;
});



export const deleteCategoryFx = createEffect( async (id) => {
    const { data } = await api.get('category/delete' + id);
    return data;
});

export const getOneCategory= async ( categoryId) => {
    const {data}  = await api.get('category/' + categoryId);
    return data;
}

export const putOneCategory = createEffect( async (formDataCategory) => {
    const { data } = await api.post('category/update', formDataCategory);
    return data;
});