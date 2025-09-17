import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  // console.log(title)
  // console.log(posts)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        if (!res.ok) {
          alert("There is problem in fetching data from API ");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        // console.log(data)
        setPosts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const addPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: title.trim(),
        body: "New Post Content",
        userId: 1,
      }),
    })
      .then((res) => res.json())
      .then((newPost) => {
        console.log(newPost);
        setPosts([newPost, ...posts]);
        setTitle("");
      })
      .catch((err) => alert(`There is problem in adding new post,${err}`));
  };

  const updatePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        id: id,
        title: title.trim(),
        body: "Updated Content",
      }),
    })
      .then((res) => res.json())
      .then((updatedPost) => {
        setEditingId(null);

        setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
        setTitle("");
      })
      .catch((err) =>
        alert("This API does not update post with id greater than 100", err)
      );
  };

  const deletePost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
      setTimeout(()=>{
         alert("deleted")
      },10)
    });
  };

  return (
    <>
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-xl text-center font-bold mb-4">
          CRUD EXAMPLE (fetch)
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            className="p-2  flex-1 rounded border-4 border-double focus:outline-none"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your post"
          />
          <button
            className="bg-green-500 px-4 text-white rounded"
            onClick={() => (editingId ? updatePost(editingId) : addPost())}
          >
            {editingId ? `Update` : "Add"}
          </button>
        </div>

        <ul className="space-y-2 ">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border p-3 flex justify-between items-center rounded"
            >
              <span>{post.title}</span>
              <div className="flex gap-2 text-white">
                <button
                  className="bg-yellow-600 px-2 py-1 rounded"
                  onClick={() => {
                    setEditingId(post.id);
                    setTitle(post.title);
                  }}
                >
                  {post.id} Edit
                </button>

                <button
                  className="bg-red-500 px-2 py-1 rounded"
                  onClick={() => {
                    if (confirm("Are you sure...!")) deletePost(post.id);
                  }}
                >
                  Delete {post.id}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

// import {useState,useEffect} from "react";

// const App = () => {
//   const [posts,setPosts] = useState([]);
//   const [title, setTitle] = useState("");
//   const [editingId, setEditingId] = useState(null);
//   console.log(title)
//   console.log(posts)

//   //fetching data from api{READ}
//   useEffect(() => {
//   fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//   .then(res => res.json())
//   .then(data => {

//     console.log(data)
//     setPosts(data)  // this update the posts array with fake posts fetch from the api
//   })
//   .catch(err=>console.error(err));
// }, []);

// // Create Add a New Post {CREATE}
// const addPost = () =>{
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers:{ "Content-type" : "application/json" },
//   body : JSON.stringify({
//     title:title, // key(title) is api key and right title is variable used
//     body:"New post content",
//     userId:1,
//   })
// })
// .then(res => res.json())
// .then(newPost => {
//   setPosts([newPost, ...posts]); // add new post at top
//   setTitle("");  // clear input field
// })
// }

// // Update the post {UPDATE}
// const updatePost =(id)=>{
// fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//   method:"PUT",
//   headers:{ "Content-type" : "application/json" },
//   body:JSON.stringify({
//     id,
//     title:title,
//     body:"Updated content",
//     userId: 1,})
// })
// .then(res => res.json())
// .then(updatedPost => {
//   setPosts(posts.map(post=>(post.id === id ? updatedPost : post)));
//   setEditingId(null); //exit editing mode
//   setTitle(""); // set input empty
// });
// }

// // Delete the post {DELETE}
//     const deletePost = (id)=>{
//       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//         method:"DELETE",
//       })
//       .then(()=>setPosts(posts.filter(post => post.id !== id)))
//     }

//   return (
//     <>
//     <div className="p-6 max-w-lg mx-auto border">
//       <h2 className="text-xl font-bold mb-4">REACT CRUD EXAMPLE (fetch)</h2>
//      <div className="flex gap-2 mb-4">
//       <input className="border p-2 flex-1"
//       value={title}
//       onChange={(e)=>setTitle(e.target.value)}
//       placeholder="Enter Your Text"/>
//       <button className="bg-green-500 px-4 py-2 text-white rounded"
//       onClick={()=>(editingId ? updatePost(editingId) : addPost())}>
//         {editingId ? "Update" : "Add"}
//         </button>
//      </div>

//      <ul className = "space-y-2">
//       {posts.map((post)=>(
//         <li key={post.id} className="border p-3 flex justify-between items-center rounded">
//           <span>{post.title}</span>
//           <div className="flex gap-2 text-white">
//             <button className="bg-yellow-500 px-2 py-1 rounded"
//             onClick={()=>{
//               setEditingId(post.id)
//               setTitle(post.title)
//             }}>Edit</button>
//             <button className="bg-red-500 px-2 py-1 rounded"
//             onClick={()=> deletePost(post.id)}
//             >Delete</button>
//           </div>
//         </li>
//       ))}
//      </ul>
//     </div>
//     </>
//   )
// };

// export default App;
