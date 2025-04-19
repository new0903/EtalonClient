import { createEvent, createStore } from "effector";
import {api} from "../../api/axiosInstance"
import {createTypeFx,getTypeFx} from "../../api/type"

export const $types = createStore([]);
export const $typeId = createStore('');

export const filterTypes = createEvent();
export const setTypeId = createEvent();

$types.on(createTypeFx.doneData, (types, newType) => [...types, newType]);

$types.on(getTypeFx.doneData, (_, types) => types);

$types.on(filterTypes, (types, typeId) => types.filter((type) => type.id == typeId));

$typeId.on(setTypeId, (_, typeId) => typeId);