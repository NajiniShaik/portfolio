import {Route, Routes} from 'react-router-dom';
import './App.css'


import { useContext,useEffect} from "react";
import { dataContext } from "./Context/index.jsx"

import Portfolio from './components/Portfolio/index.jsx'
import SignIn from "./components/SignIn/index.jsx"
import SignUp from "./components/SignUp/index.jsx"

const App = () => {

  const { theme} = useContext(dataContext);

  useEffect(() => {
  if (theme === "light") {
    document.body.classList.remove("dark-theme-body");
    document.body.classList.add("light-theme-body");
  } else {
    document.body.classList.remove("light-theme-body");
    document.body.classList.add("dark-theme-body");
  }
}, [theme]);


  return(
  <Routes>
    <Route path="/portfolio/" element={<SignIn/>} />
    <Route exact path="/portfolio/signin" element={<SignIn/>} />
    <Route exact path="/portfolio/signup" element={<SignUp/>} />
    <Route exact path="/portfolio/page" element={<Portfolio/>} />
  </Routes>
)

}
export default App;
