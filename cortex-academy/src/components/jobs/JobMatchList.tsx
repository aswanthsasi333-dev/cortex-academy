import JobCard from "./JobCard";

export default function JobMatchList() {
  const jobs = ["Frontend Dev", "Backend Dev"];

  return (
    <div className="grid gap-4">
      {jobs.map((j, i) => (
        <JobCard key={i} title={j} />
      ))}
    </div>
  );
}