import React from "react";
import ReactDOM from 'react-dom/client';

import './style.scss';
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import Hotels from "./pages/hotels/hotels";

export const menuItems = [
    {path: '/', index: true, caption: "Main", component: <Main/>, isMenuItem: true},
    {path: '/about', caption: "About", component: <About/>, isMenuItem: true},
    {path: '/hotels', caption: "Hotels", component: <Hotels/>},
];

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            ...menuItems.map(({path, index, component}) => ({path, index, element: component})),
        ],
    },
]);


const rootNodeElement = document.querySelector("#main");
const root = ReactDOM.createRoot(rootNodeElement);
root.render(<Provider store={store}>
    <RouterProvider router={router}/>
</Provider>);
