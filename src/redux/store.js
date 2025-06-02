import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import mainReducer from './slices/mainReducer';

const state = {
    main: {
        text: "Hello world"
    }
};

export default configureStore({
    reducer: {
        main: mainReducer
    },
    preloadedState: state,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
});