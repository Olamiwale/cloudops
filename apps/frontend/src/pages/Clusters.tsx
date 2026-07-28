const clusters = [
  { name: "prod-us-east", region: "us-east-1", status: "Healthy", nodes: 6 },
  { name: "staging-eu", region: "eu-west-1", status: "Warning", nodes: 3 },
  { name: "dev-local", region: "local", status: "Healthy", nodes: 2 },
];

function Clusters() {
  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Infrastructure</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Clusters</h1>
      </div>

      <div className="grid gap-3">
        {clusters.map((cluster) => (
          <div key={cluster.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div>
              <h3 className="text-base font-semibold text-slate-900">{cluster.name}</h3>
              <p className="text-sm text-slate-500">{cluster.region} • {cluster.nodes} nodes</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${cluster.status === "Healthy" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
              {cluster.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clusters;
