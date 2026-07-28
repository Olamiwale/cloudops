export interface DeploymentInfo {
  name: string;
  namespace: string;
  replicas?: number;
  readyReplicas: number;
  availableReplicas: number;
  updatedReplicas: number;
  createdAt?: Date;
}