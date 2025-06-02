import React from "react";
import { useSelector } from "react-redux";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";

export default () => {
    const text = useSelector(state => state.main.text)
    return <div>
        <Header/>
        <Outlet/>
        {text}
    </div>
}