import "./App.css";
import UserCard from "./UserCard";

function App() {
  // Array of arrays
  const arr = [
    ["Html", "css", "JavaScript", "React"],
    ["MongoDB", "MySQl", "AWS", "Postgre-SQL"],
  ];
  const arrayOfObj = [
    { id: 1, name: "vishal", role: "developer",age:24 },
    { id: 2, name: "Mukul", role: "designer",age:25 },
    { id: 3, name: "vishal", role: "BDE",age:21 },
    { id: 4, name: "Akash", role: "junior developer",age:17 },
    { id: 4, name: "Akriti", role: "HR",age:19 }
  ];

  return (
    <>
      <h1>List Rendering... Array of Arrays</h1>
      {arr.map((array, i) => {
        return (
          <ul key={i}>
            {array.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
      })}
      <h1>List Rendering... Array of Objects</h1>
      {arrayOfObj.map((obj, i) => {
        return (
          <ul style={{ background: "brown" }} key={i}>
            <li>{obj.id}</li>
            <li>{obj.name}</li>
            <li>{obj.role}</li>
          </ul>
        );
      })}

      {arrayOfObj.map((obj, i) => {
        // return <UserCard key={i} user={obj} />;
        return obj.age > 20 ? <UserCard key={i} user={obj} /> : null;  
        //Conditional Rendering using List Rendering
      })}
    </>
  );
}

export default App;
