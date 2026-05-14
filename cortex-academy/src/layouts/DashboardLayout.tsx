import Sidebar from "../components/common/Sidebar";
import Topbar from "../components/common/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}