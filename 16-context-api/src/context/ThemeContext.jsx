import { createContext, useState } from "react"

export const ThemeDataContext =createContext()

const ThemeContext = (props) => {
  const [them, setTheme] = useState('light')


  return (
    <div>
      <ThemeDataContext.Provider value={[them,setTheme]}>
         {props.children}
      </ThemeDataContext.Provider>

  
    </div>
  )
}

export default ThemeContext