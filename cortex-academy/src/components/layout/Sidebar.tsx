import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate =
    useNavigate();

  const [open,
    setOpen] =
    useState(false);

  const menuItems = [
    {
      name:
        "Dashboard",
      icon:
        "🏠",
      path:
        "/home",
    },

    {
      name:
        "Courses",
      icon:
        "📚",
      path:
        "/courses",
    },

    {
      name:
        "Resume",
      icon:
        "📄",
      path:
        "/resume",
    },

    {
      name:
        "Jobs",
      icon:
        "💼",
      path:
        "/jobs",
    },

    {
      name:
        "Profile",
      icon:
        "👤",
      path:
        "/profile",
    },

    {
      name:
        "Settings",
      icon:
        "⚙️",
      path:
        "/settings",
    },
  ];

  return (

    <>

      {/* Mobile Button */}

      <button
        onClick={() =>
          setOpen(
            !open
          )
        }
        className="
          md:hidden
          fixed
          top-5
          left-5
          z-50
          bg-blue-600
          p-3
          rounded-xl
        "
      >
        ☰
      </button>

      {/* Sidebar */}

      <div
        className={`
          fixed
          md:relative
          top-0
          left-0
          h-screen
          w-[260px]
          bg-zinc-950
          border-r
          border-zinc-800
          p-5
          z-40
          transition-transform
          duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        <h1 className="text-2xl font-bold text-blue-500 mb-10">
          Cortex Academy
        </h1>

        <div className="space-y-4">

          {menuItems.map(
            (
              item,
              index
            ) => (

              <button
                key={index}
                onClick={() => {

                  navigate(
                    item.path
                  );

                  setOpen(
                    false
                  );

                }}
                className="
                  w-full
                  p-4
                  bg-zinc-900
                  rounded-xl
                  hover:bg-blue-600
                  transition
                  text-left
                "
              >

                {item.icon}
                {" "}
                {item.name}

              </button>

            )
          )}

        </div>

      </div>

    </>

  );

};

export default Sidebar;