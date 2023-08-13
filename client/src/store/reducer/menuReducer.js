import { MENU_SUCCESS, MENU_LOADING, MENU_DETAIL } from "../action/actionType"

const initialState = {
    menus: [],
    item: {},
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
        case MENU_DETAIL:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}

export default menuReducer