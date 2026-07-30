import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white">
      <div className="p-5 text-2xl font-bold">CloudOps</div>
      <nav className="flex flex-col">
        <Link className="px-5 py-3 hover:bg-slate-800" to="/">Dashboard</Link>
        <Link className="px-5 py-3 hover:bg-slate-800" to="/clusters">Nodes</Link>
        <Link className="px-5 py-3 hover:bg-slate-800" to="/pods">Pods</Link>
        <Link className="px-5 py-3 hover:bg-slate-800" to="/deployments">Deployments</Link>
        <Link className="px-5 py-3 hover:bg-slate-800" to="/services">Services</Link>
      </nav>
    </aside>
  );
}