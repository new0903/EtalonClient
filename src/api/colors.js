import { createEffect } from "effector";
import axios from "axios"
import { api } from "./axiosInstance";


export const createColorFx = createEffect(async (formDataColor) => {

    const { data } = await api.post('color/create', formDataColor)
    return data;
});

export const getColorFx = createEffect(async () => {
    const { data } = await api.get('color/colors/');
    console.log(data)
    return data;
});



export const deleteColorFx = createEffect(async (id) => {
    const { data } = await api.delete('color/delete/' + id);
    console.log(id)
    console.log(data)
    return data;
});

export const getOneColor= async (colorId) => {
    const { data } = await api.get('color/colors?Id=' + colorId);
    return data;
}

export const putOneColor = createEffect(async (formDataColor) => {
    const { data } = await api.put('color/update', formDataColor);
    return data;
});

//require("./client/EtalonMain/clientMain.js")