function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 px-6 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white/95 p-8 shadow-2xl shadow-slate-950/20">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">CloudOps</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to manage your clusters, pods, and deployments.</p>
        </div>

        <form className="grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input type="email" placeholder="name@company.com" className="rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none ring-0 focus:border-blue-500" />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Password
            <input type="password" placeholder="••••••••" className="rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none ring-0 focus:border-blue-500" />
          </label>

          <button type="button" className="mt-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
