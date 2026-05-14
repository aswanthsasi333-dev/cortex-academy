import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageTransition from "../components/PageTransition";

const Profile = () => {

  const user = JSON.parse(
    localStorage.getItem(
      "user"
    ) || "{}"
  );

  const [profile,
    setProfile] =
    useState({
      name: "",
      email: "",
      bio: "",
      skills: "",
      education: "",
    });

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile =
    async () => {

      try {

        const res =
          await axios.get(
            `http://localhost:5000/api/profile/${user.uid}`
          );

        if (res.data) {

          setProfile({
            name:
              res.data.name || "",
            email:
              res.data.email || "",
            bio:
              res.data.bio || "",
            skills:
              res.data.skills || "",
            education:
              res.data.education || "",
          });

        }

      } catch (
        error
      ) {

        console.log(
          error
        );

      }

    };

  const handleChange =
    (
      e: React.ChangeEvent<
        HTMLInputElement |
        HTMLTextAreaElement
      >
    ) => {

      setProfile({
        ...profile,
        [e.target.name]:
          e.target.value,
      });

    };

  const saveProfile =
    async () => {

      try {

        await axios.post(
          "http://localhost:5000/api/profile/save",
          {
            userId:
              user.uid,
            ...profile,
          }
        );

        alert(
          "Profile Saved ✅"
        );

      } catch (
        error
      ) {

        console.log(
          error
        );

      }

    };

  return (

    <PageTransition>

      <div className="flex bg-black text-white min-h-screen">

        <Sidebar />

        <div className="flex-1 p-8">

          <Topbar />

          <h1 className="text-4xl font-bold mb-8">
            Profile 👤
          </h1>

          <div className="bg-zinc-900 rounded-2xl p-8 max-w-3xl">

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Name"
                value={profile.name}
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
                value={profile.email}
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
                name="bio"
                placeholder="Bio"
                value={profile.bio}
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                  h-24
                "
              />

              <textarea
                name="skills"
                placeholder="Skills"
                value={
                  profile.skills
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                  h-24
                "
              />

              <textarea
                name="education"
                placeholder="Education"
                value={
                  profile.education
                }
                onChange={
                  handleChange
                }
                className="
                  w-full
                  p-4
                  rounded-xl
                  bg-zinc-800
                  h-24
                "
              />

              <button
                onClick={
                  saveProfile
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
                Save Profile
              </button>

            </div>

          </div>

        </div>

      </div>

    </PageTransition>

  );

};

export default Profile;