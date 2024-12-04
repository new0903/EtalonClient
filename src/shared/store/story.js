import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createStoryFx,getStoryFx} from "../../api/story"

export const $story = createStore([]);
export const $storyId = createStore('');

export const filterStory = createEvent();
export const setStoryId = createEvent();

$story.on(createStoryFx.doneData, (story, newStory) => [...story, newStory]);

$story.on(getStoryFx.doneData, (_, story) => story);

$story.on(filterStory, (story, storyId) => story.filter((st) => st.id == storyId));

$storyId.on(setStoryId, (_, storyId) => storyId);