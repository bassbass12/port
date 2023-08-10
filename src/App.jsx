import React, { useContext } from "react"
import Intro from "./components/intro/intro"
import About from "./components/about/about"
import ProductList from "./components/productlist/productList"
import Contact from "./components/contact/Contact"
import Toggle from "./components/toggle/Toggle"

import { ThemeContext } from "./context";
const App=()=> {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div style={
      {background:darkMode ? "#222": "white", color: darkMode && "white"}
    }
    >
      <Toggle/> 
      <Intro/>  
      <About/>
      <ProductList />
      <Contact/>
      </div>
  );
}

export default App
