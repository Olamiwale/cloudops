const pods = [
  { name: "api-7d4f5", status: "Running", namespace: "production" },
  { name: "worker-4d9c8", status: "Pending", namespace: "production" },
  { name: "web-865bb", status: "Running", namespace: "staging" },
];

function Pods() {
  return (
    <div className="grid gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Workloads</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">Pods</h1>
      </div>

      <div className="grid gap-3">
        {pods.map((pod) => (
          <div key={pod.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <div>
              <h3 className="text-base font-semibold text-slate-900">{pod.name}</h3>
              <p className="text-sm text-slate-500">{pod.namespace}</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${pod.status === "Running" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
              {pod.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pods;
