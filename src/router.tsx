import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import CarListing from "./components/CarListing";
import LoginPageClient from "./pages/Forms/LoginPageClient";
import LoginPageAgent from "./pages/Forms/LoginPageAgent";

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
        element: <LoginPageClient />
    },
    {
        path:"agent-login",
        element: <LoginPageAgent />
    }
    
]);

export default router;