import {Routes, Route} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import GetStarted from "./Components/GetStarted";
import AboutUs from "./Components/AboutUs";
import Blog from "./Components/Blog";
import Careers from "./Components/Careers";
import Contact from "./Components/Contact";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
import Security from "./Components/Security";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Technology from "./Components/Technology";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/get-started" element={<GetStarted/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/careers" element={<Careers/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/privacy" element={<Privacy/>}/>
            <Route path="/terms" element={<Terms/>}/>
            <Route path="/security" element={<Security/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/features" element={<Features/>}/>
            <Route path="/technology" element={<Technology/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
    </>
  )
}

export default App;