import { Injectable } from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';
import { coreV1Api } from '../kubernetes.client';
import { PodInfo } from './pods.types';

@Injectable()
export class PodsService {
  async getPods(): Promise<PodInfo[]> {
    const { items } = await coreV1Api.listPodForAllNamespaces();
    return items.map((p) => this.toPodInfo(p));
  }

  async getPod(name: string): Promise<PodInfo | null> {
    const pod = await this.findPod(name);
    return pod ? this.toPodInfo(pod) : null;
  }

  async getLogs(name: string) {
    const pod = await this.findPod(name);
    if (!pod) return [];
    const logs = await coreV1Api.readNamespacedPodLog({
      name,
      namespace: pod.metadata!.namespace!,
    });
    return logs.split('\n');
  }

  private async findPod(name: string): Promise<k8s.V1Pod | undefined> {
    const { items } = await coreV1Api.listPodForAllNamespaces();
    return items.find((p) => p.metadata?.name === name);
  }

  private toPodInfo(pod: k8s.V1Pod): PodInfo {
    return {
      name: pod.metadata?.name ?? '',
      namespace: pod.metadata?.namespace ?? '',
      status: pod.status?.phase,
      node: pod.spec?.nodeName,
      podIP: pod.status?.podIP,
      hostIP: pod.status?.hostIP,
      restarts:
        pod.status?.containerStatuses?.reduce(
          (sum, c) => sum + c.restartCount,
          0,
        ) ?? 0,
      createdAt: pod.metadata?.creationTimestamp,
    };
  }
}
