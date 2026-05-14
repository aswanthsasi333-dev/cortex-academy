export default function Modal({ children }: any) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-gray-900 p-8 rounded-2xl w-[400px]">
        {children}
      </div>
    </div>
  );
}