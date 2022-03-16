import { setUsers } from "./actions";
import api from "../../../services/api";

export const getUsersThunk = () => (dispatch) => {
    api.get("/usuarios")
        .then((res) => {
            dispatch(setUsers(res.data));
        })
        .catch((error) => console.log(error));
};

export const postUserThunk = (data) => (dispatch) => {
    console.log(data);
    api.post(`/usuarios`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/usuarios").then((res) => {
                dispatch(setUsers(res.data));
            });
        })
        .catch((error) => console.log(error.message));
};
