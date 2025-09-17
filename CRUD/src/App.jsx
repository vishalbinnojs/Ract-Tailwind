// import React from "react";
// import {Routes,Route} from "react-router-dom";
// import Crud1 from "./Crud1"
// import Crud2 from "./Crud2"

// const App = () => {
//   return (
//     <>
//     <Routes>
//       <Route path="/" element={<Crud1 />} />
//       <Route path="/crud2" element={<Crud2 />} />
//     </Routes>

//     </>
//   )
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Crud1 from "./Crud1";
import Crud2 from "./Crud2";

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="crud1" element={<Crud1 />} />
          <Route path="crud2" element={<Crud2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
