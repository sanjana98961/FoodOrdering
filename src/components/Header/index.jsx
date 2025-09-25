"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { MdOutlinePhone } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Button } from '@mui/material';


function Header() {

    const headerRef = useRef();
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
        let position = window.pageYOffset;
        if(headerRef.current) {
            if(position>200) {
                headerRef.current.classList.add("scroll");
            } else {
                headerRef.current.classList.remove("scroll");
            }
        }
    })
  },[])
  return (
    <header className='left-0 top-0 w-[100%] fixed z-[100] duration-300 pt-2' ref={headerRef}>
        <div className='container flex items-center justify-between'>
            <div className='logo'>
                <Link href={"/"}>
                    <Image style={{borderRadius:"100px"}} src={"/images/logo.jpg"} alt='logo' width={"80"} height={"70"}></Image>
                </Link>
            </div>
            <div className='ml-auto flex items-center justify-end' style={{gap:"15px"}}>
                <nav>
                    <ul className='list-none mb-0' style={{display:"flex", alignItems:"center", gap:"25px"}}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/menu">Our Menu</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                <span className='text-y mobile'><MdOutlinePhone/>7206111276</span>
                <Link href={"/cart"} className='relative cartTab mb-2'><LiaShoppingBagSolid/><span className='flex items-center justify-center rounded-full'>0</span></Link>
                <Link href={"/signIn"} >
                <Button className='btn-white mb-2 ml-2'>SIGN IN</Button>
                </Link>
            </div>
        </div>
         
    </header>
  )
}

export default Header