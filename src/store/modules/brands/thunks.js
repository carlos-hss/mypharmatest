import { getBrands, postBrands, removeBrands, editBrands } from "./actions";
import api from "../../../services/api";

export const getBrandsThunk = () => (dispatch) => {
    api.get("/marcas")
        .then((res) => {
            dispatch(getBrands(res.data));
        })
        .catch((error) => console.log(error));
};

export const removeBrandsThunk = (id) => (dispatch, getState) => {
    const { listBrands } = getState();

    api.delete(`/marcas/${id}`)
        .then(() => {
            const newState = listBrands.filter((brand) => brand._id !== id);
            dispatch(removeBrands(newState));
        })
        .catch((error) => console.log(error));
};

export const postBrandsThunk = (data) => (dispatch) => {
    console.log(data);
    api.post(`/marcas`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/marcas").then((res) => {
                dispatch(postBrands(res.data));
            });
        })
        .catch((error) => console.log(error));
};

export const editBrandsThunk = (data, id) => (dispatch) => {
    api.patch(`/marcas/${id}`, JSON.stringify(data), {
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(() => {
            api.get("/marcas").then((res) => {
                dispatch(editBrands(res.data));
            });
        })
        .catch((error) => console.log(error));
};
