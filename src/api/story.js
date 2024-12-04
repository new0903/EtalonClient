import { createEffect } from "effector";
import {api} from './axiosInstance'

export const createStoryFx = createEffect(async (formDataStory) => {


    const { data } = await api.post('story/create', formDataStory)
    return data;
});

export const getStoryFx = createEffect( async () => {
    const {data} = await api.get('story/users/');
    console.log(data)
    return data;
});



export const deleteStoryFx = createEffect( async (id) => {
    const { data } = await api.delete('story/delete/' + id);
    console.log(id)
    console.log(data)
    return data;
});

export const getOneStory = async ( storyId) => {
    const {data}  = await api.get('story/all?Id=' + storyId);
    return data;
}

export const putOneStory = createEffect( async (formDataStory) => {
    const { data } = await api.put('story/update', formDataStory);
    return data;
});