import { Injectable } from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';
import { appsV1Api } from '../kubernetes.client';
import { DeploymentInfo } from './deployments.types';

@Injectable()
export class DeploymentsService {
  async getDeployments(): Promise<DeploymentInfo[]> {
    const { items } = await appsV1Api.listDeploymentForAllNamespaces();
    return items.map((d) => this.toDeploymentInfo(d));
  }

  async getDeployment(name: string): Promise<DeploymentInfo | null> {
    const dep = await this.findDeployment(name);
    return dep ? this.toDeploymentInfo(dep) : null;
  }

  private async findDeployment(name: string) {
    const { items } = await appsV1Api.listDeploymentForAllNamespaces();
    return items.find((d) => d.metadata?.name === name);
  }

  private toDeploymentInfo(dep: k8s.V1Deployment): DeploymentInfo {
    return {
      name: dep.metadata?.name ?? '',
      namespace: dep.metadata?.namespace ?? '',
      replicas: dep.spec?.replicas,
      readyReplicas: dep.status?.readyReplicas ?? 0,
      availableReplicas: dep.status?.availableReplicas ?? 0,
      updatedReplicas: dep.status?.updatedReplicas ?? 0,
      createdAt: dep.metadata?.creationTimestamp,
    };
  }
}
