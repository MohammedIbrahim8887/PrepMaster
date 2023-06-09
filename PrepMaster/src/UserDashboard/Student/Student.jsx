import Logo from "../../assets/Logo.png";
import AnalyticsIcon from "../../assets/AnalyticsIcon.svg";
import DashBoardIcon from "../../assets/DashboardIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import SupportIcon from "../../assets/SupportIcon.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";
import ExamIcon from "../../assets/ExamIcon.svg";
import SpreadLine from "../../assets/SpreadLine.png";
import { NavLink, Outlet } from "react-router-dom";
import HeaderDashboard from "../HeaderDashboard";
import Logout from "../Logout";
import LandingPage from "../../LandingPage/LandingPage";
import { useContext } from "react";
import StudentHeader from "./StudentHeader";
import { useEmail } from "../../Logic/TeacherContext";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Student() {
  const email = useEmail();

  return (
    <div className="flex flex-row gap-6 m-6 max-md:mx-0">
      <div className="flex  flex-col gap-6 w-fit max-md:hidden " id="SideBar">
        <NavLink to="/" element={<LandingPage />}>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="100"
            className=" Logo flex justify-center self-center w-5/6 "
          >
            <img src={Logo} alt="Logo" />
          </div>
        </NavLink>

        <div className="Navigations place-items-center flex flex-col gap-6 mt-10 mb-32 ">
          <NavLink
            to=""
            end
            className="w-72 flex justify-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            <div className="side-bar text-md w-max" id="Dashboard">
              <img src={DashBoardIcon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink
            to="StudentExam"
            className="w-72 flex justifullfy-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="side-bar  text-md w-max" id="Exam">
              <img src={ExamIcon} alt="Exam Icon" className="mr-10" />
              <p className="exam">Exam</p>
            </div>
          </NavLink>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="250"
            className="side-bar text-md "
            id="Analytics"
          >
            <img src={AnalyticsIcon} alt="Analytics Icon" />
            <p>Analytics</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="300"
            className="my-6"
            id="SpreadLine"
          >
            <img src={SpreadLine} alt="Spread Line" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="350"
            className="side-bar text-md"
            id="Support"
          >
            <img src={SupportIcon} alt="Support Icon" />
            <p>Support</p>
          </div>
          <NavLink
            to="StudentSetting"
            className="w-72 flex justify-center"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="side-bar text-md" id="Settings">
              <img src={SettingsIcon} alt="Settings Icon" />
              <p>Settings</p>
            </div>
          </NavLink>
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
            data-aos-delay="450"
          >
            <Logout />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
          data-aos-delay="500"
          className=" copyright"
        >
          <p className="opacity-50 text-xs">© PrepMaster all rights reserved</p>
        </div>
      </div>
      <div className="flex flex-col w-full px-4 max-md:mt-10">
        <div className="max-md:hidden">
          <HeaderDashboard />
        </div>
        <StudentHeader />
        <Outlet />
      </div>
    </div>
  );
}
