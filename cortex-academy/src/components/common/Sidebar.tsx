import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div className="w-64 bg-zinc-900 p-5 border-r border-zinc-800">

      <h1 className="text-2xl font-bold text-blue-500 mb-10">
        Cortex
      </h1>

      <nav className="flex flex-col gap-4">

        <Link to="/home">Dashboard</Link>

        <Link to="/courses">Courses</Link>

        <Link to="/resume">Resume Builder</Link>

        <Link to="/ats">ATS Checker</Link>

        <Link to="/jobs">Job Matches</Link>

        <Link to="/settings">Settings</Link>

      </nav>

    </div>
  );
}