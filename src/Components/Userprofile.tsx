import { Close, History, SearchRounded } from "@mui/icons-material";
import { Button, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import p1 from "../assets/a-1.jpeg";
import HistoryIcon from "@mui/icons-material/History";
import ArticleIcon from "@mui/icons-material/Article";
import Ridehistory from "./Ridehistory";
export const Userprofile: React.FunctionComponent<{
  func: () => void;
  data?: any;
}> = (props) => {
  const [tab, settab] = useState("history");
  const handletab = (click: string) => {
    settab(click);
  };
  return (
    <div className="p-5 min-w-[900px] min-h-[60vh] ">
      <div className="">
        <Grid container spacing={2}>
          <Grid item md={2}>
            <img src={p1} alt="" />
          </Grid>
          <Grid item md={4}>
            <div className="">
              
              <p className="text-xl font-medium">{props.data.name}</p>
              
              <p>{props.data.gender}</p>
               <div className="flex mt-2">
                <p className="font-bold">Driving license :</p>
                <p>42543252354</p>
               </div>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className="flex">
               <p className="font-bold">Phone number :</p>
              <p>{props.data.phone}</p>
 
            </div>
              <div className="flex mt-3">
                <p className="font-bold">CNIC :</p>
                <p>33333333344</p>
              </div>
              <div className="flex mt-3">
                <p className="font-bold">Registration number :</p>
                <p>MBK-404</p>
              </div>

          </Grid>
          <Grid item md={2} sx={{ textAlign: "end" }}>
            <IconButton onClick={props.func}>
              <Close className="text-danger" />
            </IconButton>
          </Grid>
        </Grid>
       
        <div className=" float-right flex">
          <input
            type="text"
            className="p-3 rounded-sm  border-[1px] border-bordercolor"
            placeholder="Search here"
          />
          <div className="bg-primary rounded-tr-sm rounded-br-sm min-w-[50px] flex justify-center items-center ">
            <SearchRounded className="!text-white" />
          </div>
        </div>
      </div>
      <div className="">
        <Grid container>
          <Grid item md={3}>
            <div className="mt-3  justify-start items-center">
              <div className="mt-3">
                <Button
                  variant="outlined"
                  startIcon={<History />}
                  style={{
                    color: tab == "history" ? "#FFFFFF" : "#037c6e",
                    background: tab == "history" ? "#037c6e" : "#FFFFFF",
                  }}
                  onClick={() => handletab("history")}
                >
                  Ride history
                </Button>
              </div>
              <div className="mt-3 ml-2">
                <Button
                  variant="outlined"
                  startIcon={<ArticleIcon />}
                  style={{
                    color: tab == "document" ? "#FFFFFF" : "#037c6e",
                    background: tab == "document" ? "#037c6e" : "#FFFFFF",
                  }}
                  onClick={() => handletab("document")}
                >
                  Documents
                </Button>
              </div>
            </div>
          </Grid>
          {tab == "history" ? (
            <Grid item md={9}>
              <div className="mt-3">
                <Ridehistory />
              </div>
            </Grid>
          ) : (
            <Grid item md={9}>
              <div className="mt-3">
                <div className="mt-2 flex">
                  <p className="font-bold pr-1">1.</p>
                  <a href="#" target={"_blank"}>
                    Driving license picture
                  </a>
                </div>
                <div className="flex">
                  <p className="font-bold pr-1">2.</p>
                  <a href="#" target={"_blank"}>
                    CNIC back side picture
                  </a>
                </div>
                <div className="flex">
                  <p className="font-bold pr-1">3.</p>
                  <a href="#" target={"_blank"}>
                    CNIC front side picture
                  </a>
                </div>
                <div className="flex">
                  <p className="font-bold pr-1">4.</p>
                  <a href="#" target={"_blank"}>
                    certificate of vehicle registration
                  </a>
                </div>
                <div className="flex">
                  <p className="font-bold pr-1">5.</p>
                  <a href="#" target={"_blank"}>
                    vehicle pitcure
                  </a>
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
      <div className="w-[100%] float-right mt-5 mb-5">
        <Button variant="contained" className="!bg-primary">
          Aprrove
        </Button>
        <Button variant="outlined" className="!m-2 !text-primary">
          Block
        </Button>
        <Button variant="outlined" className="!text-primary">
          Un Block
        </Button>
      </div>
    </div>
  );
};
