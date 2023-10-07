import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Reservatino_form from "../Components/Reservation form/Reservatino_form";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        loader: () =>fetch('/events.json'),
    },
    {
        path: "/reservation",
        element: <Reservatino_form></Reservatino_form>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    }
]);

export default router;