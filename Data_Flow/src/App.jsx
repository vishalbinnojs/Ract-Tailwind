import {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

function App() {
  const [state,setState] = useState(0);
  console.log(state);
  
  return (
    <>
      <h1 className="py-4 text-green-600 text-4xl font-bold text-center underline underline-offset-8">
        Data Flow
      </h1>
      <Header />
      <Layout data={state}/>
      <Footer />
      <button onClick = {()=>setState((c)=> c+5)} className="block mt-[1rem] mx-auto w-[12rem] py-2 px-4 bg-green-500 text-xl font-bold rounded-full cursor-pointer hover:bg-amber-500 duration-300">Change Data</button>
    </>
  );
}
export default App;
