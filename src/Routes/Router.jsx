import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Reservatino_form from "../Components/Reservation form/Reservatino_form";
import Root from "../Root/Root";
import Services_card_details from "../Components/Services_card_details/Services_card_details";
import MemberCard from "../Components/Team_member/MemberCard/MemberCard";
import ErroPage from "../Components/ErrorPage/ErroPage";
import Privateroute from "./Privateroute";
import Docs from "../Components/Docs/Docs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErroPage></ErroPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () =>fetch('/events.json'),
            },
            {
                path: "/services/:id",
                element: <Privateroute><Services_card_details></Services_card_details></Privateroute>,
                loader: () =>fetch('/events.json'),
            },
            {
                path: "/teams/:id",
                element: <MemberCard></MemberCard>,
                loader: () =>fetch('/teams.json'),
            },
            {
                path: "/reservation",
                element: <Privateroute><Reservatino_form></Reservatino_form></Privateroute>
            },
            {
                path: "/description",
                element: <Privateroute><Docs></Docs></Privateroute>,
                loader: () =>fetch('/events.json'),
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
    
]);

export default router;