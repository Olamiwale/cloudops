import { Injectable } from '@nestjs/common';
import { NodeInfo } from './nodes.types';
import { DrainNodeDto } from './nodes.dto';

@Injectable()
export class NodesService {
  getNodes(): Promise<NodeInfo[]> {
    return Promise.resolve([]);
  }

  getNode(name: string): Promise<NodeInfo | null> {
    void name;
    return Promise.resolve(null);
  }

  cordonNode(name: string) {
    void name;
    return Promise.resolve({
      message: `Node ${name} cordoned successfully.`,
    });
  }

  uncordonNode(name: string) {
    void name;
    return Promise.resolve({
      message: `Node ${name} uncordoned successfully.`,
    });
  }

  drainNode(name: string, dto: DrainNodeDto) {
    void name;
    return Promise.resolve({
      message: `Node ${name} drained successfully.`,
      options: dto,
    });
  }
}
