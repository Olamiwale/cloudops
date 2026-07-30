import { Body, Controller, Get, Param } from '@nestjs/common';
import { NamespacesService } from './namespace.service';

@Controller('kubernetes/namespaces')
export class NamespacesController {
  constructor(private readonly namespacesService: NamespacesService) {}

  @Get()
  getNamespaces() {
    return this.namespacesService.getNamespaces();
  }

  @Get(':name')
  getNamespace(@Param('name') name: string) {
    return this.namespacesService.getNamespace(name);
  }
}
