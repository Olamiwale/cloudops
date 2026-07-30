import { Controller, Get, Param } from '@nestjs/common';
import { DeploymentsService } from './deployments.service';

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
}
