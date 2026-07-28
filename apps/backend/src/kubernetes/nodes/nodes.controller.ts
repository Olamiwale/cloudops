import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NodesService } from './nodes.service';
import { DrainNodeDto } from './nodes.dto';

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

  @Post(':name/cordon')
  cordonNode(@Param('name') name: string) {
    return this.nodesService.cordonNode(name);
  }

  @Post(':name/uncordon')
  uncordonNode(@Param('name') name: string) {
    return this.nodesService.uncordonNode(name);
  }

  @Post(':name/drain')
  drainNode(@Param('name') name: string, @Body() dto: DrainNodeDto) {
    return this.nodesService.drainNode(name, dto);
  }
}
