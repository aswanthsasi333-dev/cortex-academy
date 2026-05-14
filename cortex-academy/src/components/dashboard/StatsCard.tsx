export default function StatsCard({ title, value }: any) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl">
      <h3 className="text-gray-400">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}