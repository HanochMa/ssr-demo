import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { hydrateRoot } from "react-dom/client";
// @ts-ignore
const data: any = window.__SSR_DATA__;

// ReactDOM.hydrate(
//   <React.StrictMode>
//     <App data={data}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
