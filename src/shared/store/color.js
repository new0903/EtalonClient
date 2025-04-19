import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createColorFx,getColorFx} from "../../api/colors"

export const $colors = createStore([]);
export const $colorId = createStore('');

export const filterColors = createEvent();
export const setColorId = createEvent();

$colors.on(createColorFx.doneData, (colors, newColor) => [...colors, newColor]);

$colors.on(getColorFx.doneData, (_, colors) => colors);

$colors.on(filterColors, (colors, colorId) => colors.filter((color) => color.id == colorId));

$colorId.on(setColorId, (_, colorId) => colorId);