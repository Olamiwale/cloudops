import { Injectable } from '@nestjs/common';
import { versionApi } from './kubernetes.client';

@Injectable()
export class KubernetesService {
  async getVersion() {
    const version = await versionApi.getCode();
    return {
      major: version.major,
      minor: version.minor,
      gitVersion: version.gitVersion,
      platform: version.platform,
    };
  }
}
