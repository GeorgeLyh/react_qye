// redux-persist 插件 可以用来 解决数据持久化的问题
// import {persistStore, persistReducer} from 'redux-persist';
import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";

const todoApp = combineReducers({
  reducer1,
  reducer2
});

export default todoApp;
