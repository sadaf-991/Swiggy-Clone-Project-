import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import RestaurantsMenu from "./components/RestaurantsMenu";
import  { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="app">
            <Header />
            <Outlet />   
        </div>
        </Provider>
    );
};
        
const appRoute = createBrowserRouter([
    {
    path: "/",
    element: <AppLayout />,
    children: [
        
        {
            path: "/",
            element: <Body />
        },
        
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantsMenu />
        },
        {
            path: "/grocery",
            element: (
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>
            ),

        },
        {
            path: "/cart",
            element: <Cart /> 
        },  
    ],    
    },
    
]);






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);