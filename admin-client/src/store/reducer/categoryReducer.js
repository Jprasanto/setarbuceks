import { CATEGORY_SUCCESS, CATEGORY_LOADING, CATEGORY_EDITPAGE } from "../action/actionType"

const initialState = {
    category: [],
    editCategory: {},
    categoryLoading: false
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload
            }
        case CATEGORY_LOADING:
            return {
                ...state,
                categoryLoading: action.payload
            }
        case CATEGORY_EDITPAGE:
            return {
                ...state,
                editCategory: action.payload
            }
        default:
            return state
    }
}

export default categoryReducer