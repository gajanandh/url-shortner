import React,{createContext}from 'react'
import { useState } from 'react'

export const themeContext = createContext();

function ThemeContextProvider (props){
    const [theme,setTheme] = useState('dark')




    return(
        <themeContext.Provider value = {{theme,setTheme}}>
            {props.children}
        </themeContext.Provider>
    )
}
 export default ThemeContextProvider