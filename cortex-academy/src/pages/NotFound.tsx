import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate =
    useNavigate();

  return (

    <div className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4">
          The page you are looking for
          does not exist.
        </p>

        <button
          onClick={() =>
            navigate("/home")
          }
          className="
            mt-8
            bg-blue-600
            px-8
            py-4
            rounded-xl
          "
        >
          Go Home
        </button>

      </div>

    </div>

  );

};

export default NotFound;