import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import StudentLogin from "../pages/authentication/studentsAuthentication/StudentLogin";
import Register from "../pages/authentication/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import Sidebar from "../pages/Dashboard/Sidebar/Sidebar";
import StudentProfile from "../pages/Dashboard/StudentDashboard/Profile/StudentProfile";
import PrivateRoute from "./PrivateRoute";
import OnlineAdmission from "../pages/OnlineAdmission/OnlineAdmission";
import AdmissionApply from "../pages/OnlineAdmission/AdmissionApply/AdmissionApply";
import ProtectRoute from "./ProtectRoute";
import ApplicationStatus from "../pages/Dashboard/StudentDashboard/ApplicationStatus/ApplicationStatus";
import ApplyPayment from "../pages/ApplyPayment/ApplyPayment";



// import TeachersLogin from "../pages/authentication/TeachersLogin/TeachersLogin";
// import AdminLogin from "../pages/authentication/AdminLogin/AdminLogin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },

            // Dashboard layout
            {
                path: 'dashboard',
                element: <PrivateRoute>
                    <DashboardLayout></DashboardLayout>
                </PrivateRoute>,
                children: [
                    {
                        path: 'profile',
                        element: <ProtectRoute><StudentProfile></StudentProfile></ProtectRoute>
                    },
                    {
                        path: 'application-status',
                        element:<ProtectRoute> <ApplicationStatus></ApplicationStatus></ProtectRoute>
                    },
                    {
                        path: 'apply-payment',
                        element:<ProtectRoute> <ApplyPayment></ApplyPayment></ProtectRoute>
                    },
                ]
            }

        ],

    },
    {
        path: 'login',
        element: <StudentLogin></StudentLogin>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: 'online-admission',
        element: <OnlineAdmission></OnlineAdmission>
    },
    {
        path: 'admission-apply',
        element: <ProtectRoute><AdmissionApply></AdmissionApply></ProtectRoute>
    },
]);
export default router







