import React from "react";
import ReactDOM from 'react-dom/client';

import './style.scss';
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";


const rootNodeElement = document.querySelector("#main");
const root = ReactDOM.createRoot(rootNodeElement);
root.render(<Provider store={store}>
   <App/>
</Provider>);
