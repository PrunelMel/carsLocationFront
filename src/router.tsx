import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import CarListing from "./components/CarListing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "cars",
                element: <CarListing    /> 
            }
        ]
    },
    {
        path:"login",
        element: <h1>Login</h1>
    }
    
]);

export default router;