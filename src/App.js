import {BrowserRouter ,Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home";
import LearnACCA from "./components/LearnACCA"
import WhyChooseUs from "./components/WhyChooseUs"
import PlacementInfo from "./components/PlacementInfo"
import PlacementContainer from "./components/Kick"

const App  = ()=>(
 <>
 <Header />
  <Home />
  <WhyChooseUs />
  <LearnACCA />
  <PlacementInfo />
  <PlacementContainer />
 </>
)
export default App;
