// redux store setup
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";

import commonReducer from "@features/common/commonSlice";

const reducers = combineReducers({
    common: commonReducer,
});

const makeStore = wrapMakeStore(() =>
    configureStore({
        reducer: reducers,
        devTools: process.env.NODE_ENV !== 'production',
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().prepend(
                nextReduxCookieMiddleware({
                    subtrees: [],

                })
            ),
    })
);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });