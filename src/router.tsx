
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import DashboardIndex from "./feature/dashboard/DashboardIndex";
import ProfileIndex from "./feature/profile/profileIndex";
import LoginIndex from "./feature/login/LoginIndex";
import SignupIndex from "./feature/signup/SignupIndex";
import WithdrawalIndex from "./feature/withdrawal/WithdrawalIndex";
import DepositIndex from "./feature/deposit/DepositIndex";

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
            }, 
            {
                path:'/withdrawal',
                element:<WithdrawalIndex/>
            },
            {
                path:'/deposit',
                element:<DepositIndex/>
            }

        ]
    }, 
    {
        path:'/login', 
        element: <LoginIndex/>
    }, 
    {
        path:'/signup', 
        element: <SignupIndex/>
    }
])

export default routes