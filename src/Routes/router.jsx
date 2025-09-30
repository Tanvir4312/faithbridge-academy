import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import StudentLogin from "../pages/authentication/studentsAuthentication/StudentLogin";
import Register from "../pages/authentication/Register/Register";
import DashboardLayout from "../layout/DashboardLayout";
import StudentProfile from "../pages/Dashboard/StudentDashboard/Profile/StudentProfile";
import PrivateRoute from "./PrivateRoute";
import OnlineAdmission from "../pages/OnlineAdmission/OnlineAdmission";
import AdmissionApply from "../pages/OnlineAdmission/AdmissionApply/AdmissionApply";
import ApplicationStatus from "../pages/Dashboard/StudentDashboard/ApplicationStatus/ApplicationStatus";
import ApplyPayment from "../pages/ApplyPayment/ApplyPayment";
import StudentPrivateRoute from "./StudentPrivateRoute";
import UserPrivateRoute from "./UserPrivateRoute";
import ViewProfile from "../pages/Dashboard/StudentDashboard/Profile/ViewProfile/ViewProfile";
import FormFillUp from "../pages/FormFillUp/FormFillUp";
import FormFillUpInfo from "../pages/FormFillUpInfo/FormFillUpInfo";
import ProfileUpdate from "../pages/ProfileUpdate/ProfileUpdate";
import AcademicDocReq from "../pages/Dashboard/StudentDashboard/AcademicDocReq/AcademicDocReq";
import Transcript from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Transcript/Transcript";
import ApplyTranscript from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Transcript/ApplyTranscript";
import AllTranscriptApplication from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Transcript/AllTranscriptApplication";
import PaymentSuccessPage from "../pages/PaymentSuccessPage/PaymentSuccessPage";
import Testimonial from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Testimonial/Testimonial";
import ApplyTestimonial from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Testimonial/ApplyTestimonial";
import AllTestimonial from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Testimonial/AllTestimonial";
import Certificate from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Certificate/Certificate";
import ApplyCertificate from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Certificate/ApplyCertificate";
import AllCertificate from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Certificate/AllCertificate";
import AdminRoute from "./AdminRoute";
import AdminProfile from "../pages/Dashboard/AdminDashboard/Profile/AdminProfile";
import HomePage from "../pages/Dashboard/AdminDashboard/HomePage/HomePage";
import Notice from "../pages/Dashboard/AdminDashboard/Notice/Notice";
import AddNotice from "../pages/Dashboard/AdminDashboard/Notice/AddNotice/AddNotice";
import AdminLayout from "../layout/AdminLayout";
import ViewNotice from "../pages/Dashboard/AdminDashboard/Notice/ViewNotice/ViewNotice";
import NoticeDetails from "../components/Home/Scroll/NoticeDetails/NoticeDetails";
import UpdateNotice from "../pages/Dashboard/AdminDashboard/Notice/UpdateNotice/UpdateNotice";
import Home_Page_Image from "../pages/Dashboard/AdminDashboard/Home_Page_Image/Home_Page_Image";
import AddImage from "../pages/Dashboard/AdminDashboard/Home_Page_Image/AddImage/AddImage";
import ViewImage from "../pages/Dashboard/AdminDashboard/Home_Page_Image/ViewImage/ViewImage";
import CoursesForStudent from "../pages/Dashboard/AdminDashboard/CoursesForStudent/CoursesForStudent";
import AddCourses from "../pages/Dashboard/AdminDashboard/CoursesForStudent/AddCourses/AddCourses";
import ViewCourses from "../pages/Dashboard/AdminDashboard/CoursesForStudent/ViewCourses/ViewCourses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";

