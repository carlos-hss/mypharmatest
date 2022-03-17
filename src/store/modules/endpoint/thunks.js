import { setEndpoints } from "./actions";

export const setProductsEndpointThunk = (data) => (dispatch, getState) => {
    const { endpoints } = getState();

    const newEndpoints = {
        ...endpoints,
        products: data,
    };

    dispatch(setEndpoints(newEndpoints));
};

export const setCategoriesEndpointThunk = (data) => (dispatch, getState) => {
    const { endpoints } = getState();

    const newEndpoints = {
        ...endpoints,
        categories: data,
    };

    dispatch(setEndpoints(newEndpoints));
};

export const setBrandsEndpointThunk = (data) => (dispatch, getState) => {
    const { endpoints } = getState();

    const newEndpoints = {
        ...endpoints,
        brands: data,
    };

    dispatch(setEndpoints(newEndpoints));
};
