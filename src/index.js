import React from "react";
import ReactDOM from 'react-dom/client';

import './style.scss';


const rootNodeElement = document.querySelector("#main");
const root = ReactDOM.createRoot(rootNodeElement);
root.render(<div>Hello world</div>);