import AddActivities from "../pages/Dashboard/AdminDashboard/OtherActivities/AddActivities/AddActivities";
import ViewActivities from "../pages/Dashboard/AdminDashboard/OtherActivities/ViewActivities/ViewActivities";
import OthersActivities from "../pages/Dashboard/AdminDashboard/OtherActivities/OthersActivities";
import MoreImage from "../pages/Dashboard/AdminDashboard/MoreImage/MoreImage";
import AddMoreImage from "../pages/Dashboard/AdminDashboard/MoreImage/AddMoreImage/AddMoreImage";
import ViewMoreImage from "../pages/Dashboard/AdminDashboard/MoreImage/ViewMoreImage/ViewMoreImage";
import AddContactNumber from "../pages/Dashboard/AdminDashboard/ContactNumber/AddContactNumber/AddContactNumber";
import ContactNumber from "../pages/Dashboard/AdminDashboard/ContactNumber/ContactNumber";
import ViewContactNumber from "../pages/Dashboard/AdminDashboard/ContactNumber/ViewContactNumber/ViewContactNumber";
import Manage from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/Manage";
import Users from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/Users/Users";
import AllUsers from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/Users/AllUsers/AllUsers";
import StudentInfo from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/StudentInfo/StudentInfo";
import AllStudentInfo from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/StudentInfo/AllStudentInfo/AllStudentInfo";
import FormFillUpInfoAdmin from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/FormFillUpInfoAdmin/FormFillUpInfoAdmin";
import AdmitCard from "../pages/FormFillUp/AdmitCard/AdmitCard";
import FormFillUpTime from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/FormFillUpInfoAdmin/FormFillUpTime/FormFillUpTime";
import ApplicationTimeControl from "../pages/Dashboard/AdminDashboard/AdminSidebar/Manage/ApplicationTimeControl/ApplicationTimeControl";
import Payments from "../pages/Dashboard/AdminDashboard/AdminSidebar/Payments/Payments";
import AllPayment from "../pages/Dashboard/AdminDashboard/AdminSidebar/Payments/AllPayment/AllPayment";
import AcademicDocs from "../pages/Dashboard/AdminDashboard/AdminSidebar/AcademicDocs/AcademicDocs";
import AllTranscriptAdmin from "../pages/Dashboard/AdminDashboard/AdminSidebar/AcademicDocs/AllTranscriptAdmin/AllTranscriptAdmin";
import AllTestimonialAdmin from "../pages/Dashboard/AdminDashboard/AdminSidebar/AcademicDocs/AllTestimonialAdmin/AllTestimonialAdmin";
import AllCertificateAdmin from "../pages/Dashboard/AdminDashboard/AdminSidebar/AcademicDocs/AllCertificateAdmin/AllCertificateAdmin";
import CertificateCopy from "../pages/Dashboard/StudentDashboard/AcademicDocReq/Docs/Certificate/CertificateCopy/CertificateCopy";




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
                    //------------------------------User or Student Start----------------------------
                    {
                        path: 'profile',
                        element: <StudentPrivateRoute><StudentProfile></StudentProfile></StudentPrivateRoute>
                    },
                    {
                        path: 'application-status',
                        element: <UserPrivateRoute><ApplicationStatus></ApplicationStatus></UserPrivateRoute>
                    },
                    {
                        path: 'apply-payment',
                        element: <PrivateRoute><ApplyPayment></ApplyPayment></PrivateRoute>
                    },
                    {
                        path: 'academic-doc-req',
                        element: <PrivateRoute><StudentPrivateRoute><AcademicDocReq></AcademicDocReq></StudentPrivateRoute></PrivateRoute>
                    },
                    // Transcript-------------------------
                    {
                        path: 'transcript',
                        element: <PrivateRoute><StudentPrivateRoute><Transcript></Transcript></StudentPrivateRoute></PrivateRoute>
                    },
                    {
                        path: 'apply-transcript',
                        element: <PrivateRoute><StudentPrivateRoute><ApplyTranscript></ApplyTranscript></StudentPrivateRoute></PrivateRoute>
                    },
                    {
                        path: 'all-transcript-application',
                        element: <PrivateRoute><StudentPrivateRoute><AllTranscriptApplication></AllTranscriptApplication></StudentPrivateRoute></PrivateRoute>
                    },

                    // Testimonial
                    {
                        path: 'testimonial',
                        element: <PrivateRoute><StudentPrivateRoute><Testimonial></Testimonial></StudentPrivateRoute></PrivateRoute>
                    },
                    {
                        path: 'apply-testimonial',
                        element: <PrivateRoute><StudentPrivateRoute><ApplyTestimonial></ApplyTestimonial></StudentPrivateRoute></PrivateRoute>
                    },
                    {
                        path: 'all-testimonial-application',
                        element: <PrivateRoute><StudentPrivateRoute><AllTestimonial></AllTestimonial></StudentPrivateRoute></PrivateRoute>
                    },


                    // Certificate
                    {
                        path: 'certificate',
                        element: <PrivateRoute><StudentPrivateRoute><Certificate></Certificate></StudentPrivateRoute></PrivateRoute>
                    },
                    {
                        path: 'apply-certificate',
                        element: <PrivateRoute><StudentPrivateRoute><ApplyCertificate></ApplyCertificate></StudentPrivateRoute></PrivateRoute>
                    },
                    {
                        path: 'all-certificate-application',
                        element: <PrivateRoute><StudentPrivateRoute><AllCertificate></AllCertificate></StudentPrivateRoute></PrivateRoute>
                    },
                    //------------------------------User or Student End----------------------------


                    // -----------------------------Admin Start-------------------------------------
                    {
                        path: "admin-profile",
                        element: <AdminRoute><AdminProfile></AdminProfile></AdminRoute>
                    },

                    // Home Page Related action Start---------------------------
                    {
                        path: "home-page",
                        element: <AdminRoute><HomePage></HomePage></AdminRoute>
                    },
                    {
                        path: "notice",
                        element: <AdminRoute><Notice></Notice></AdminRoute>
                    },
                    {
                        path: "home-page-image",
                        element: <AdminRoute><Home_Page_Image></Home_Page_Image></AdminRoute>
                    },
                    {
                        path: "courses-for-student",
                        element: <AdminRoute><CoursesForStudent></CoursesForStudent></AdminRoute>
                    },
                    {
                        path: "activities",
                        element: <AdminRoute><OthersActivities></OthersActivities></AdminRoute>
                    },
                    {
                        path: "more-image",
                        element: <AdminRoute><MoreImage></MoreImage></AdminRoute>
                    },
                    {
                        path: "contact-number",
                        element: <AdminRoute><ContactNumber></ContactNumber></AdminRoute>
                    },
                    // Home Page Related action End---------------------------

                    // Manage Start--------------------------------
                    {
                        path: "manage",
                        element: <AdminRoute><Manage></Manage></AdminRoute>
                    },
                    {
                        path: "users",
                        element: <AdminRoute><Users></Users></AdminRoute>
                    },
                    {
                        path: "student-info-admin",
                        element: <AdminRoute><StudentInfo></StudentInfo></AdminRoute>
                    },
                    // Manage End--------------------------------

                    // Payment Start---------------------------
                    {
                        path: "payments",
                        element: <AdminRoute><Payments></Payments></AdminRoute>
                    },
                    // Payment End---------------------------

                    // Academic Documents Start--------------------
                    {
                        path: 'academic-docs-admin',
                        element: <AdminRoute><AcademicDocs></AcademicDocs></AdminRoute>
                    },
                    // Academic Documents End--------------------

                    // -----------------------------Admin End-------------------------------------
                ]
            }

        ],
    },

    // Admin Layout
    {
        path: 'admin_layout',
        element: <AdminRoute><AdminLayout></AdminLayout></AdminRoute>,
        children: [
            // -------------Notice Related-----------------
            {
                path: 'add-notice',
                element: <AdminRoute><AddNotice></AddNotice></AdminRoute>
            },
            {
                path: 'view-notice',
                element: <AdminRoute> <ViewNotice></ViewNotice></AdminRoute>
            },
            {
                path: 'notice-update/:id',
                element: <AdminRoute> <UpdateNotice></UpdateNotice></AdminRoute>
            },
            // --------------------HomePage Image Related---------------------------
            {
                path: 'add-image',
                element: <AdminRoute> <AddImage></AddImage></AdminRoute>
            },
            {
                path: 'view-image',
                element: <AdminRoute> <ViewImage></ViewImage></AdminRoute>
            },
            // ------------------Courses for Student Related--------------------
            {
                path: 'add-courses',
                element: <AdminRoute><AddCourses></AddCourses></AdminRoute>
            },
            {
                path: 'view-courses',
                element: <AdminRoute><ViewCourses></ViewCourses></AdminRoute>
            },
            // -----------------Other Activities Related----------------
            {
                path: 'add-activities',
                element: <AdminRoute><AddActivities></AddActivities></AdminRoute>
            },
            {
                path: 'view-activities',
                element: <AdminRoute><ViewActivities></ViewActivities></AdminRoute>
            },
            // ---------------More Image Related--------------------------
            {
                path: 'add-more-image',
                element: <AdminRoute><AddMoreImage></AddMoreImage></AdminRoute>
            },
            {
                path: 'view-more-image',
                element: <AdminRoute><ViewMoreImage></ViewMoreImage></AdminRoute>
            },
            // ---------------Contact Number Related--------------------------
            {
                path: 'add-contact-number',
                element: <AdminRoute><AddContactNumber></AddContactNumber></AdminRoute>
            },
            {
                path: 'view-contact-number',
                element: <AdminRoute><ViewContactNumber></ViewContactNumber></AdminRoute>
            },
            // ---------------Users Related--------------------------
            {
                path: 'all-user',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/users-data-count`)

            },
            // ---------------Students Info Related--------------------------
            {
                path: 'all-student-info-admin',
                element: <AdminRoute><AllStudentInfo></AllStudentInfo></AdminRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/students-data-count`)
            },
            // ---------------Students Form fill-up Info Related--------------------------
            {
                path: 'student-formFillUp-info-admin',
                element: <AdminRoute><FormFillUpInfoAdmin></FormFillUpInfoAdmin></AdminRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/form-fillUp-data-count`)
            },

            // ------------------------------Form FillUp Time-----------------------
            {
                path: 'form-fill-up-time',
                element: <AdminRoute><FormFillUpTime></FormFillUpTime></AdminRoute>
            },
            // -----------------------------Application Time Control----------------------------------
            {
                path: 'application-time-control',
                element: <AdminRoute> <ApplicationTimeControl></ApplicationTimeControl></AdminRoute>
            },
            // -----------------------------All Payment----------------------------------
            {
                path: 'all-payment',
                element: <AdminRoute><AllPayment></AllPayment></AdminRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/payments-data-count`)
            },
            // -----------------------------All Transcript----------------------------------
            {
                path: 'all-transcript-admin',
                element: <AdminRoute><AllTranscriptAdmin></AllTranscriptAdmin></AdminRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/transcripts-data-count`)
            },
            // -----------------------------All Testimonial----------------------------------
            {
                path: 'all-testimonial-admin',
                element: <AdminRoute><AllTestimonialAdmin></AllTestimonialAdmin></AdminRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/testimonials-data-count`)
            },
            // -----------------------------All Certificate----------------------------------
            {
                path: 'all-certificate-admin',
                element: <AdminRoute><AllCertificateAdmin></AllCertificateAdmin></AdminRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/certificates-data-count`)
            },

        ]
    },



    {
        path: '/course-details/:id',
        element: <CourseDetails></CourseDetails>
    },
    {
        path: '/notice-details/:id',
        element: <NoticeDetails></NoticeDetails>
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
        element: <PrivateRoute><AdmissionApply></AdmissionApply></PrivateRoute>
    },
    {
        path: 'view-profile',
        element: <PrivateRoute><StudentPrivateRoute><ViewProfile></ViewProfile></StudentPrivateRoute></PrivateRoute>
    },
    {
        path: 'form-fill-up',
        element: <PrivateRoute><StudentPrivateRoute><FormFillUp></FormFillUp></StudentPrivateRoute></PrivateRoute>
    },
    {
        path: 'form-fillUp-info',
        element: <PrivateRoute><StudentPrivateRoute><FormFillUpInfo></FormFillUpInfo></StudentPrivateRoute></PrivateRoute>
    },
    {
        path: 'profile-update/:id',
        element: <ProfileUpdate></ProfileUpdate>
    },
    {
        path: 'success-payment',
        element: <PaymentSuccessPage></PaymentSuccessPage>
    },

    // Admit Card
    {
        path: 'admit-card/:id',
        element: <StudentPrivateRoute><AdmitCard></AdmitCard></StudentPrivateRoute>
    },
    // Certificate Copy
    {
        path: 'certificate-copy/:id',
        element: <StudentPrivateRoute><CertificateCopy></CertificateCopy></StudentPrivateRoute>
    },


]);
export default router







