import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import mainReducer from './slices/mainReducer';
import hotelsReducer from './slices/hotelsReducer';
import destinationReducer from './slices/destinationReducer';

const state = {
    main: {
        text: "Hello world"
    },
    hotels: {
        list: [],
        isLoading: false
    },
    destinations: {
        list: [],
        isLoading: false,
        selectedDestination: null
    }
};

export default configureStore({
    reducer: {
        main: mainReducer,
        hotels: hotelsReducer,
        destinations: destinationReducer
    },
    preloadedState: state,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger)
});