const Topbar = () => {

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  return (
    <div className="flex justify-between items-center mb-8">

      <div>
        <h1 className="text-4xl font-bold">
          Welcome,
          {" "}
          {user.name || "User"} 👋
        </h1>

        <p className="text-gray-400 mt-2">
          Continue learning today
        </p>
      </div>

      <div className="bg-zinc-900 px-5 py-3 rounded-xl">
        {user.email || "No Email"}
      </div>

    </div>
  );
};

export default Topbar;