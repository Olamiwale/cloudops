import { Injectable } from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';
import { coreV1Api } from '../kubernetes.client';
import { NodeInfo } from './nodes.types';

@Injectable()
export class NodesService {
  async getNodes(): Promise<NodeInfo[]> {
    const { items } = await coreV1Api.listNode();
    return items.map((n) => this.toNodeInfo(n));
  }

  async getNode(name: string): Promise<NodeInfo | null> {
    try {
      const node = await coreV1Api.readNode({ name });
      return this.toNodeInfo(node);
    } catch {
      return null;
    }
  }

  private toNodeInfo(node: k8s.V1Node): NodeInfo {
    return {
      name: node.metadata?.name ?? '',
      status:
        node.status?.conditions?.find((c) => c.type === 'Ready')?.status ===
        'True'
          ? 'Ready'
          : 'NotReady',
      roles: Object.keys(node.metadata?.labels ?? {})
        .filter((l) => l.startsWith('node-role.kubernetes.io/'))
        .map((l) => l.replace('node-role.kubernetes.io/', '')),
      kubeletVersion: node.status?.nodeInfo?.kubeletVersion,
      os: node.status?.nodeInfo?.operatingSystem,
      architecture: node.status?.nodeInfo?.architecture,
    };
  }
}
