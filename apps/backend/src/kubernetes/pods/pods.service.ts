import { Injectable } from '@nestjs/common';
import { DeletePodDto } from './pods.dto';
import { PodInfo } from './pods.types';

@Injectable()
export class PodsService {
  async getPods(): Promise<PodInfo[]> {
    return [];
  }

  async getPod(name: string) {
    return null;
  }

  async deletePod(name: string, dto: DeletePodDto) {
    return { message: `${name} deleted.`, options: dto };
  }

  async getLogs(name: string) {
    return [];
  }
}