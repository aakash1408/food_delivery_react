import React from "react";
import ReactDom from "react-dom/client"
import Header from "./components/Header.js"
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppContainer = () => {
    return (
        <div className = "app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path:"/about",
                element: <About/>
            },
            {
                path:"/contact",
                element: <Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ]
    },
    
])



const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);


















































