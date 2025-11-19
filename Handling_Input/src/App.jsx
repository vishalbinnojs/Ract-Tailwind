
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Layout from "./Layout"
import Controlled from './components/Controlled'
import Uncontrolled from './components/Uncontrolled'
import Multiple_Inputs from './components/Multiple_Inputs'
import Checked from "./components/Checked"
import CheckedAll from "./components/CheckedAll"
import Radio from "./components/Radio"
import Form from "./components/Form"
import RadioGrouped from "./components/RadioGrouped"
import SelectDropdown from "./components/SelectDropdown"

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
      <Route path="checked" element={<Checked />} />
      <Route path="checkedAll" element={<CheckedAll />} />
      <Route path="form" element={<Form />} />
      <Route path="radio" element={<Radio />} />
      <Route path="radioGrouped" element={<RadioGrouped />} />
      <Route path='selectDropdown' element = {<SelectDropdown />} />
    </Route>
  </Routes>
</Router>   
    </>
  )
}

export default App
