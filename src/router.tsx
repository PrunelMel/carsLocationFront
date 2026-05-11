import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <h1 className="text-amber-400">Home</h1>
            },
            {
                path: "about",
                element: <h1 className="text-amber-400">About</h1> 
            }
        ]
    },
    {
        path:"login",
        element: <h1>Login</h1>
    }
    
]);

export default router;