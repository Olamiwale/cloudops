import { useEffect, useState } from "react";
import { getServices } from "../api/services";
import type { ServiceInfo } from "../types/k8s";

function Services() {
  const [services, setServices] = useState<ServiceInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-slate-500">Loading...</p>;

  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Networking</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Services</h1>
      </div>

      <div className="grid gap-3">
        {services.map((s) => (
          <div key={s.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div>
              <h3 className="text-base font-semibold text-slate-900">{s.name}</h3>
              <p className="text-sm text-slate-500">{s.namespace} • {s.clusterIP}</p>
            </div>
            <span className="rounded-full px-3 py-1 text-sm font-semibold bg-slate-100 text-slate-700">
              {s.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;