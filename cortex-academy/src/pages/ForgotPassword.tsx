export default function ForgotPassword() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl w-80">
        <h2>Reset Password</h2>
        <input className="w-full mt-2 p-2 bg-gray-800" placeholder="Email" />
        <button className="w-full mt-4 bg-blue-600 p-2 rounded">
          Send Link
        </button>
      </div>
    </div>
  );
}