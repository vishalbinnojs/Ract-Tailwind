
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Layout from "./Layout"
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'
import Multiple_Inputs from './components/Multiple_Inputs'


function App() {


  return (
    <>
<Router>
  <Routes>
    {/* Parent Route */}
    <Route path="/" element={<Layout />}>
      {/* Child Routes */}
      <Route path="controlled" element={<Controlled />}/>
      <Route path="uncontrolled" element={<Uncontrolled />}/>
      <Route path="multipleInputs" element={<Multiple_Inputs />} />
    </Route>
  </Routes>
</Router>
    </>
  )
}

export default App
