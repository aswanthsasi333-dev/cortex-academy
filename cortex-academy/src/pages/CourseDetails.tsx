import { useParams } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageTransition from "../components/PageTransition";

const CourseDetails = () => {

  const { id } =
    useParams();

  const courseData = {

    mern: {
      title:
        "MERN Stack Development",
      description:
        "Learn MongoDB, Express, React & Node.js",

      lessons: [
        "HTML Basics",
        "CSS Fundamentals",
        "JavaScript",
        "React.js",
        "Node.js",
        "MongoDB",
      ],
    },

    ai: {
      title:
        "AI & Machine Learning",
      description:
        "Learn AI & Machine Learning",

      lessons: [
        "Python Basics",
        "NumPy",
        "Machine Learning",
        "Deep Learning",
        "Neural Networks",
      ],
    },

    uiux: {
      title:
        "UI/UX Design",
      description:
        "Master UI/UX Design",

      lessons: [
        "Figma Basics",
        "Wireframing",
        "Typography",
        "Color Theory",
        "Prototype Design",
      ],
    },

  };

  const course =
    courseData[
      id as keyof typeof courseData
    ];

  const storageKey =
    `course-progress-${id}`;

  const [completedLessons,
    setCompletedLessons] =
    useState<string[]>(
      JSON.parse(
        localStorage.getItem(
          storageKey
        ) || "[]"
      )
    );

  const toggleLesson =
    (
      lesson: string
    ) => {

      let updated =
        [...completedLessons];

      if (
        updated.includes(
          lesson
        )
      ) {

        updated =
          updated.filter(
            (
              item
            ) =>
              item !==
              lesson
          );

      } else {

        updated.push(
          lesson
        );

      }

      setCompletedLessons(
        updated
      );

      localStorage.setItem(
        storageKey,
        JSON.stringify(
          updated
        )
      );

    };

  if (!course) {

    return (
      <div className="text-white p-10">
        Course not found
      </div>
    );

  }

  const progress =
    Math.round(
      (
        completedLessons.length /
        course.lessons.length
      ) * 100
    );

  return (

    <PageTransition>

      <div className="flex bg-black text-white min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <Topbar />

          <h1 className="text-4xl font-bold mb-4">
            {course.title}
          </h1>

          <p className="text-gray-400 mb-8">
            {course.description}
          </p>

          {/* Progress */}

          <div className="mb-3 text-lg">
            Progress:
            {" "}
            {progress}%
          </div>

          <div className="w-full h-5 bg-zinc-800 rounded-full mb-10">

            <div
              className="
                bg-blue-600
                h-5
                rounded-full
                transition-all
                duration-500
              "
              style={{
                width:
                  `${progress}%`,
              }}
            />

          </div>

          {/* Lessons */}

          <div className="space-y-5">

            {course.lessons.map(
              (
                lesson,
                index
              ) => (

                <div
                  key={index}
                  className="
                    bg-zinc-900
                    p-6
                    rounded-2xl
                    flex
                    justify-between
                    items-center
                  "
                >

                  <div>

                    <h2 className="text-xl font-semibold">
                      Lesson {index + 1}
                    </h2>

                    <p className="text-gray-400 mt-1">
                      {lesson}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      toggleLesson(
                        lesson
                      )
                    }
                    className={`
                      px-5
                      py-3
                      rounded-xl
                      font-semibold
                      transition
                      ${
                        completedLessons.includes(
                          lesson
                        )
                          ? "bg-green-600"
                          : "bg-blue-600"
                      }
                    `}
                  >
                    {
                      completedLessons.includes(
                        lesson
                      )
                        ? "Completed ✅"
                        : "Mark Complete"
                    }
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

export default CourseDetails;