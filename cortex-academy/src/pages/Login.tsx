import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [isRegister, setIsRegister] =
    useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
      })
    );

    navigate("/home");

  };

  return (

    <div className="min-h-screen bg-black flex items-center justify-center">

      <div className="bg-white/10 p-8 rounded-xl w-[90%] max-w-md">

        <h1 className="text-3xl text-center text-white font-bold mb-6">
          Cortex Academy
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {
            isRegister && (
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full p-3 rounded"
              />
            )
          }

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-3 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            {
              isRegister
                ? "Register"
                : "Login"
            }
          </button>

        </form>

        <p className="text-white text-center mt-4">

          {
            isRegister
              ? "Already have account?"
              : "Don't have account?"
          }

          <button
            onClick={() =>
              setIsRegister(!isRegister)
            }
            className="ml-2 text-blue-400"
          >
            {
              isRegister
                ? "Login"
                : "Register"
            }
          </button>

        </p>

      </div>

    </div>

  );

};

export default Login;