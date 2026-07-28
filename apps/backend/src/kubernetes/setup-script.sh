#!/bin/bash

# Create main directories

# Create kubernetes root directory and subdirectories
mkdir -p src/kubernetes/namespaces
mkdir -p src/kubernetes/nodes
mkdir -p src/kubernetes/pods
mkdir -p src/kubernetes/deployments
mkdir -p src/kubernetes/services
mkdir -p src/kubernetes/overview


# Create namespace files
touch kubernetes/namespaces/namespaces.controller.ts
touch kubernetes/namespaces/namespaces.service.ts
touch kubernetes/namespaces/namespaces.dto.ts
touch kubernetes/namespaces/namespaces.types.ts

# Create node files
touch src/kubernetes/nodes/nodes.controller.ts
touch src/kubernetes/nodes/nodes.service.ts
touch src/kubernetes/nodes/nodes.dto.ts
touch src/kubernetes/nodes/nodes.types.ts

# Create pod files
touch src/kubernetes/pods/pods.controller.ts
touch src/kubernetes/pods/pods.service.ts
touch src/kubernetes/pods/pods.dto.ts
touch src/kubernetes/pods/pods.types.ts

# Create deployment files
touch src/kubernetes/deployments/deployments.controller.ts
touch src/kubernetes/deployments/deployments.service.ts
touch src/kubernetes/deployments/deployments.dto.ts
touch src/kubernetes/deployments/deployments.types.ts

# Create service files
touch src/kubernetes/services/services.controller.ts
touch src/kubernetes/services/services.service.ts
touch src/kubernetes/services/services.dto.ts
touch src/kubernetes/services/services.types.ts

# Create overview files
touch src/kubernetes/overview/overview.controller.ts
touch src/kubernetes/overview/overview.service.ts
touch src/kubernetes/overview/overview.types.ts

echo "Directory structure created successfully!"
