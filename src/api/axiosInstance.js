import axios from "axios";


//в идеале все это в локальное хранилище localStorage или ReactSession
var token="сюда надо сохрангять токен";
var userLocal= {
    id: "53a81ea9-f1d4-4ce9-b724-6effd596257c",
    email: "test3@test.com",
    issueNumber: 1,
  };
export const api = axios.create({
    baseURL: 'https://localhost:4000/api/',
    headers: {
        Authorization: `Bearer ${token}`,
        user: userLocal
    }
});
