import { Injectable } from '@nestjs/common';
import { CreateNamespaceDto } from './namespace.dto';
import { NamespaceInfo } from './namespace.types';
import { coreV1Api } from '../kubernetes.client';

@Injectable()
export class NamespacesService {
  async getNamespaces() {
    const { items } = await coreV1Api.listNamespace();
    return items.map((namespace) => ({
      ame: namespace.metadata?.name,
      status: namespace.status?.phase,
      createdAt: namespace.metadata?.creationTimestamp,
    }));
  }

  getNamespace(name: string): Promise<NamespaceInfo | null> {
    void name;
    return Promise.resolve(null);
  }

  createNamespace(dto: CreateNamespaceDto) {
    return Promise.resolve(dto);
  }

  deleteNamespace(name: string) {
    void name;
    return Promise.resolve({ message: `${name} deleted.` });
  }
}
