import { Injectable } from '@nestjs/common';
import { DeletePodDto } from './pods.dto';
import { PodInfo } from './pods.types';

@Injectable()
export class PodsService {
  getPods(): Promise<PodInfo[]> {
    return Promise.resolve([]);
  }

  getPod(name: string) {
    void name;
    return Promise.resolve(null);
  }

  deletePod(name: string, dto: DeletePodDto) {
    void name;
    return Promise.resolve({ message: `${name} deleted.`, options: dto });
  }

  getLogs(name: string) {
    void name;
    return Promise.resolve([]);
  }
}
