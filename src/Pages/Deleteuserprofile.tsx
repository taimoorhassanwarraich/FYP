import { Button, Grid } from "@mui/material";
import React from "react";
import d from "../assets/delete.jpg";
function Deleteuserprofile() {
  return (
    <div className="min-w-[300px]">
      <div className="p-9">
        <Grid container columnSpacing={3}>
          <Grid item md={4}>
            <div className="">

            <img src={d} alt="" />
            </div>
          </Grid>
          <Grid item md={8}>
            <div className="">
                <p className="text-xl">Are you sure you want to delete ?</p>
                <p className="font-bold text-xl">This cannot undone </p>
                <p className="mt-3 text-txtlight">This will delete all user credential </p>
                <div className="flex justify-between mt-5">
                    <Button variant="outlined" className="!text-primary">Oops! No cancle</Button>
                    <Button variant="contained" className="!bg-danger">Delete</Button>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Deleteuserprofile;
