import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import mainReducer from './slices/mainReducer';
import hotelsReducer from './slices/hotelsReducer';

const state = {
    main: {
        text: "Hello world"
    },
    hotels: {
        list: [],
        isLoading: false
    }
};

export default configureStore({
    reducer: {
        main: mainReducer,
        hotels: hotelsReducer
    },
    preloadedState: state,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
});