export default function ForgotPasswordForm() {
  return (
    <div className="bg-gray-900 p-6 rounded-xl w-80">
      <h2>Forgot Password</h2>
      <input className="w-full mt-2 p-2 bg-gray-800" placeholder="Email" />
      <button className="w-full mt-4 bg-blue-600 p-2 rounded">
        Send Reset Link
      </button>
    </div>
  );
}