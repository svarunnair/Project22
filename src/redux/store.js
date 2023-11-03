import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { dataReducer } from "./data/reducer"




const root=combineReducers({
    data:dataReducer
})
export const store=legacy_createStore(root,applyMiddleware(thunk))
