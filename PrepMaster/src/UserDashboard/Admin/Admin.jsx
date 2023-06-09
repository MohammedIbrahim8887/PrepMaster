import Logo from "../../assets/Logo.png";
import AnalyticsIcon from "../../assets/AnalyticsIcon.svg";
import DashBoardIcon from "../../assets/DashboardIcon.svg";
import SettingsIcon from "../../assets/SettingsIcon.svg";
import SupportIcon from "../../assets/SupportIcon.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";
import UsersIcon from "../../assets/UsersIcon.svg";
import SpreadLine from "../../assets/SpreadLine.png";
import { NavLink, Outlet } from "react-router-dom";
import HeaderDashboard from "../HeaderDashboard";
import Logout from "../Logout";
import LandingPage from "../../LandingPage/LandingPage";
import DepartmentIcon from "../../assets/Department.svg";
import AdminHeader from "./AdminHeader";

export default function Admin() {
  return (
    <div className="flex flex-row gap-6 m-6">
      <div className="flex  flex-col gap-6 w-fit max-md:hidden " id="SideBar">
        <NavLink to="/" element={<LandingPage />}>
          <div className=" Logo flex justify-center self-center w-5/6 ">
            <img src={Logo} alt="Logo" />
          </div>
        </NavLink>

        <div className="Navigations place-items-center flex flex-col gap-6 mt-10 mb-32 ">
          <NavLink to="" end className="w-72 flex justify-center">
            <div className="side-bar text-md w-max" id="Dashboard">
              <img src={DashBoardIcon} alt="Dashboard Icon" />
              <p>Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="AdminUsers" className="w-72 flex justify-center">
            <div className="side-bar  text-md " id="Users">
              <img src={UsersIcon} alt="Users Icon" />
              <p>Users</p>
            </div>
          </NavLink>
          <NavLink to="AdminDepartment" className="w-72 flex justify-center">
            <div className="side-bar  text-md " id="Users">
              <img src={DepartmentIcon} alt="Department Icon" />
              <p>Department</p>
            </div>
          </NavLink>
          <div className="side-bar text-md " id="Analytics">
            <img src={AnalyticsIcon} alt="Analytics Icon" />
            <p>Analytics</p>
          </div>
          <div className="my-6" id="SpreadLine">
            <img src={SpreadLine} alt="Spread Line" />
          </div>
          <div className="side-bar text-md" id="Support">
            <img src={SupportIcon} alt="Support Icon" />
            <p>Support</p>
          </div>
          <NavLink to="AdminSetting" className="w-72 flex justify-center">
            <div className="side-bar text-md" id="Settings">
              <img src={SettingsIcon} alt="Settings Icon" />
              <p>Settings</p>
            </div>
          </NavLink>
          <Logout />
        </div>
        <div className=" copyright">
          <p className="opacity-50 text-xs">© PrepMaster all rights reserved</p>
        </div>
      </div>
      <div className="flex flex-col w-full px-4 max-md:px-[0.1rem]">
        <div className="max-md:hidden">
        <HeaderDashboard />
        </div>
        <AdminHeader/>
        <Outlet />
      </div>
    </div>
  );
}
