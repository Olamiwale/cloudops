import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ServicesService } from './services.service';
import { UpdateServiceDto } from './services.dto';

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

  @Patch(':name')
  updateService(@Param('name') name: string, @Body() dto: UpdateServiceDto) {
    return this.servicesService.updateService(name, dto);
  }
}