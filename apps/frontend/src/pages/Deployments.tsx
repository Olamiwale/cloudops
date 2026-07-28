const deployments = [
  { name: "api-service", image: "ghcr.io/acme/api:1.4.2", status: "Healthy" },
  { name: "web-frontend", image: "ghcr.io/acme/web:2.1.0", status: "Rolling out" },
  { name: "worker-sync", image: "ghcr.io/acme/worker:1.0.7", status: "Healthy" },
];

function Deployments() {
  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Release management</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Deployments</h1>
      </div>

      <div className="grid gap-3">
        {deployments.map((deployment) => (
          <div key={deployment.name} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900">{deployment.name}</h3>
                <p className="text-sm text-slate-500">{deployment.image}</p>
              </div>
              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${deployment.status === "Healthy" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                {deployment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deployments;
