import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageTransition from "../components/PageTransition";
import jsPDF from "jspdf";

const Resume = () => {

  const [resumeData,
    setResumeData] =
    useState({
      name: "",
      email: "",
      phone: "",
      skills: "",
      education: "",
      experience: "",
    });

  const handleChange =
    (
      e: React.ChangeEvent<
        HTMLInputElement |
        HTMLTextAreaElement
      >
    ) => {

      setResumeData({
        ...resumeData,
        [e.target.name]:
          e.target.value,
      });

    };

  const downloadPDF =
    () => {

      const doc =
        new jsPDF();

      doc.setFontSize(
        24
      );

      doc.text(
        resumeData.name ||
        "Your Name",
        20,
        20
      );

      doc.setFontSize(
        12
      );

      doc.text(
        `Email: ${resumeData.email}`,
        20,
        35
      );

      doc.text(
        `Phone: ${resumeData.phone}`,
        20,
        45
      );

      doc.text(
        "Skills:",
        20,
        60
      );

      doc.text(
        resumeData.skills ||
        "-",
        20,
        70
      );

      doc.text(
        "Education:",
        20,
        95
      );

      doc.text(
        resumeData.education ||
        "-",
        20,
        105
      );

      doc.text(
        "Experience:",
        20,
        130
      );

      doc.text(
        resumeData.experience ||
        "-",
        20,
        140
      );

      doc.save(
        "resume.pdf"
      );

    };

  return (

    <PageTransition>

      <div className="flex bg-black text-white min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <Topbar />

          <h1 className="text-4xl font-bold mb-8">
            Resume Builder 📄
          </h1>

          <div className="bg-zinc-900 rounded-2xl p-8 max-w-3xl">

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={resumeData.name}
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={resumeData.email}
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                "
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={resumeData.phone}
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                "
              />

              <textarea
                name="skills"
                placeholder="Skills"
                value={
                  resumeData.skills
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                  h-28
                "
              />

              <textarea
                name="education"
                placeholder="Education"
                value={
                  resumeData.education
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                  h-28
                "
              />

              <textarea
                name="experience"
                placeholder="Experience"
                value={
                  resumeData.experience
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                  h-28
                "
              />

              <button
                onClick={
                  downloadPDF
                }
                className="
                  bg-blue-600
                  w-full
                  py-4
                  rounded-xl
                  text-lg
                  font-semibold
                "
              >
                Download Resume PDF
              </button>

            </div>

          </div>

        </div>

      </div>

    </PageTransition>

  );

};

export default Resume;