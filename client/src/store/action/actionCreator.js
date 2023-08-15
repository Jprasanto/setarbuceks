import { API_URL } from "../../config/api";

import {
    CATEGORY_SUCCESS,
    CATEGORY_LOADING,
    MENU_LOADING,
    MENU_SUCCESS,
    MENU_DETAIL,
} from "./actionType";

export const fetchMenuSuccess = (payload) => {
    return {
        type: MENU_SUCCESS,
        payload,
    };
};
export const fetchItem = (payload) => {
    return {
        type: MENU_DETAIL,
        payload,
    };
};
export const fetchMenuLoading = (payload) => {
    return {
        type: MENU_LOADING,
        payload,
    };
};
export const fetchCategorySuccess = (payload) => {
    return {
        type: CATEGORY_SUCCESS,
        payload,
    };
};
export const fetchCategoryLoading = (payload) => {
    return {
        type: CATEGORY_LOADING,
        payload,
    };
};

export function fetchMenu() {
    // The `extraArgument` is the third arg for thunk functions
    return async (dispatch, getState) => {
        // you can use api here
        try {
            dispatch(fetchMenuLoading(true));
            const response = await fetch(API_URL + "/menu", {
                method: "get",
            });
            const responseJSON = await response.json();
            dispatch(fetchMenuSuccess(responseJSON.message));
        } catch (error) {
            throw error;
        } finally {
            dispatch(fetchMenuLoading(false));
        }
    };
}

export function getDetailMenu(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchMenuLoading(true));
            const response = await fetch(API_URL + `/menu/${id}`, {
                method: "get",
            });
            const responseJSON = await response.json();
            dispatch(fetchItem(responseJSON.message));
        } catch (error) {
            throw error;
        } finally {
            dispatch(fetchMenuLoading(false));
        }
    };
}

export function getDetailCategory(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(fetchCategoryLoading(true));
            const response = await fetch(API_URL + `/pub/category/${id}`, {
                method: "get",
            });
            const responseJSON = await response.json();
            // console.log(responseJSON, "<<<")
            dispatch(fetchEditCategorySuccess(responseJSON));
        } catch (error) {
            throw error;
        } finally {
            dispatch(fetchCategoryLoading(false));
        }
    };
}