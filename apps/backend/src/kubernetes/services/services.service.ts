import { Injectable } from '@nestjs/common';
import * as k8s from '@kubernetes/client-node';
import { coreV1Api } from '../kubernetes.client';
import { ServiceInfo } from './services.types';

@Injectable()
export class ServicesService {
  async getServices(): Promise<ServiceInfo[]> {
    const { items } = await coreV1Api.listServiceForAllNamespaces();
    return items.map((s) => this.toServiceInfo(s));
  }

  async getService(name: string): Promise<ServiceInfo | null> {
    const svc = await this.findService(name);
    return svc ? this.toServiceInfo(svc) : null;
  }

  private async findService(name: string) {
    const { items } = await coreV1Api.listServiceForAllNamespaces();
    return items.find((s) => s.metadata?.name === name);
  }

  private toServiceInfo(svc: k8s.V1Service): ServiceInfo {
    return {
      name: svc.metadata?.name ?? '',
      namespace: svc.metadata?.namespace ?? '',
      type: svc.spec?.type ?? '',
      clusterIP: svc.spec?.clusterIP ?? '',
    };
  }
}
