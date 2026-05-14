export default function Input(props: any) {
  return (
    <input
      {...props}
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none"
    />
  );
}