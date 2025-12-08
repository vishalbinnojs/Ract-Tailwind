import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home"
import About from "./components/About"
import A1 from "./components/A1"
import A2 from "./components/A2"
import Services from "./components/Services"
import DetailedServices from "./components/DetailedServices";
import Help from "./components/Help"
function App() {

  console.log(window.history)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} >
          <Route path="a1" element={<A1 />}/>
          <Route path="a2" element={<A2 />}/>
          </Route>
          <Route path="/services" element={<Services />} />
          {/* DetailedServices for Dynamic Routing */}
          <Route path="/services/:id" element={<DetailedServices />} /> 
          {/* Using Navigate component we can redirect help page to about page and if we use replace prop/attribute then it will skip the navigation history of help route in the browser*/}
          <Route path="/help" element={<Navigate to={'/about'} replace/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
