"use client";
import { ProductItemV1 } from "@/components/Product_Item_V1";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { InnerBanner } from "@/components/InnerBanner";

const Menu = () => {
    const [isActive, setIsActive] = useState(0);
      const filterProduct = (id) => {
        setIsActive(id);
      };
  return (
    <>
    <InnerBanner title="OUR MENU" bg = "/images/menu.jpg"/>
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
                  <ProductItemV1 />
                  <ProductItemV1 />
                  <ProductItemV1 />
                  <ProductItemV1 />

                </div>
              </div>
            </div>
          </section>
    </>
  );
};

export default Menu;
