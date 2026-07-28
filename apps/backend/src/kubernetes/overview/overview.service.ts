import { Injectable } from '@nestjs/common';

// Locao
export interface OverviewInfo {
  nodes: number;
  namespaces: number;
  pods: number;
  deployments: number;
  services: number;
}

@Injectable()
export class OverviewService {
  async getOverview(): Promise<OverviewInfo> {
    return {
      nodes: 0,
      namespaces: 0,
      pods: 0,
      deployments: 0,
      services: 0,
    };
  }
}