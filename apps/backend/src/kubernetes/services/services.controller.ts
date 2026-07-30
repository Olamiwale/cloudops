import { Controller, Get, Param } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('kubernetes/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  getServices() {
    return this.servicesService.getServices();
  }

  @Get(':name')
  getService(@Param('name') name: string) {
    return this.servicesService.getService(name);
  }
}
