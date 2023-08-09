import { useDispatch } from "react-redux";
import { API_URL } from "../../config/api";
import {
  CATEGORY_SUCCESS,
  CATEGORY_LOADING,
  MENU_LOADING,
  MENU_SUCCESS,
  USERS_SUCCESS,
  USERS_LOADING,
} from "./actionType";
import { func } from "prop-types";

export const fetchUserSuccess = (payload) => {
  return {
    type: USERS_SUCCESS,
    payload,
  };
};

export const fetchUsersLoading = (payload) => {
  return {
    type: USERS_LOADING,
    payload,
  };
};
export const fetchMenuSuccess = (payload) => {
  return {
    type: MENU_SUCCESS,
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

//fetch menu
export function fetchMenu() {
  // The `extraArgument` is the third arg for thunk functions
  return async (dispatch, getState) => {
    // you can use api here
    try {
      dispatch(fetchMenuLoading(true));
      const response = await fetch(API_URL + "/items");
      const responseJSON = await response.json();
      dispatch(fetchMenuSuccess(responseJSON));
    } catch (error) {
      throw error;
    } finally {
      dispatch(fetchMenuLoading(false));
    }
  };
}
//add menu
export function addMenu(payload) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      await fetch("http://localhost:3000/items", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      throw error;
    }
  };
}
// fetch category
export function fetchCategory() {
  // The `extraArgument` is the third arg for thunk functions
  return async (dispatch, getState) => {
    // you can use api here
    try {
      dispatch(fetchCategoryLoading(true));
      const response = await fetch(API_URL + "/Category");
      const responseJSON = await response.json();
      dispatch(fetchCategorySuccess(responseJSON));
    } catch (error) {
      throw error;
    } finally {
      dispatch(fetchCategoryLoading(false));
    }
  };
}
// add category
export function addCategory(payload) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      await fetch("http://localhost:3000/Category", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      throw error;
    }
  };
}
//delete menu
export function deleteMenu(id) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      await fetch(`http://localhost:3000/items/${id}`, {
        method: "delete",
        // headers: { access_token }
      });
      dispatch(fetchMenu())
    } catch (error) {
      throw error;
    }
  };
}
//add Admin
export function addAdmin(payload) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      await fetch("http://localhost:3000/User", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      throw error;
    }
  };
}
//edit menu
export function editMenu(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchMenuLoading(true));
      const response = await fetch(API_URL + `/items${id}`);
      const responseJSON = await response.json();
      dispatch(fetchMenuSuccess(responseJSON));
    } catch (error) {
      throw error;
    } finally {
      dispatch(fetchMenuLoading(false));
    }
  };
}

