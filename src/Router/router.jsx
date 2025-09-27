

import { createBrowserRouter } from "react-router-dom";

import OutLet from "../Components/MainLayout/OutLet/OutLet";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import NotFound from "../Pages/NotFound/NotFound";
import DepartmentPage from "../Pages/DepartmentPage/DepartmentPage";

import NoticePage from "../Pages/NoticePage/NoticePage";
import CampusPage from "../Pages/CampusPage/CampusPage";
import SuccessEventPage from "../Pages/SuccessEventPage/SuccessEventPage";
import StudentCornerPage from "../Pages/StudentCornerPage/StudentCornerPage";
import ContactPage from "../Pages/Contact_usPage/ContactPage";
import ResultPage from "../Pages/ResultPage/ResultPage";
import ComputerPage from "../Pages/DepartmentPages/ComputerPage/ComputerPage";
import MechanicalPage from "../Pages/DepartmentPages/MechanicalPage/MechanicalPage";
import TextilePage from "../Pages/DepartmentPages/TextilePage/TextilePage";
import CivilPage from "../Pages/DepartmentPages/CivilPage/CivilPage";
import ElectricalPage from "../Pages/DepartmentPages/ElectricalPage/ElectricalPage";
import AdmissionPage from "../Pages/AdmissionPage/AdmissionPage";
import AllTestimonialPage from "../Pages/AllTestimonialPage/AllTestimonialPage";
import HostelPage from "../Pages/HostelPage/HostelPage";

const router = createBrowserRouter([
    {
      element: <OutLet />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      
        {
          path: "/departments",
          element: <DepartmentPage />,
        },
        {
          path: "/campus",
          element: <CampusPage />,
        },
        {
          path: "/successEvent",
          element: <SuccessEventPage />
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/notice",
          element: <NoticePage />,
        },
        {
          path: "/result",
          element: <ResultPage />,
        },
        {
          path: "/contuctUs",
          element: <ContactPage />,
        },
        {
          path: "/studentCorner",
          element: <StudentCornerPage />,
        },
      
        //Depeartment pages
        {
          path: "/computer_page",
          element: <ComputerPage />
        },
        {
          path: "/electrical_page",
          element: <ElectricalPage />
        },
        {
          path: "/civil_page",
          element: <CivilPage />
        },
        {
          path: "/textile_page",
          element: <TextilePage />
        },
        {
          path: "/mechanical_page",
          element: <MechanicalPage />
        },
        {
          path: "/admission",
          element: <AdmissionPage />
        },
        {
          path: "/all_testimonial",
          element: <AllTestimonialPage />
        },
        {
          path: "/hostel",
          element: <HostelPage />
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  export default router;