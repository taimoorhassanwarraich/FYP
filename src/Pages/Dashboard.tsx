import { Grid } from "@mui/material";
import React from "react";
import driver from "../assets/driver.png";
import passenger from "../assets/passenger.png";
import complete from "../assets/complete.png";
import location from "../assets/location.png";
import Linechart from "../Components/Linechart";
import Duougnut from "../Components/Duougnut";
const data = [
  {
    title: "Driver",
    image: `${driver}`,
    color: "#00CAE3",
  },
  {
    title: "Passenger",
    image: `${passenger}`,
    color: "#4CAF50",
  },
  {
    title: "Complete Ride",
    image: `${complete}`,
    color: "#4CAF50",
  },
  {
    title: "Cover city",
    image: `${location}`,
    color: "#FF9800",
  },
];
function Dashboard() {
  return (
    <div>
      <div className="pt-9 pl-9 pr-5">
        <Grid container columnSpacing={3}>
          {data.map((x, index) => {
            return (
              <Grid key={index} item md={3}>
                <div className="!bg-white border-[1px] border-bordercolor shadow-sm rounded-md  relative w-full min-h-[110px]">
                  <div className="absolute text-center right-4 top-4">
                    <p className="text-2xl font-bold"> 250</p>
                    <p className="text-txtlight ">{x.title}</p>
                  </div>
                  <div className="absolute bg-bglight flex justify-center rounded-md items-center w-20 h-20  shadow-sm top-3 left-5 ">
                    <img
                      src={x.image}
                      className="w-11"
                      style={{
                        filter:
                          "invert(18%) sepia(93%) saturate(3744%) hue-rotate(166deg) brightness(93%) contrast(98%)",
                      }}
                      alt=""
                    />
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <div className="mt-9d">
          <Grid container columnSpacing={4}>
            <Grid md={8} item>
            <Linechart />
            </Grid>
            <Grid md={4} item>
            <Duougnut />
            </Grid>
          </Grid>

          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
