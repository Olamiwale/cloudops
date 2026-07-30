import { Controller, Get, Param } from '@nestjs/common';
import { NodesService } from './nodes.service';

@Controller('kubernetes/nodes')
export class NodesController {
  constructor(private readonly nodesService: NodesService) {}

  @Get()
  getNodes() {
    return this.nodesService.getNodes();
  }

  @Get(':name')
  getNode(@Param('name') name: string) {
    return this.nodesService.getNode(name);
  }
}
