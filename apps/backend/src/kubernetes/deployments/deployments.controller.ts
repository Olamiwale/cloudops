import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeploymentsService } from './deployments.service';
import { ScaleDeploymentDto } from './deployments.dto';

@Controller('kubernetes/deployments')
export class DeploymentsController {
  constructor(private readonly deploymentsService: DeploymentsService) {}

  @Get()
  getDeployments() {
    return this.deploymentsService.getDeployments();
  }

  @Get(':name')
  getDeployment(@Param('name') name: string) {
    return this.deploymentsService.getDeployment(name);
  }

  @Post(':name/scale')
  scale(@Param('name') name: string, @Body() dto: ScaleDeploymentDto) {
    return this.deploymentsService.scaleDeployment(name, dto);
  }

  @Post(':name/restart')
  restart(@Param('name') name: string) {
    return this.deploymentsService.restartDeployment(name);
  }
}