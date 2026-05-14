export default function RegisterForm() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl w-80">
      <h2 className="mb-4 text-xl">Register</h2>

      <input className="w-full mb-2 p-2 bg-gray-800" placeholder="Email" />
      <input className="w-full mb-2 p-2 bg-gray-800" placeholder="Password" />

      <button className="w-full bg-blue-600 p-2 rounded">
        Register
      </button>
    </div>
  );
}