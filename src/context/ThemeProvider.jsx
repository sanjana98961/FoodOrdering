"use client"
import React, { useState } from 'react'
import { MyContext } from './ThemeContext'

function ThemeProvider({children}) {
   const [name, setName] = useState("sanjana")
    const values ={
        name
    }
  return (
    <MyContext.Provider value= {values}>
        
        {children}
    </MyContext.Provider>
  )
}

export default ThemeProvider;