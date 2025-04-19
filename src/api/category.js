import { createEffect } from "effector";
import axios from "axios"
import { api } from "./axiosInstance";


export const createCategoryFx = createEffect(async (formDataCategory) => {

    const { data } = await api.post('category/create', formDataCategory)
    return data;
});

export const getCategoryFx = createEffect(async () => {
    const { data } = await api.get('category/categories/');
    console.log(data)
    return data;
});



export const deleteCategoryFx = createEffect(async (id) => {
    const { data } = await api.delete('category/delete/' + id);
    console.log(id)
    console.log(data)
    return data;
});

export const getOneCategory = async (categoryId) => {
    const { data } = await api.get('category/categories?Id=' + categoryId);
    return data;
}

export const putOneCategory = createEffect(async (formDataCategory) => {
    const { data } = await api.put('category/update', formDataCategory);
    return data;
});

//require("./client/EtalonMain/clientMain.js")