import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import postsReducer from "./posts-reducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})