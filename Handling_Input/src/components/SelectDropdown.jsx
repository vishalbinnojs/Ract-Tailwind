import React, { useState } from "react";

const SelectDropdown = () => {
  // const [payment,setPayment] = React.useState('')
  // console.log(payment);

  // const [selectedCountry,setSelectedCountry] = useState("")
  // const countries = ["India", "NewZealand","Austria", "UAE", "Norway","Egypt"]
  // console.log(selectedCountry);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity,setSelectedCity] = useState("")
  console.log(selectedCountry);
  console.log(selectedCity);
  
  

  const data = {
    India: ["Kolkata", "Mumbai", "Chennai", "Bangalore"],
    Australia: ["Sydney", "Adelaide", "Brisbane", "Canberra", "Melbourne"],
    Japan: ["Tokyo", "kyoto", "Osaka", "Hiroshima", "Nagasaki"],
    Spain: ["Barcelona", "Madrid", "Valencia", "Seville"],
  };
  return (
    <div className="flex  flex-col gap-4 justify-center items-center h-screen select-none bg-amber-400 ">
      {/* <select  value={payment} onChange={(e)=> setPayment(e.target.value)}>
            <option value="">Select Option--</option>
            <option value="upi">UPI</option>
            <option value="cod">COD</option>
            <option value="card">Credit Card</option>
        </select> */}

      {/* <select value={selectedCountry} onChange={(e)=> setSelectedCountry(e.target.value)}>
            <option value="">Select a Country</option>
            {countries.map((country,i)=>(
                <option key={i} value={country}>{country.toUpperCase()}</option>
            ))}
        </select> */}

        {/* Dependent Select(Cascading) */}
      <select
        value={selectedCountry}
        onChange={(e) => {setSelectedCountry(e.target.value)
        setSelectedCity("")
    }}
      >
        <option value="">Select Country</option>
        {Object.keys(data).map((country, i) => (
          <option key={i} value={country}>
            {country.toUpperCase()}
          </option>
        ))}

      </select>
        {selectedCountry && (
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">Select City</option>
                {data[selectedCountry].map((city,i)=>(
                    <option key={i} value={city}>{city.toUpperCase()}</option>
                ))}
            </select>
        )}
        <p>Country: {selectedCountry}</p>
        <p>City: {selectedCity}</p>
    </div>
  );
};

export default SelectDropdown;
