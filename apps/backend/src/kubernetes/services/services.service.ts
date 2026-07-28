import { Injectable } from '@nestjs/common';
import { ServiceInfo } from './services.types';
import { UpdateServiceDto } from './services.dto';

@Injectable()
export class ServicesService {
  getServices(): Promise<ServiceInfo[]> {
    return Promise.resolve([]);
  }

  getService(name: string) {
    void name;
    return Promise.resolve(null);
  }

  updateService(name: string, dto: UpdateServiceDto) {
    void name;
    return Promise.resolve({ message: `${name} updated.`, options: dto });
  }
}
