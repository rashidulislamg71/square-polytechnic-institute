import { createBrowserRouter } from "react-router-dom";

import OutLet from "@components/MainLayout/OutLet/OutLet";
import HomePage from "@pages/HomePage/HomePage";
import AboutPage from "@pages/AboutPage/AboutPage";
import NotFound from "@pages/NotFound/NotFound";
import DepartmentPage from "@pages/DepartmentPage/DepartmentPage";

import NoticePage from "@pages/NoticePage/NoticePage";
import CampusPage from "@pages/CampusPage/CampusPage";
import StudentsCarePage from "@pages/StudentsCarePage/StudentsCarePage";
import ContactPage from "@pages/Contact_usPage/ContactPage";
import ResultPage from "@pages/ResultPage/ResultPage";
import ComputerPage from "@pages/DepartmentPages/ComputerPage/ComputerPage";
import MechanicalPage from "@pages/DepartmentPages/MechanicalPage/MechanicalPage";
import TextilePage from "@pages/DepartmentPages/TextilePage/TextilePage";
import CivilPage from "@pages/DepartmentPages/CivilPage/CivilPage";
import ElectricalPage from "@pages/DepartmentPages/ElectricalPage/ElectricalPage";
import AdmissionPage from "@pages/AdmissionPage/AdmissionPage";
import AllTestimonialPage from "@pages/AllTestimonialPage/AllTestimonialPage";
import HostelPage from "@pages/HostelPage/HostelPage";
import GalleryAndEventsPage from "@pages/GalleryAndEventsPage/GalleryAndEventsPage";

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
        path: "/galleryEvent",
        element: <GalleryAndEventsPage />,
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
        path: "/students-care",
        element: <StudentsCarePage />,
      },

      //Depeartment pages
      {
        path: "/computer",
        element: <ComputerPage />,
      },
      {
        path: "/electrical",
        element: <ElectricalPage />,
      },
      {
        path: "/civil",
        element: <CivilPage />,
      },
      {
        path: "/textile",
        element: <TextilePage />,
      },
      {
        path: "/mechanical",
        element: <MechanicalPage />,
      },
      {
        path: "/admission",
        element: <AdmissionPage />,
      },
      {
        path: "/all_testimonial",
        element: <AllTestimonialPage />,
      },
      {
        path: "/hostel",
        element: <HostelPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
