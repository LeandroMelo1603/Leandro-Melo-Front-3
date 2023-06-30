import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { routes } from "./Components/utils/routes";
import Detail from "./Routes/Detail";
import { useEffect } from "react";
import { useContextGlobal } from "./Components/utils/global.context";



function App() {

  const { dentState } = useContextGlobal();



  useEffect(() => {
    if (dentState.theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [dentState.theme]);


  return (
      
      <div className="App">
          <Navbar/>
          <Routes>
          
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favourite} element={<Favs/>}/>
            <Route path={routes.detailDentist} element={<Detail/>}/>

          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
