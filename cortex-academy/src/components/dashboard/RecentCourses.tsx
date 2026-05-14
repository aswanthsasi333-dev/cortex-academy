export default function RecentCourses() {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
      <h2 className="text-2xl mb-4">Recent Courses</h2>

      <div className="space-y-4">
        <div className="bg-black/20 p-4 rounded-xl">React Mastery</div>
        <div className="bg-black/20 p-4 rounded-xl">Node.js API</div>
        <div className="bg-black/20 p-4 rounded-xl">AI & ML</div>
      </div>
    </div>
  );
}