import { Injectable } from '@nestjs/common';
import { ScaleDeploymentDto } from './deployments.dto';
import { DeploymentInfo } from './deployments.types';

@Injectable()
export class DeploymentsService {
  getDeployments(): Promise<DeploymentInfo[]> {
    return Promise.resolve([]);
  }

  getDeployment(name: string): Promise<DeploymentInfo | null> {
    void name;
    return Promise.resolve(null);
  }

  scaleDeployment(name: string, dto: ScaleDeploymentDto) {
    void name;
    return Promise.resolve({
      message: `${name} scaled.`,
      replicas: dto.replicas,
    });
  }

  restartDeployment(name: string) {
    void name;
    return Promise.resolve({ message: `${name} restarted.` });
  }
}
