// App.jsx
import Branding from "./Branding";
import ConversionRateOptimization from "./Conversion";
import DigitalMarketing from "./Digital";

import ARDigitalSolution from "./File2";
import GoHighLevelCRM from "./goHigh";
import ManagedHosting from "./Hosting";

import WebDesignDevelopment from "./Web";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


function AppRouter() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<ARDigitalSolution/>}/>
      <Route path="/hosting" element={<ManagedHosting/>}/>
      <Route path="/gohigh" element={<GoHighLevelCRM/>}/>
      <Route path="/digitalmarketing" element={<DigitalMarketing/>}/>

      
      <Route path="/webdesign" element={<WebDesignDevelopment/>}/>
      <Route path="/conversionrate" element={<ConversionRateOptimization/>}/>
      <Route path="/webdesign" element={<WebDesignDevelopment/>}/>
       <Route path="/branding&logodesign" element={<Branding/>}/>




     


 


    </Routes>
   </Router>
  );
}

export default AppRouter;


