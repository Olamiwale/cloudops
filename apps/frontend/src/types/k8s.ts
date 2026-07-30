export interface NodeInfo {
  name: string;
  status: string;
  roles: string[];
  kubeletVersion?: string;
  os?: string;
  architecture?: string;
}

export interface PodInfo {
  name: string;
  namespace: string;
  status?: string;
  node?: string;
  restarts: number;
}

export interface DeploymentInfo {
  name: string;
  namespace: string;
  replicas?: number;
  readyReplicas: number;
  availableReplicas: number;
}

export interface ServiceInfo {
  name: string;
  namespace: string;
  type: string;
  clusterIP: string;
}

export interface OverviewInfo {
  nodes: number;
  namespaces: number;
  pods: number;
  deployments: number;
  services: number;
}