import { useEffect, useState } from "react";
import { getNodes } from "../api/node";
import type { NodeInfo } from "../types/k8s";

function Nodes() {
  const [nodes, setNodes] = useState<NodeInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNodes()
      .then(setNodes)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Infrastructure</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Nodes</h1>
      </div>

      <div className="grid gap-3">
        {nodes.map((node) => (
          <div key={node.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div>
              <h3 className="text-base font-semibold text-slate-900">{node.name}</h3>
              <p className="text-sm text-slate-500">{node.roles.join(", ") || "worker"} • {node.kubeletVersion}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${node.status === "Ready" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
              {node.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nodes;