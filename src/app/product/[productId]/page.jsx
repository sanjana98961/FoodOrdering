"use client";
import { InnerBanner } from "@/components/InnerBanner";
import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { LiaShoppingBagSolid } from "react-icons/lia";
import Image from "next/image";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductDetails = () => {
  const [qty, setQty] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);
    const [value, setValue] = useState(0);
    const [rating,setRating] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const plus = () => {
    setQty(qty + 1);
  };
  const minus = () => {
    if (qty === 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const bigSlider = useRef();
  const smlSlider=useRef();

  const goto=(index)=>{
    setSlideIndex(index)
    smlSlider.current.swiper.slideTo(index);
    bigSlider.current.swiper.slideTo(index);
  }
  return (
    <>
      <InnerBanner title="PRODUCT DETAILS" bg="/images/menu.jpg" />
      <section className="filterProducts py-4 productDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-6 part1 px-5">
              <div className="productDetailsSliderBig">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  className="bigSlider"
                  ref={bigSlider}
                >
                  <SwiperSlide>
                    <div className="item">
                      <img
                        src={"/images/prod1.jpg"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img
                        src={"/images/prod2.png"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img
                        src={"/images/prod3.png"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img
                        src={"/images/prod4.png"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="productDetailsSlidersml mt-3">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={15}
                  pagination={{
                    clickable: true,
                  }}
                  className="smlSlider"
                  ref={smlSlider}
                >
                  <SwiperSlide>
                    <div
                      className={`item ${slideIndex === 0 && "active"}`}
                      onClick={() => goto(0)}
                    >
                      <img
                        src={"/images/prod1.jpg"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item ${slideIndex === 1 && "active"}`}
                      onClick={() => goto(1)}
                    >
                      <img
                        src={"/images/prod2.png"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item ${slideIndex === 2 && "active"}`}
                      onClick={() => goto(2)}
                    >
                      <img
                        src={"/images/prod3.png"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className={`item ${slideIndex === 3 && "active"}`}
                      onClick={() => goto(3)}
                    >
                      <img
                        src={"/images/prod4.png"}
                        alt="burger"
                        className="w-full"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-md-6  pt-4">
              <h1 className="hd text-brown">Classic Burger</h1>
              <h2
                className="text-y mt-3"
                style={{ fontSize: "30px", fontWeight: "bolder" }}
              >
                $7.05
              </h2>
              <p className="my-4">
                Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula
                rutrum risus ultrice luctus ligula congue a vitae auctor sapien
                gravida enim ipsum congue.
              </p>
              <h3 className="font-bold">Category: Burgers</h3>
              <div className="flex items-center mt-3 w-full">
                <div className="qtyDrop flex items-center">
                  <Button className="action" onClick={minus}>
                    {" "}
                    <FiMinus />
                  </Button>
                  <input type="number" className="mx-1" value={qty}></input>
                  <Button className="action" onClick={plus}>
                    {" "}
                    <FaPlus />
                  </Button>
                </div>
                <Button className="btn-red btn-lg">
                  <LiaShoppingBagSolid style={{ fontSize: "25px" }} />
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>
          <br />
          <Box sx={{ width: "100%" }} className="tabs">
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Description" {...a11yProps(0)} className="itemTab" />
                <Tab label="Reviews(0)" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <h4
                className="text-brown mb-3"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                Description
              </h4>
              <p>
                Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                porta justo. Velna vitae auctor congue magna nihil impedit
                ligula risus. Mauris donec ociis et magnis sapien sagittis
                sapien sem congue tempor gravida donec enim ipsum porta justo
                integer odio velna a purus efficitur ipsum primis in cubilia
                laoreet augue egestas luctus donec purus and blandit sodales
                mpedit ligula risus. Mauris donec ociis et magnis sapien
              </p>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <h4
                className="text-brown mb-3"
                style={{ fontSize: "20px", fontWeight: "bold" }}
              >
                Reviews
              </h4>
              <p>There are no reviews yet.</p>
              <h4 style={{ fontSize: "30px", marginTop: "10px" }}>
                Be the first to review “Classic Burger”
              </h4>
              <p style={{ fontWeight: "bold", fontSize: "15px" }}>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <p>Your rating *</p>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <p className="" style={{ fontWeight: "bold" }}>
                Your review *
              </p>
              <form className="mt-4">
                <div className="form-group">
                  <TextField
                    id="outlined-basic"
                    label="Review"
                    variant="outlined"
                    className="w-full"
                    multiline
                    rows={6}
                  />
                </div>
                <div className="form-group w-[25%]">
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    className=""
                    
                  />
                </div>
                <div className="form-group w-[25%]">
                  <TextField
                    id="outlined-basic"
                    label="EMail"
                    variant="outlined"
                    className=""
                    
                  />
                </div>
                <Button className="btn-y btn-lg">Submit</Button>
              </form>
            </CustomTabPanel>
          </Box>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
