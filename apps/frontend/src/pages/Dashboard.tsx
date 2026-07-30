import { useEffect, useState } from "react";
import { getOverview } from "../api/overview";
import type { OverviewInfo } from "../types/k8s";

function Dashboard() {
  const [overview, setOverview] = useState<OverviewInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOverview()
      .then(setOverview)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-slate-500">Loading...</p>;
  if (!overview) return <p className="text-red-500">Failed to load overview.</p>;

  const stats = [
    { label: "Nodes", value: overview.nodes },
    { label: "Namespaces", value: overview.namespaces },
    { label: "Pods", value: overview.pods },
    { label: "Deployments", value: overview.deployments },
    { label: "Services", value: overview.services },
  ];

  return (
    <div className="grid gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Overview</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Operations dashboard</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;