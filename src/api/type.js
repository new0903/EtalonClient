import { createEffect } from "effector";
import axios from "axios"
import { api } from "./axiosInstance";


export const createTypeFx = createEffect(async (formDataType) => {

    const { data } = await api.post('typesocks/create', formDataType)
    return data;
});

export const getTypeFx = createEffect(async () => {
    const { data } = await api.get('typesocks/typesocks/');
    console.log(data)
    return data;
});



export const deleteTypeFx = createEffect(async (id) => {
    const { data } = await api.delete('typesocks/delete/' + id);
    console.log(id)
    console.log(data)
    return data;
});

export const getOneType = async (typeId) => {
    const { data } = await api.get('typesocks/typesocks?Id=' + typeId);
    return data;
}

export const putOneType = createEffect(async (formDataType) => {
    const { data } = await api.put('typesocks/update', formDataType);
    return data;
});

//require("./client/EtalonMain/clientMain.js")