import { useState } from "react";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created");

    } catch (error: any) {

      alert(error.message);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">

      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl w-[350px]">

        <h1 className="text-3xl text-white mb-6 text-center">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-xl bg-black/30 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-4 rounded-xl bg-black/30 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 py-4 rounded-xl"
        >
          Register
        </button>

      </div>

    </div>
  );
}