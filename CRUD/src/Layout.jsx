import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="p-4 bg-gray-700 flex gap-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/crud1">CRUD1</Link>
        <Link to="/crud2">CRUD2</Link>
      </nav>

      <main className="">
        {/* Child route will be rendered here */}
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
