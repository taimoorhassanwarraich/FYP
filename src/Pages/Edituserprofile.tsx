import { Add } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import p from "../assets/a-1.jpeg";
function Edituserprofile() {
  return (
    <div className="p-9 min-w-[500px]">
      <div className="">
        <Grid container>
          <Grid item md={6}>
            <div className="relative border-primary  rounded-full">
              <div className="">

              <img src={p} className="rounded-full w-20 h-20" alt="" />
              </div>
              <div className="absolute bottom-1 left-12">

              <Add fontSize="large" className="!text-primary"/>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
           
          </Grid>
        </Grid>
      </div>
      <div className="">
        <form action="">
          <TextField
            type={"email"}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            type={"number"}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          />
          <TextField
            type={"number"}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="CNIC Number"
            variant="outlined"
          />
          <TextField
            type={"number"}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="License Number"
            variant="outlined"
          />
          <TextField
            type={"number"}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="Car Registration number"
            variant="outlined"
          />
          <TextField
            type={"number"}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="Car Capiciety"
            variant="outlined"
          />
          <TextField
            type={"email"}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <FormControl sx={{m:1}}>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </form>
      </div>
      <div className="w-full flex justify-end mt-3">
        <Button variant="contained" className="!bg-primary">
          Update profile
        </Button>
      </div>
    </div>
  );
}

export default Edituserprofile;
