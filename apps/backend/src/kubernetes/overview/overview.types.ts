export interface DashboardOverview {
  counts: {
    nodes: number;
    namespaces: number;
    pods: number;
    deployments: number;
    services: number;
  };
}