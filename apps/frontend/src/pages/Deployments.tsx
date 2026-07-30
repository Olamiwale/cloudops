import { useEffect, useState } from "react";
import { getDeployments } from "../api/deployment";
import type { DeploymentInfo } from "../types/k8s";

function Deployments() {
  const [deployments, setDeployments] = useState<DeploymentInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDeployments()
      .then(setDeployments)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Release management</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Deployments</h1>
      </div>

      <div className="grid gap-3">
        {deployments.map((d) => (
          <div key={d.name} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900">{d.name}</h3>
                <p className="text-sm text-slate-500">{d.namespace}</p>
              </div>
              <span className="rounded-full px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700">
                {d.readyReplicas}/{d.replicas ?? 0} ready
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deployments;