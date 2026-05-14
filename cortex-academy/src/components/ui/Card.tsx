export default function Card({ children }: any) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
      {children}
    </div>
  );
}