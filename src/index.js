import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from "./App";
import Allhome from "./home/Allhome";
import Allgames from "./games/Allgames";
import Alldetails from "./product-details/Alldetails";
import Alllcontect from "./contect/Alllcontect";
import Allcart from "./cart/Allcart";
import Allselected from "./selected/Allselected";
import Allprops from "./Allprops/Allprops";
import ScrollToTop from "react-scroll-to-top";
import Sccuessdl from "./home/Sccuessdl";
import Allsign from "./signin/Allsign";
import Sccuesstotal from "./selected/Sccuesstotal";
import Sccuesscontect from "./contect/Sccuesscontect";
import Sccuesssign from "./signin/Sccuesssign";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
<App/>
      </div>
    ),
  },
  {
    path: "home",
    element:
       <div>
<Allhome/>
    </div>,
  },
  {
    path: "games",
    element:
       <div>
<Allgames/>
    </div>,
  },
  {
    path: "detail",
    element:
       <div>
<Alldetails/>
    </div>,
  },
  {
    path: "shop",
    element:
       <div>
<Allcart/>
    </div>,
  },
  {
    path: "contact",
    element:
       <div>
<Alllcontect/>
    </div>,
  },
  {
    path: "test",
    element:
       <div>
<Allprops/>
    </div>,
  },
  {
    path: "cart",
    element:
       <div>
<Allselected/>
    </div>,
  },
  {
    path: "sign",
    element:
       <div>
<Allsign/>
    </div>,
  },
  {
    path: "success",
    element:
       <div>
<Sccuessdl/>
    </div>,
  },
  {
    path: "total",
    element:
       <div>
<Sccuesstotal/>
    </div>,
  },
  {
    path: "sccusscontact",
    element:
       <div>
<Sccuesscontect/>
    </div>,
  },
  {
    path: "sccusssign",
    element:
       <div>
<Sccuesssign/>
    </div>,
  },

]);

createRoot(document.getElementById("root")).render(
 <div>
  <RouterProvider router={router} />
  <ScrollToTop smooth  
viewBox="0 0 384 512"
svgPath="M350 177.5c3.8-8.8 2-19-4.6-26l-136-144C204.9 2.7 198.6 0 192 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26s12.5 14.5 22 14.5h88l0 192c0 17.7-14.3 32-32 32H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32l80 0c70.7 0 128-57.3 128-128l0-192h88c9.6 0 18.2-5.7 22-14.5z"
style={{backgroundColor:"rgb(60, 246, 184)"
,borderRadius:'9px',width:"45px", height:'48px'}}
/>
</div>
);


































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
