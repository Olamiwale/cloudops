import { Injectable } from '@nestjs/common';
import { NodeInfo } from './nodes.types';
import { DrainNodeDto } from './nodes.dto';

@Injectable()
export class NodesService {
  async getNodes(): Promise<NodeInfo[]> {
    return [];
  }

  async getNode(name: string): Promise<NodeInfo | null> {
    return null;
  }

  async cordonNode(name: string) {
    return {
      message: `Node ${name} cordoned successfully.`,
    };
  }

  async uncordonNode(name: string) {
    return {
      message: `Node ${name} uncordoned successfully.`,
    };
  }

  async drainNode(name: string, dto: DrainNodeDto) {
    return {
      message: `Node ${name} drained successfully.`,
      options: dto,
    };
  }
}
