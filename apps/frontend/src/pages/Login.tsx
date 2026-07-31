import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    try {
      await login({ email, password });
      navigate("/");
    } catch {
      setError("Invalid email or password.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-8">
      <div className="w-full max-w-md rounded-2xl bg-white/95 p-8 shadow-2xl shadow-slate-950/20">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">CloudOps</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to manage your clusters.</p>
        </div>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          {error && <p className="text-sm text-red-600">{error}</p>}

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-500"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="rounded-xl border border-slate-300 px-3 py-3 text-sm outline-none focus:border-blue-500"
            />
          </label>

          <button type="submit" className="mt-1 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-500">
  Don't have an account?{" "}
  <Link to="/register" className="font-semibold text-blue-600 hover:underline">
    Create one
  </Link>
</p>
      </div>
    </div>
  );
}

export default Login;