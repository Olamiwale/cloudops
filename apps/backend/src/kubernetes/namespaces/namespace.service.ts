import { Injectable } from '@nestjs/common';
import { coreV1Api } from '../kubernetes.client';
import { NamespaceInfo } from './namespace.types';

@Injectable()
export class NamespacesService {
  async getNamespaces(): Promise<NamespaceInfo[]> {
    const { items } = await coreV1Api.listNamespace();
    return items.map((ns) => ({
      name: ns.metadata?.name ?? '',
      status: ns.status?.phase ?? '',
      createdAt: ns.metadata?.creationTimestamp,
    }));
  }

  async getNamespace(name: string): Promise<NamespaceInfo | null> {
    const namespaces = await this.getNamespaces();
    return namespaces.find((ns) => ns.name === name) ?? null;
  }
}
