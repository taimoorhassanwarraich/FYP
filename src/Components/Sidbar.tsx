import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
const linkdata = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Drivers",
    icon: <PersonOutlinedIcon />,
  },
  {
    name: "Passengers",
    icon: <Diversity1OutlinedIcon />,
  },
  {
    name: "Complaint",
    icon: <ArchiveOutlinedIcon />,
  },
];
function Sidbar({ func }: any) {
  const [curentlink, setcurentlink] = useState("Dashboard");
  const handle = (name: any) => {
    setcurentlink(name);
    console.log(name);
    console.log(curentlink);
  };

  return (
    <div className=" ">
      <div className=" min-h-[7vh] flex items-center border-[1px] border-bordercolor">
        <img src={logo} className="w-12 " alt="" />
        <p className="font-bold  text-primary text-2xl">Hum-sawar</p>
      </div>
      <div className="pl-5 pt-5">
        {linkdata.map((x, index) => {
          return (
            <div
              key={index}
              className="flex mt-3 cursor-pointer items-center  h-auto"
              onClick={() => {
                handle(x.name);
                func(x.name);
              }}
            >
              <div
                style={{ color: curentlink == x.name ? "#037c6e" : "#161c2d" }}
                className="bg-bgicon rounded-sm p-2 font-light "
              >
                {x.icon}
              </div>
              <p
                style={{ color: curentlink == x.name ? "#037c6e" : "#161c2d" }}
                className="  font-medium"
              >
                {x.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidbar;
