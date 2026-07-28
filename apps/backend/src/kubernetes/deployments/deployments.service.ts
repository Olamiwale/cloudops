import { Injectable } from '@nestjs/common';
import { ScaleDeploymentDto } from './deployments.dto';
import { DeploymentInfo } from './deployments.types';

@Injectable()
export class DeploymentsService {
  async getDeployments(): Promise<DeploymentInfo[]> {
    return [];
  }

  async getDeployment(name: string) {
    return null;
  }

  async scaleDeployment(name: string, dto: ScaleDeploymentDto) {
    return { message: `${name} scaled.`, replicas: dto.replicas };
  }

  async restartDeployment(name: string) {
    return { message: `${name} restarted.` };
  }
}