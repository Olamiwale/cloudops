const stats = [
  { label: "Healthy clusters", value: "12", detail: "2 need attention" },
  { label: "Running pods", value: "84", detail: "98% availability" },
  { label: "Deployments", value: "27", detail: "3 in progress" },
];

const alerts = ["CPU pressure on prod-us-east", "Image pull issue in staging", "Rollout paused for api-service"];

function Dashboard() {
  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Overview</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-900">Operations dashboard</h1>
        </div>
        <div className="rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">Live status: Healthy</div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{stat.value}</h2>
            <p className="mt-1 text-sm text-blue-600">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <h3 className="mb-3 text-lg font-semibold text-slate-900">Recent alerts</h3>
        <ul className="grid gap-2 text-sm text-slate-600">
          {alerts.map((alert) => (
            <li key={alert} className="list-disc pl-5">{alert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
