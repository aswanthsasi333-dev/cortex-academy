import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import DashboardChart from "../components/DashboardChart";
import PageTransition from "../components/PageTransition";

const Home = () => {

  const user = JSON.parse(
    localStorage.getItem(
      "user"
    ) || "{}"
  );

  const stats = [
    {
      title: "Courses",
      value: "12",
      icon: "📚",
    },

    {
      title: "Completed",
      value: "5",
      icon: "✅",
    },

    {
      title: "Certificates",
      value: "2",
      icon: "🏆",
    },

    {
      title: "Progress",
      value: "78%",
      icon: "📈",
    },
  ];

  return (

    <PageTransition>

      <div className="flex bg-black text-white min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <Topbar />

          <h2 className="text-2xl text-gray-400 mb-8">

            Welcome back,
            {" "}
            {user.email}

          </h2>

          {/* Stats */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            {stats.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="
                    bg-zinc-900
                    rounded-2xl
                    p-6
                  "
                >

                  <div className="text-4xl">
                    {item.icon}
                  </div>

                  <h2 className="text-gray-400 mt-4">
                    {item.title}
                  </h2>

                  <h1 className="text-4xl font-bold mt-2">
                    {item.value}
                  </h1>

                </div>

              )
            )}

          </div>

          <DashboardChart />

        </div>

      </div>

    </PageTransition>

  );

};

export default Home;