import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import CarListing from "./components/CarListing";
import LoginPage from "./pages/Forms/LoginPage";
import Board from "./pages/Dashboard/admin/Board";

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
        element: <LoginPage />
    },
    {
        path:"dash",
        element: <Board />
    }
    
]);

export default router;