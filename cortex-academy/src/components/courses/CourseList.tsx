import CourseCard from "./CourseCard";

export default function CourseList() {
  const courses = ["React", "Node.js", "AI/ML", "TypeScript"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {courses.map((course, index) => (
        <CourseCard key={index} title={course} />
      ))}
    </div>
  );
}