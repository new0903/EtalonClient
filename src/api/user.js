import { createEffect } from "effector";
import {api} from './axiosInstance'

export const createUserFx = createEffect(async (formDataUser) => {


    const { data } = await api.post('user/create', formDataUser)
    return data;
});

export const getUserFx = createEffect( async () => {
    const {data} = await api.get('user/users/');
    console.log(data)
    return data;
});



export const deleteUserFx = createEffect( async (id) => {
    const { data } = await api.delete('user/delete/' + id);
    console.log(id)
    console.log(data)
    return data;
});

export const getOneUser = async ( userId) => {
    const {data}  = await api.get('user/users?login=' + userId);
    return data;
}

export const putOneUser = createEffect( async (formDataUser) => {
    const { data } = await api.put('user/update', formDataUser);
    return data;
});