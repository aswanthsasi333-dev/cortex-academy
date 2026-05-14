export default function Badge({ text }: { text: string }) {
  return (
    <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">
      {text}
    </span>
  );
}