import { Injectable } from '@nestjs/common';
import { versionApi, coreV1Api, appsV1Api } from './kubernetes.client';

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
    };

}