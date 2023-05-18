import { DockTwoTone, Send } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import p1 from "../assets/a-1.jpeg";
import p2 from "../assets/03.jpeg";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Complainet() {
  return (
    <div className="pr-2 mt-5">
      <Grid container>
        <Grid item md={3}>
          <div className="flex flex-col items-end bg-[#F8F9FA] p-5">
            <div className=" pt-2 pb-2 pr-2 pl-9 rounded-lg mt-5 shadow-sm  w-[100%] bg-[#F8F9FA] border-bordercolor border-[1px]">
              <Grid container>
                <Grid item md={1}>
                  <div className="w-16 h-16 float-right p-2 ">
                    <img
                      src={p2}
                      className="rounded-full object-contain"
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item md={11}>
                  <div className="overflow- p-2">
                    <div className="flex justify-between ">
                      <p className="font-medium">Liza</p>
                      <p className="text-secondry">
                        9:20 <span>pm</span>
                      </p>
                    </div>
                    <div className="overflow-hidden h-6">
                      <p className="text-secondry">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam harum repellendus expedita!
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className=" pt-2 pb mt-3 pr-6 pl-9 rounded-lg shadow-sm  w-[100%] bg-[#F8F9FA] border-bordercolor border-[1px]">
              <Grid container>
                <Grid item md={1}>
                  <div className="w-16 h-16 float-right p-2 ">
                    <img
                      src={p1}
                      className="rounded-full object-contain"
                      alt=""
                    />
                  </div>
                </Grid>
                <Grid item md={11}>
                  <div className="overflow- p-2">
                    <div className="flex justify-between ">
                      <p className="font-medium">name</p>
                      <p className="text-secondry">
                        9:20 <span>pm</span>
                      </p>
                    </div>
                    <div className="overflow-hidden h-6">
                      <p className="text-secondry">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nam harum repellendus expedita!
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid item md={9}>
          <div className="border-l border-bordercolor shadow-sm  rounded-sm">
            <div className="border flex pl-2 pt-5 pb-5 border-bordercolor">
              <div className="float-right pr-5">
                <img className="rounded-full w-16 h-16" src={p2} alt="" />
              </div>

              <div>
                <p className="font-medium">Liza</p>
                <p className="text-secondry"><span><FiberManualRecordIcon className="!text-green"/></span> online</p>
              </div>
            </div>
            <div className="bg-white  h-[70vh] ">
              <div className=" max-w-[50%] p-2 ">
                <div className="flex justify-start items-center">
                  <img src={p2} className="w-9 rounded-full" alt="" />
                  <div className="flex flex-col mt-6">
                    <div className="flex justify-start items-center">
                      <p className="pl-2 text-lg font-medium">Liza</p>
                      <p className="pl-2 text-txtlight">3:34 PM</p>
                    </div>
                    <div className="bg-[#F2F3F7] mt-1 ml-2 pl-5 pr-5 pt-2 pb-2 rounded">
                      hi Lorem ipsum dolor
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[50%] float-right">
              <div className="bg-primary text-white mt-1 ml-2 pl-5 pr-5 pt-2 pb-2 rounded">
                      hi Lorem ipsum dolor
                    </div>
              </div>
              
              <div className=" max-w-[50%] p-2 ">
                <div className="flex justify-start items-center">
                  <img src={p2} className="w-9 rounded-full" alt="" />
                  <div className="flex flex-col mt-6">
                    <div className="flex justify-start items-center">
                      <p className="pl-2 text-lg font-medium">Liza</p>
                      <p className="pl-2 text-txtlight">3:34 PM</p>
                    </div>
                    <div className="bg-[#F5F5F5] mt-1 ml-2 pl-5 pr-5 pt-2 pb-2 rounded">
                      hi Lorem ipsum dolor
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-[50%] float-right">
              <div className="bg-primary text-white mt-1 ml-2 pl-5 pr-5 pt-2 pb-2 rounded">
                      hi Lorem Lorem ipsum dolor, sit amet consectetur a
                    </div>
              </div>
              
            </div>
            <div className="flex w-full justify-center items-center">
              <input
                type="text"
                className="bg-bglight border-none outline-none p-9 w-full h-auto overflow-x-hidden overflow-y-visible "
                placeholder="enter text here"
              />
              <Send className="!text-primary" fontSize="large" />
            </div>
            
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Complainet;
