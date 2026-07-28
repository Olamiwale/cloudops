export default function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h2 className="font-semibold text-xl">
        Kubernetes Dashboard
      </h2>

      <button className="bg-red-500 px-4 py-2 rounded text-white">
        Logout
      </button>
    </header>
  );
}