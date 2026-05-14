import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageTransition from "../components/PageTransition";

const Jobs = () => {

  const jobs = [
    {
      title:
        "Frontend Developer",
      company:
        "Google",
      location:
        "Bangalore",
      salary:
        "₹8 LPA",
      type:
        "Full Time",
    },

    {
      title:
        "AI/ML Engineer",
      company:
        "Microsoft",
      location:
        "Hyderabad",
      salary:
        "₹12 LPA",
      type:
        "Full Time",
    },

    {
      title:
        "UI/UX Designer",
      company:
        "Adobe",
      location:
        "Remote",
      salary:
        "₹6 LPA",
      type:
        "Remote",
    },

    {
      title:
        "React Developer",
      company:
        "Infosys",
      location:
        "Kochi",
      salary:
        "₹5 LPA",
      type:
        "Internship",
    },
  ];

  return (

    <PageTransition>

      <div className="flex bg-black text-white min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <Topbar />

          <h1 className="text-4xl font-bold mb-8">
            Jobs 💼
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            {jobs.map(
              (
                job,
                index
              ) => (

                <div
                  key={index}
                  className="
                    bg-zinc-900
                    rounded-2xl
                    p-6
                    hover:scale-105
                    transition
                  "
                >

                  <h2 className="text-2xl font-bold">
                    {job.title}
                  </h2>

                  <p className="text-gray-400 mt-2">
                    {job.company}
                  </p>

                  <div className="mt-4 space-y-2 text-gray-300">

                    <p>
                      📍
                      {" "}
                      {job.location}
                    </p>

                    <p>
                      💰
                      {" "}
                      {job.salary}
                    </p>

                    <p>
                      🕒
                      {" "}
                      {job.type}
                    </p>

                  </div>

                  <button
                    className="
                      mt-6
                      bg-blue-600
                      px-6
                      py-3
                      rounded-xl
                      font-semibold
                    "
                  >
                    Apply Now
                  </button>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </PageTransition>

  );

};

export default Jobs;