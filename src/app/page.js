"use client";
import { BannerSlider } from "@/components/BannerSlider";
import { ProductItemV1 } from "@/components/Product_Item_V1";
import { ProductItemV2 } from "@/components/Product_Item_V2";
import { Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(0);
  const filterProduct = (id) => {
    setIsActive(id);
  };

  console.log({ isActive });
  return (
    <>
      <BannerSlider />
      <section className="filterProducts py-5">
        <div className="container">
          <ul className="list list-inline text-center cursor-pointer mb-5">
            <li
              className={`list-inline-item text-center cursor-pointer ${
                isActive === 0 && "active"
              }`}
              onClick={() => {
                filterProduct(0);
              }}
            >
              <Image
                src={"/images/Burger.png"}
                alt="burger"
                width={50}
                height={50}
                className="m-auto"
              />
              <h6 className="text-lg py-2 mb-0 font-weight-bold">BURGERS</h6>
            </li>
            <li
              className={`list-inline-item text-center cursor-pointer ${
                isActive === 1 && "active"
              }`}
              onClick={() => {
                filterProduct(1);
              }}
            >
              <Image
                src={"/images/Desserts.png"}
                alt="Desserts"
                width={50}
                height={50}
                className="m-auto"
              />
              <h6 className="text-lg py-2 mb-0 font-weight-bold">DESSERTS</h6>
            </li>
            <li
              className={`list-inline-item text-center cursor-pointer ${
                isActive === 2 && "active"
              }`}
              onClick={() => {
                filterProduct(2);
              }}
            >
              <Image
                src={"/images/Salads.png"}
                alt="Salads"
                width={50}
                height={50}
                className="m-auto"
              />
              <h6 className="text-lg py-2 mb-0 font-weight-bold">SALADS</h6>
            </li>
            <li
              className={`list-inline-item text-center cursor-pointer ${
                isActive === 3 && "active"
              }`}
              onClick={() => {
                filterProduct(3);
              }}
            >
              <Image
                src={"/images/sides.png"}
                alt="sides"
                width={50}
                height={50}
                className="m-auto"
              />
              <h6 className="text-lg py-2 mb-0 font-weight-bold">SIDES</h6>
            </li>
          </ul>
          <div className="productsList">
            <div
              className="container px-5 flex items-center justify-between"
              style={{ gap: "30px" }}
            >
              <ProductItemV1 />
            </div>
          </div>
        </div>
      </section>
      <section className="section2 text-center">
        <div className="container">
          <div className="info w-75 m-auto">
            <h2 className="text-brown mb-4">
              {" "}
              THE BURGER TASTES BETTER WHEN <br /> YOU EAT IT WITH YOUR FAMILY
            </h2>
            <p>
              Porta semper lacus cursus, feugiat primis ultrice a ligula risus
              auctor an tempus feugiat dolor lacinia cubiliaandrt curae integer
              orci congue and metus integer primis in integer metus
            </p>
            <br />
            <Button className="btn-red btn-lg no-radius">
              EXPLORE ALL MENU
            </Button>
          </div>
        </div>
      </section>
      <section className="section3 text-center bg-y py-5">
        <div className="container flex items-center justify-between">
          <div className="box w-[33%] p-5 text-center">
            <Image
              src={"/images/Recipe.png"}
              alt="burger"
              width={100}
              height={100}
            />
            <h2
              className="mt-4"
              style={{ fontSize: "25px", fontWeight: "bold" }}
            >
              ORIGINAL RECIPES
            </h2>
            <p className="mt-3">
              Porta semper lacus cursus, feugiat primis ultrice in ligula risus
              auctor tempus feugiat dolor impedit felis magna dolor vitae
            </p>
          </div>
          <div className="box w-[33%] p-5 text-center">
            <Image
              src={"/images/Food.png"}
              alt="burger"
              width={100}
              height={100}
            />
            <h2
              className="mt-4"
              style={{ fontSize: "25px", fontWeight: "bold" }}
            >
              QUALITY FOODS
            </h2>
            <p className="mt-3">
              Porta semper lacus cursus, feugiat primis ultrice in ligula risus
              auctor tempus feugiat dolor impedit felis magna dolor vitae
            </p>
          </div>
          <div className="box w-[33%] p-5 text-center">
            <Image
              src={"/images/Delievry.png"}
              alt="burger"
              width={100}
              height={100}
            />
            <h2
              className="mt-4"
              style={{ fontSize: "25px", fontWeight: "bold" }}
            >
              FASTEST DELEVERY
            </h2>
            <p className="mt-3">
              Porta semper lacus cursus, feugiat primis ultrice in ligula risus
              auctor tempus feugiat dolor impedit felis magna dolor vitae
            </p>
          </div>
        </div>
      </section>

            <div className="bg_row"></div>


      <section className="py-5">
        <div className="container text-center py-5">
          <h2 className="hd text-red">OUR CRAZY BURGERS</h2>
          <p className="mt-3">
            Aliquam a augue suscipit, luctus neque purus ipsum neque undo dolor{" "}
            <br /> primis libero tempus, blandit a cursus varius magna
          </p>
          <div
            className="productList grid grid-cols-4 mt-4"
            style={{ gap: "20px" }}
          >
            <ProductItemV2 />
            <ProductItemV2 />
            <ProductItemV2 />
            <ProductItemV2 />
          </div>
        </div>
      </section>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
