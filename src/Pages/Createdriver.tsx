import { Add } from '@mui/icons-material'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'

function Createdriver() {
  return (
    <div className='p-3' >
     <div className="">
        <p>Profile picture</p>
        <div className="flex bg-secondry min-h-[100px] justify-center items-center">
        <Add/>
        </div>
     </div>
     <div className="">
        <p>CNIC Front picture</p>
        <div className="flex bg-secondry min-h-[100px] justify-center items-center">
        <Add/>
        </div>
     </div>
     <div className="">
        <p>CNIC back picture</p>
        <div className="flex bg-secondry min-h-[100px] justify-center items-center">
        <Add/>
        </div>
     </div>
     <div className="">
        <p>Car Front picture</p>
        <div className="flex bg-secondry min-h-[100px] justify-center items-center">
        <Add/>
        </div>
     </div>
     <div className="">
        <p>Car back picture</p>
        <div className="flex bg-secondry min-h-[100px] justify-center items-center">
        <Add/>
        </div>
     </div>
     <div className="mt-3">
     <TextField sx={{width:'100%'}} id="outlined-basic" label="Name" variant="outlined" />
     </div>
     <div className="mt-3">
     <TextField sx={{width:'100%'}} id="outlined-basic" label="Phone" variant="outlined" />
     </div>
     <div className="mt-3">
     <TextField sx={{width:'100%'}} id="outlined-basic" label="CNIC number" variant="outlined" />
     </div>
     <div className="mt-3">
     <TextField sx={{width:'100%'}} id="outlined-basic" label="Driving licence" variant="outlined" />
     </div>
      <div className="">
      <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
       
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
      </div>
      <div className="mt-3">
        <Button variant='contained' className='!bg-primary' fullWidth>Add driver</Button>
      </div>
    </div>
  )
}

export default Createdriver