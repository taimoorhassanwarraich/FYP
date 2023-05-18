import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import { VisibilityOff, Visibility, AccountCircle } from "@mui/icons-material";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png";
import {
  Button,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";


interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}
function Login() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [res, setres] = useState<any>();
  const onSubmit = async (data: any) => {
    logInWithEmailAndPassword(data.email, data.password);
  };

  const logInWithEmailAndPassword = async (email: any, password: any) => {
    // try {
    //   const ress = await signInWithEmailAndPassword(auth, email, password);
    //   console.log(ress);
    //   const jwtToken = await ress.user?.getIdToken();
    //   // if(jwtToken!=null){
    //     console.log(jwtToken);
    //     localStorage.setItem("token", jwtToken);
        navigate("home")
    //   // }
     
    
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh]">
      <div className="lg:w-[30%]  h-auto p-9 md:w-[60%] sm:w-[100%] ">
        <div className="flex items-center justify-center">
          <img className="w-28 h-28" src={logo} alt="" />
        </div>
        <p className="text-3xl font-bold text-center mb-5">Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type={"email"}
            {...register("email", { required: true })}
            sx={{ m: 1, width: "100%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <div className="ml-2">
            {errors.email && (
              <span className="text-red">This field is required</span>
            )}
          </div>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              {...register("password", { required: true })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <div className="w-[100%] ml-2">
            {errors.password && (
              <span className="text-red">This field is required</span>
            )}
          </div>
          <Button
            type="submit"
            variant="contained"
           className="!bg-primary"
            sx={{ m: 1, width: "100%", padding: "10px" }}
          >
            Login
          </Button>
          <p className="text-xl text-center font-md text-primary">
            Fotgot password ?
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
