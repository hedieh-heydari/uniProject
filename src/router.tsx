
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashboardIndex from "./feature/dashboard/DashboardIndex";
import ProfileIndex from "./feature/profile/profileIndex";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/dashboard', 
                element: <DashboardIndex/>
            }, 
            {
                path:'/profile', 
                element: <ProfileIndex/>
            }
        ]
    }, 
    {
        path:'/login', 
        element: <></>
    }, 
    {
        path:'signup', 
        element: <></>
    }
])

export default routes