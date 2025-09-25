import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";


export const Footer = () => {
  return (
    <>
    <section className="section deliverySection w-[100%] flex items-center justify-center">
        <div className="container text-center">
          <div className="w-75 m-auto">
            <h4 className="text-brown">WE GUARANTEE</h4>
            <h2 className="text-brown">30 Minutes Delivery!</h2>
            <p className="text-brown">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis <br/> libero tempus, blandit a cursus varius luctus neque
              magna
            </p>
            <Button className="btn-red btn-lg no-radius">
              CALL: 720-611-1276
            </Button>
          </div>
        </div>
      </section>
    <footer>
      <div className="container text-center">
        <Image
          src={"/images/logo.jpg"}
          alt="logo"
          width={100}
          height={100}
          className="logo m-auto mb-4"
        />
        <ul className="list list-inline mb-3 text-center mt-4">
          <li className="list-inline-item">
            <Link href={"/"} target="_blank">
              <FaFacebookF />
            </Link>
          </li>
          <li className="list-inline-item">
            <Link href={"/"} target="_blank">
              <FaTwitter />
            </Link>
          </li><li className="list-inline-item">
            <Link href={"/"} target="_blank">
              <FaLinkedin />
            </Link>
          </li><li className="list-inline-item">
            <Link href={"/"} target="_blank">
              <FaInstagramSquare />
            </Link>
          </li><li className="list-inline-item">
            <Link href={"/"} target="_blank">
              <FaYoutube />
            </Link>
          </li>
        </ul>
        <ul className="list list-inline mb-3 text-center">
          <li className="list-inline-item">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="list-inline-item">
            <Link href={"/"}>About</Link>
          </li>
          <li className="list-inline-item">
            <Link href={"/"}>Our Menu</Link>
          </li>
          <li className="list-inline-item">
            <Link href={"/"}>Shop</Link>
          </li>
          <li className="list-inline-item">
            <Link href={"/"}>Blog</Link>
          </li>
          <li className="list-inline-item">
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </footer>
    </>
  );
};
