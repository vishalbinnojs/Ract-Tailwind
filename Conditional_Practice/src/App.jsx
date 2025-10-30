import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import Popup from "./components/Pop-up/Popup";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Parent Route */}
          <Route path="/" element={<Layout />}>
            {/* Child Routes */}
            <Route index element={<Home />} />
            <Route path="popup" element={<Popup />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
