export interface NodeInfo {
  name: string;
  status: string;
  roles: string[];
  kubeletVersion?: string;
  os?: string;
  architecture?: string;
}
