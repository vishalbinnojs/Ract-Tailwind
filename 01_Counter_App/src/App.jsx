import { Routes, Route, useLocation} from "react-router-dom";
import './App.css'
import Counter from "./components/Counter"
import Babbel from "./components/Babbel/Babbel"
import About from "./components/About"
function App() {
 const location = useLocation();
 console.log(location)
 const hidepath = ["/"];
 const shouldHideAbout = hidepath.includes(location.pathname);
console.log(shouldHideAbout)

  return (
    <>
    { !shouldHideAbout && <About/>}
    
    <Routes>
      <Route path="/" element={<Counter />}/>
      <Route path="/babble" element={<Babbel />}/>
    </Routes>
    
 
    </>
  )
}

export default App;
