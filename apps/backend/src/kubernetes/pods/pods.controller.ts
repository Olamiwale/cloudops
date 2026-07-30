import { Controller, Get, Param } from '@nestjs/common';
import { PodsService } from './pods.service';

@Controller('kubernetes/pods')
export class PodsController {
  constructor(private readonly podsService: PodsService) {}

  @Get()
  getPods() {
    return this.podsService.getPods();
  }

  @Get(':name')
  getPod(@Param('name') name: string) {
    return this.podsService.getPod(name);
  }

  @Get(':name/logs')
  getLogs(@Param('name') name: string) {
    return this.podsService.getLogs(name);
  }
}
