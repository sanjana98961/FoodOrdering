"use client";
import { InnerBanner } from "@/components/InnerBanner";
import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Button,TextField } from "@mui/material";
import Link from "next/link";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isShowingPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <InnerBanner title="SIGN IN" bg="/images/menu.jpg" />
      <section className="singInPage py-4">
        <div className="container py-5">
          <div className="signInBox m-auto w-[500px] p-3">
            <form className="w-full form">
              <div className="form-group w-full">
                <TextField
                  id="outlined-basic"
                  label="Email ID"
                  variant="outlined"
                  type="email"
                  className="w-full"
                />
              </div>
              <div className="form-group w-full">
                <div className="position-relative">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    className="w-full"
                  />
                  {showPassword ? (
                    <IoMdEye
                      className="icon position-absolute top-[17px] right-[17px] cursor-pointer"
                      style={{ fontSize: "20px" }}
                      onClick={isShowingPassword}
                    />
                  ) : (
                    <IoMdEyeOff
                      className="icon position-absolute top-[17px] right-[17px] cursor-pointer"
                      style={{ fontSize: "20px" }}
                      onClick={isShowingPassword}
                    />
                  )}
                </div>
              </div>
              <div className="form-group mb-3">
                <Button className="btn-red btn-lg no-radius w-full">
                  SIGN IN
                </Button>
              </div>
              <div className="or position-relative mt-1 flex items-center justify-center">
                <span className="w-[45px] h-[45px] flex items-center justify-center  rounded-full bg-white z-10">
                  OR
                </span>
                <span className="line d-flex top-[20px] w-full h-[1px]" style={{position:"absolute"}}></span>
              </div>
                <br/>
              <Button className="w-full authBtn"><FcGoogle className="mr-2" style={{fontSize:"30px"}}/> Sign in with google</Button>
              <br/>
              <p className="text-center mt-3">Don't have an account? <Link href={"/signUp"}>Register</Link></p>
            </form> 
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
