import { createStore, combineReducers } from "redux";
import dialogsReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
    dialogsReducer,
    profileReducer,
    sidebarReducer
});

let store = createStore(reducers);

export default store;