import { Module } from '@nestjs/common';
import { KubernetesController } from './kubernetes.controller';
import { KubernetesService } from './kubernetes.service';
import { NodesController } from './nodes/nodes.controller';
import { NamespacesController } from './namespaces/namespace.controller';
import { PodsController } from './pods/pods.controller';
import { DeploymentsController } from './deployments/deployments.controller';
import { ServicesController } from './services/services.controller';
import { OverviewController } from './overview/overview.controller';
import { NodesService } from './nodes/nodes.service';
import { NamespacesService } from './namespaces/namespace.service';
import { PodsService } from './pods/pods.service';
import { DeploymentsService } from './deployments/deployments.service';
import { ServicesService } from './services/services.service';
import { OverviewService } from './overview/overview.service';


@Module({
  controllers: [
    KubernetesController,
    NodesController,
    NamespacesController,
    PodsController,
    DeploymentsController,
    ServicesController,
    OverviewController,
  ],
  providers: [
    KubernetesService,
    NodesService,
    NamespacesService,
    PodsService,
    DeploymentsService,
    ServicesService,
    OverviewService,
  ],
})
export class KubernetesModule {}