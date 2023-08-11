import { USERS_SUCCESS, USERS_LOADING } from "../action/actionType";

const initialState = {
    users: [],
    usersLoading: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            };
        case USERS_LOADING:
            return {
                ...state,
                usersLoading: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
