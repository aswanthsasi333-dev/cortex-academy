export default function Topbar() {

  return (

    <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">

      <h2 className="text-xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-blue-500"></div>

      </div>

    </div>
  );
}