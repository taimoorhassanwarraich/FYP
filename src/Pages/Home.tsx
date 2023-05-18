import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Sidbar from "../Components/Sidbar";
import PersonIcon from "@mui/icons-material/Person";
import Complaint from "./Complaint";
import Dashboard from "./Dashboard";
import Driver from "./Driver";
import Nopage from "./Nopage";
import User from "./User";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
function Home() {
  const navigate = useNavigate();
  const [profile, setprofile] = useState(false);
  const [page, setpage] = useState("Dashboard");
  const logout = () => {
    navigate("/");
  };
  const handlepage = (name: any) => {
    setpage(name);
  };
  return (
    <div>
      {/* <Button variant='contained' onClick={logout} >logout</Button> */}
      <Grid container>
        <Grid item md={2}>
          <div className="min-h-[100vh] border-[1px] border-bordercolor">
            <Sidbar func={handlepage} />
          </div>
        </Grid>
        <Grid item md={10}>
          <div className="border-[1px] border-bordercolor bg-white min-h-[7vh]">
            <Grid container>
              <Grid item md={6}></Grid>
              <Grid item md={6}>
                <div className="relative pr-7 pt-3 ">
                  <div className="absolute top-3 right-16">
                    <PersonIcon
                    className="text-primary"
                      fontSize="large"
                      onClick={() => setprofile(!profile)}
                    />
                  </div>
                  {profile == true ? (
                    <div className="absolute top-12 rounded-md shadow-lg z-30 right-4 w-auto  h-auto  bg-bglight">
                      
                      <div className="border-b-[1px] border-bordercolor pl-5 pt-9 pr-9 pb-3">
                        <Grid container>
                          <Grid item md={2}>
                            <div className="flex justify-center items-center mr-5 ">
                              <PhotoSizeSelectActualIcon fontSize="large" className="text-primary" />
                            </div>
                          </Grid>
                          <Grid item md={10}>
                            <p className="text-sm font-bold">Taimoor Hassan</p>
                            <p className="">taimoor@gmail.com</p>
                          </Grid>
                        </Grid>
                      </div>
                      <div className="pt-3 pl-5 pb-5">
                        <div className="flex items-center mt-3">
                          <HelpIcon className="text-primary" />
                          <p className="ml-2 text-md font-medium">Help</p>
                        </div>
                        <div className="flex mt-2 cursor-pointer"  onClick={logout}>
                          <LogoutIcon className="text-primary" />
                          <p className="ml-2 text-md font-medium">Logout</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Grid>
          </div>
          <div className=" bg-bglight min-h-[93vh]">
            {page == "Dashboard" ? (
              <Dashboard />
            ) : page == "Drivers" ? (
              <Driver />
            ) : page == "Passengers" ? (
              <User />
            ) : (
              page == "Complaint" && <Complaint />
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
