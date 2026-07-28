export interface PodInfo {
  name: string;
  namespace: string;
  status?: string;
  node?: string;
  podIP?: string;
  hostIP?: string;
  restarts: number;
  createdAt?: Date;
}