import { Injectable } from '@nestjs/common';
import { ServiceInfo } from './services.types';
import { UpdateServiceDto } from './services.dto';

@Injectable()
export class ServicesService {
  async getServices(): Promise<ServiceInfo[]> {
    return [];
  }

  async getService(name: string) {
    return null;
  }

  async updateService(name: string, dto: UpdateServiceDto) {
    return { message: `${name} updated.`, options: dto };
  }
}