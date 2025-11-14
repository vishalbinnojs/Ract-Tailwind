import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  console.log(todo);
  
  const [editingId,setEditingId] = useState(null);
  console.log(todos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        const data = await res.json();
        if (!res.ok) {
          alert("Unable to fetch data from API");
        } else {
          console.log(data);
          setTodos(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const addTodo = async () => {
if(!todo.trim()){
  alert("Enter some task first...!")
  return;
}

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          userId: 1,
          body: "new todo",
          title: todo.trim(),
        }),
      });

      if (!res.ok) {
        alert("Unable to add task right now.");
      }

      const newTodo = await res.json();
      
        console.log(newTodo);
        setTodos([newTodo,...todos]);
        setTodo("")
      
    } catch (error) {
      alert("Error adding task.", error);
    }
  };

const updateTodo = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
      method:"PUT",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({
        userId:1,
        id:id,
        title: todo.trim(),
        body:"updated todo"
      })
    })

    if (!res.ok) {
        throw new Error(`Failed to update item with id ${id}`);
      }
    const updatedTodo = await res.json();
  
    setTodos(todos.map((todo)=> todo.id === id ? updatedTodo : todo))
    setEditingId(null)
    setTodo('')
  } catch (error) {
    alert("Error updating task.", error);
  }
}


  const deleteTodo = async (id) =>{
    try{
 const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
  method:"DELETE"
 })
 if(!res.ok){
  alert("try again....!")
 }
 else{
  setTodos(todos.filter((todo)=> todo.id !== id))
 }
    }
    catch(err){
 console.error(`Delete failed:`, err);
    }
  }

  return (
    <>
      <h1 className="bg-[#242424] p-2 text-white text-center text-2xl font-bold">
        Testing
      </h1>

      <div className=" max-w-[30rem] mx-auto  rounded-2xl mt-4 ">
        <div className="fixed-wrapper sticky top-0 left-0 bg-black py-3 rounded-t-2xl">
        <h2 className="text-center text-white mb-4 text-xl font-bold ">Todo App</h2>
          <div className="ip-box flex justify-between gap-2 mb-4 px-2">
          <input
            className="flex-1 px-2 bg-white rounded   focus:border-blue-200 focus:border-4 border-double focus:outline-none"
            type="text"
            placeholder="Enter Task"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
          />
          <button 
          onClick={()=>editingId ? updateTodo(editingId) : addTodo()}
          className="px-2 py-1 rounded bg-green-400">{editingId ? "Update" : "Add"}</button>
        </div>
        </div>

        <ul className="space-y-2 p-2 bg-[#242424]">
          {todos.map((todo, i) => (
            <li key={i} 
               className="flex justify-between bg-[#444444] p-2 rounded-lg cursor-pointer transform hover:scale-101 transform-gpu " >
              <span>{todo.title}</span>
              <div className="flex gap-2">
                <button 
                  className="py-1 px-2 rounded bg-blue-300"
                onClick={()=>{
                  setEditingId(todo.id)
                  setTodo(todo.title)
                }}
                >
                  Edit
                  </button>
                <button className="py-1 px-2 rounded bg-red-300"
                onClick={(e)=>{
                  if(confirm("Are you sure...!")) deleteTodo(todo.id);
                }}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
