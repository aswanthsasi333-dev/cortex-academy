export default function CourseCard({ title }: any) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl hover:scale-105 transition">
      
      <div className="h-40 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
        <span className="text-gray-400">Course</span>
      </div>

      <h3 className="text-white">{title}</h3>

    </div>
  );
}