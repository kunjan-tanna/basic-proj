import globalReducer from "./global/global";
import auth from "./auth/";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
   key: "jwt",
   storage,
   whitelist: ["auth"],
};

const rootReducer = combineReducers({
   globalReducer: globalReducer,
   auth: auth,
});
export default persistReducer(persistConfig, rootReducer);
