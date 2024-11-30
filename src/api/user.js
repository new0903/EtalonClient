import { createEffect } from "effector";
import {api} from './axiosInstance'

export const createUserFx = createEffect(async (formDataUser) => {


    const { data } = await api.post('user/create', formDataUser)
    return data;
});

export const getUserFx = createEffect( async () => {
    const {data} = await api.get('user/');
    console.log(data)
    return data;
});



export const deleteUserFx = createEffect( async (id) => {
    const { data } = await api.get('user/delete' + id);
    return data;
});

export const getOneUser = async ( userId) => {
    const {data}  = await api.get('user/' + userId);
    return data;
}

export const putOneUser = createEffect( async (formDataUser) => {
    const { data } = await api.post('user/update', formDataUser);
    return data;
});