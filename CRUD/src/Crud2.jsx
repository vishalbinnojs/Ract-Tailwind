import React, { useState, useEffect, useRef } from "react";

const Crud2 = () => {
  const [details, setDetails] = useState([]);
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef(null);
  console.log(details);

  useEffect( () => {
    const fetchData = async () =>{
      try {

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/albums?_limit=12"
        );
        
        if (!res.ok) {
          throw new Error("Failed to fetch data from API");
        }
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error("Failed to fetch data...!",err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingId]);

  const addDetails = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          body: "New Album Content",
          userId: 1,
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to add items`);
      }

      const newDetail = await res.json();
      setDetails([newDetail, ...details]);
      setTitle("");
    } catch (err){
      console.error("Failed to add....!", err);
    }
  };

  const startEditing = (id, title) => {
    setEditingId(id);
    setEditTitle(title);
  };

  const updateContent = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {
          method: "PUT", // or PATCH if you're only updating title
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id,
            title: editTitle.trim(),
            body: "Updated content",
            userId: 1,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to update item with id ${id}`);
      }

      const updatedDetails = await res.json();

      setDetails(
        details.map((item) => (item.id === id ? updatedDetails : item))
      );

      setEditingId(null);
      setEditTitle("");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Id limit exceeded in database");
    }
  };

  const deleteDetails = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: "DELETE",
      });
      setDetails(details.filter((item) => item.id != id));
      setTimeout(() => {
        alert("Deleted Successfully...")
      }, 10);
    } catch (err) {
      console.error(`Delete failed:`, err);
    }
  };

  return (
    <>
      <div className="w-full bg-green-100 border">
        <h2 className="font-bold text-center p-2 text-2xl">
          Album Id with Title
        </h2>
        <div className="max-w-lg mx-auto p-2 flex justify-between items-center gap-3 ">
          <input
            className="flex-1 px-3 py-2 rounded border-4 border-double focus:outline-none focus:border-green-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter New Title"
          />
          <button
            className="text-white rounded px-3 py-2 bg-green-500"
            onClick={() => {
              if (title === "") {
                alert("Enter Something.....");
              } else {
                addDetails();
              }
            }}
          >
            Add
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {details.map((item) => (
            <div
              key={item.id}
              className=" p-4 sm:max-w-96 w-full border  min-h-48 bg-slate-800 rounded-lg"
              onClick={() => {
                setEditingId(null);
                setTitle("");
              }}
            >
              <span className="block text-center text-white w-10 mx-auto p-2 font-bold">
                {item.id}
              </span>

              {editingId === item.id ? (
                <input
                  className="w-full px-2 py-1 rounded"
                  ref={inputRef}
                  value={editTitle}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => {
                    setEditTitle(e.target.value);
                  }}
                />
              ) : (
                <h5 className="text-center text-2xl text-pretty text-orange-400 ">
                  {item.title}
                </h5>
              )}

              <div className="mt-6 flex justify-center gap-3 text-white">
                {editingId === item.id ? (
                  <button
                    className="px-3 py-2 rounded bg-green-400"
                    onClick={() => {
                      if (editTitle === "") alert("Enter something....!");
                      updateContent(item.id);
                    }}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="px-3 py-2 rounded bg-yellow-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      startEditing(item.id, item.title);
                    }}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="px-3 py-2 rounded bg-red-400"
                  onClick={() => {
                    if (confirm("Are You Sure..!")) deleteDetails(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Crud2;
