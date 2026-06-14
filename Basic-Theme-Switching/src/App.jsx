import { createContext, useContext, useState } from 'react';
import ThemeContext from './theme-example/ThemeContext';
import Toolbar from './theme-example/Toolbar';

function App() {
const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Toolbar />
      </ThemeContext.Provider>
    </>
  )
}

export default App
