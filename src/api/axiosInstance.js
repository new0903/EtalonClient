import axios from "axios"

import React from "react";
// import {$user,$userToken} from "../shared/store/authorize";
// import { useUnit } from 'effector-react';

//  const GetUser=()=>{

//     const [user]=useUnit([$user]);
//     return user
// }
//  const GetToken=()=>{

//     const [userToken]=useUnit([$userToken]);
//     return userToken
// }
//в идеале все это в локальное хранилище localStorage или ReactSession
// var token="Bearer dlT-";//wBYk7eoFGpGue9VDlv4IjOMEKqXwI2tmtVlF
// var userLocal= {
//     id: "53a81ea9-f1d4-4ce9-b724-6effd596257c",
//     email: "test3@test.com",
//     issueNumber: 1,
//   };

export const api = axios.create({
    baseURL: 'http://localhost:4000/api/',
    headers: {
        Authorization: localStorage.getItem('userToken'),
        email: localStorage.getItem('userEmail'),
        login: localStorage.getItem('userLogin'),
    }
});
