import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageTransition from "../components/PageTransition";

const Courses = () => {

  const navigate =
    useNavigate();

  const courses = [
    {
      id: "mern",
      title:
        "MERN Stack Development",
      description:
        "Learn MongoDB, Express, React & Node.js",
      emoji: "💻",
    },

    {
      id: "ai",
      title:
        "AI & Machine Learning",
      description:
        "Learn AI, ML & Deep Learning",
      emoji: "🧠",
    },

    {
      id: "uiux",
      title:
        "UI/UX Design",
      description:
        "Master UI/UX Design",
      emoji: "🎨",
    },
  ];

  return (

    <PageTransition>

      <div className="flex bg-black text-white min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <Topbar />

          <h1 className="text-4xl font-bold mb-10">
            Courses 📚
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {courses.map(
              (
                course
              ) => (

                <div
                  key={course.id}
                  className="
                    bg-zinc-900
                    rounded-2xl
                    p-6
                    hover:scale-105
                    transition
                    cursor-pointer
                  "
                  onClick={() =>
                    navigate(
                      `/course/${course.id}`
                    )
                  }
                >

                  <div className="text-5xl mb-4">
                    {course.emoji}
                  </div>

                  <h2 className="text-2xl font-bold">
                    {course.title}
                  </h2>

                  <p className="text-gray-400 mt-3">
                    {course.description}
                  </p>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </PageTransition>

  );

};

export default Courses;