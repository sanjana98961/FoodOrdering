import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='left-0 top-0 w-[100%] fixed z-[100] py-4'>
        <div className='container flex items-center justify-between'>
            <div className='logo'>
                <Link href={"/"}>
                    <Image style={{borderRadius:"100px"}} src={"/images/logo.jpg"} alt='logo' width={"80"} height={"70"}></Image>
                </Link>
            </div>
            <div className='ml-auto flex items-center justify-end' style={{gap:"15px"}}>
                <nav>
                    <ul className='list-none mb-0' style={{display:"flex", alignItems:"center", gap:"17px"}}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Our Menu</Link></li>
                        <li><Link href="/">Shop</Link></li>
                        <li><Link href="/">Blog</Link></li>
                        <li><Link href="/">Contact Us</Link></li>
                    </ul>
                </nav>
                <span className='text-y mobile'>+91 7206111276</span>
            </div>
        </div>
         
    </header>
  )
}

export default Header