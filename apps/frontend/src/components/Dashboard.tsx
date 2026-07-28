export default function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5">

        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500">Clusters</p>
          <h2 className="text-4xl font-bold mt-2">2</h2>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500">Nodes</p>
          <h2 className="text-4xl font-bold mt-2">6</h2>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500">Pods</p>
          <h2 className="text-4xl font-bold mt-2">58</h2>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500">Deployments</p>
          <h2 className="text-4xl font-bold mt-2">18</h2>
        </div>

        <div className="bg-white rounded-lg shadow p-5">
          <p className="text-gray-500">Services</p>
          <h2 className="text-4xl font-bold mt-2">14</h2>
        </div>

      </div>
    </>
  );
}