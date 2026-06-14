import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function ThemeButton(){
  const {theme, setTheme} = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} style={{backgroundColor: theme === "light" ? "#fff" : "#000", color: theme === "light" ? "#333" : "#fff", width: "150px"}}>Current Theme : {theme}</button>

  );
}