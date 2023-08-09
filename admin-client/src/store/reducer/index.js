import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    category: categoryReducer,
    user: userReducer,
});

export default rootReducer;
