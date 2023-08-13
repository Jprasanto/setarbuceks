import { useDispatch } from "react-redux";
import { API_URL } from "../../config/api";
import {
  CATEGORY_SUCCESS,
  CATEGORY_LOADING,
  MENU_LOADING,
  MENU_SUCCESS,
  USERS_SUCCESS,
  USERS_LOADING,
  CATEGORY_EDITPAGE,
  MENU_DETAIL,
} from "./actionType";
import { toast } from 'react-toastify';

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
export const fetchEditCategorySuccess = (payload) => {
  return {
    type: CATEGORY_EDITPAGE,
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
      const response = await fetch(API_URL + "/items", {
        method: "get",
        headers: {
          access_token: localStorage.getItem("access_token")
        }
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
//add menu
export function addMenu(payload) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      await fetch("http://localhost:3000/items", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
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
      const response = await fetch(API_URL + "/categories", {
        method: 'get',
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      });
      const responseJSON = await response.json();
      dispatch(fetchCategorySuccess(responseJSON.categories));
      dispatch(fetchCategoryLoading(false));
    } catch (error) {
      throw error;
    } finally {
    }
  };
}
// add category
export function addCategory(payload) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchCategoryLoading(true));
      const state = getState();
      await fetch("http://localhost:3000/categories/add", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      throw error;
    } finally {
      dispatch(fetchCategoryLoading(false));
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
        headers: { access_token: localStorage.getItem("access_token") }
      });
      dispatch(fetchMenu())
      toast.success(`menu id ${id} has been deleted`)
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
      await fetch("http://localhost:3000/adm-register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token")
        },
        body: JSON.stringify(payload),
      });
      toast.success(`New Admin has been created`)
    } catch (error) {
      throw error;
      toast.error(error.message)
    }
  };
}
//delete category
export function deleteCategory(id) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      await fetch(`http://localhost:3000/categories/${id}`, {
        method: "delete",
        headers: { access_token: localStorage.getItem("access_token") }
      });
      dispatch(fetchCategory())
      toast.success(`category id ${id} has been deleted`)
    } catch (error) {
      throw error;
    }
  };
}
//edit menu masih fail
export function editMenu(id, product) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchMenuLoading(true));
      const response = await fetch(API_URL + `/items/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(product),
      });
      const responseJSON = await response.json();
      dispatch(fetchMenuSuccess(responseJSON));
    } catch (error) {
      throw error;
    } finally {
      dispatch(fetchMenuLoading(false));
    }
  };
}
//edit category
export function editCategory(id, category) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchMenuLoading(true));
      const response = await fetch(API_URL + `/categories/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(category),
      });
      dispatch(fetchCategory())
    } catch (error) {
      console.log(error)
      throw error;
    } finally {
      dispatch(fetchMenuLoading(false));
    }
  };
}
// login
export function login(payload) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(API_URL + '/login', {
        method: 'post',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const responseJSON = await response.json()
      localStorage.setItem("access_token", responseJSON.access_token)
    } catch (err) {
      throw err
    }
  }
}
// get product detail
export function getDetailMenu(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchMenuLoading(true));
      const response = await fetch(API_URL + `/items/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
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
      const response = await fetch(API_URL + `/categories/${id}`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
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
