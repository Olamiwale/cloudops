import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { NamespacesService } from './namespace.service';
import { CreateNamespaceDto } from './namespace.dto';

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

  @Post()
  createNamespace(@Body() dto: CreateNamespaceDto) {
    return this.namespacesService.createNamespace(dto);
  }

  @Delete(':name')
  deleteNamespace(@Param('name') name: string) {
    return this.namespacesService.deleteNamespace(name);
  }
}