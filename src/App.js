import React from "react";
import { useSelector } from "react-redux";

export default () => {
    const text = useSelector(state => state.main.text)
    return <div>
        {text}
    </div>
}