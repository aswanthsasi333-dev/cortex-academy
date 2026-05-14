import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-950">
      <h1 className="text-2xl font-bold text-blue-500">
        Cortex Academy
      </h1>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}