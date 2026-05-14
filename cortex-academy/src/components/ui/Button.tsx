export default function Button({ children }: any) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl">
      {children}
    </button>
  );
}