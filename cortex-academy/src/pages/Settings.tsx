import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageTransition from "../components/PageTransition";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Settings = () => {

  const navigate =
    useNavigate();

  const [notifications,
    setNotifications] =
    useState(true);

  const handleLogout =
    () => {

      localStorage.removeItem(
        "user"
      );

      navigate(
        "/login"
      );

    };

  return (

    <PageTransition>

      <div className="flex bg-black text-white min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <Topbar />

          <h1 className="text-4xl font-bold mb-8">
            Settings ⚙️
          </h1>

          <div className="bg-zinc-900 rounded-2xl p-8 max-w-3xl space-y-8">

            {/* Theme */}

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-xl font-semibold">
                  Dark Mode
                </h2>

                <p className="text-gray-400">
                  Premium dark UI enabled
                </p>

              </div>

              <button
                className="
                  bg-green-600
                  px-5
                  py-2
                  rounded-xl
                "
              >
                Enabled
              </button>

            </div>

            {/* Notifications */}

            <div className="flex justify-between items-center">

              <div>

                <h2 className="text-xl font-semibold">
                  Notifications
                </h2>

                <p className="text-gray-400">
                  Job & course alerts
                </p>

              </div>

              <button
                onClick={() =>
                  setNotifications(
                    !notifications
                  )
                }
                className={`
                  px-5
                  py-2
                  rounded-xl
                  ${
                    notifications
                    ? "bg-green-600"
                    : "bg-red-600"
                  }
                `}
              >
                {
                  notifications
                  ? "ON"
                  : "OFF"
                }
              </button>

            </div>

            {/* Account */}

            <div className="border-t border-zinc-700 pt-6">

              <h2 className="text-xl font-semibold mb-4">
                Account
              </h2>

              <button
                onClick={
                  handleLogout
                }
                className="
                  bg-red-600
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </PageTransition>

  );

};

export default Settings;