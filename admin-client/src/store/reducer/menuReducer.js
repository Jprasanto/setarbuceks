import { MENU_SUCCESS, MENU_LOADING } from "../action/actionType"

const initialState = {
    menus: [],
    menuLoading: false
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_SUCCESS:
            return {
                ...state,
                menus: action.payload
            }
        case MENU_LOADING:
            return {
                ...state,
                menuLoading: action.payload
            }
        default:
            return state
    }
}

export default menuReducer