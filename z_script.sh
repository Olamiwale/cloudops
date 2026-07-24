set -e


echo "......Creating monorepo root...."

PROJECT_NAME="cloudops"

echo ".......Initializing pnpm workspace......."
pnpm init

cat > pnpm-workspace.yaml <<EOF
packages:
  - "apps/*"
  - "packages/*"
EOF

echo "....Installing Turborepo...."
pnpm add -D turbo -w

cat > turbo.json <<EOF
{
  "\$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {},
    "test": {}
  }
}
EOF

mkdir -p apps packages

echo "== Scaffolding backend (NestJS) =="
cd apps
npx @nestjs/cli new backend --package-manager pnpm --skip-git
cd ..

echo "== Scaffolding frontend (React + Vite) =="
cd apps
pnpm create vite frontend --template react-ts
cd frontend
pnpm install
cd ../..

echo "== Creating root .gitignore =="
cat > .gitignore <<EOF
node_modules/
.env
.env.local
.turbo/
dist/
build/
.DS_Store
EOF

echo "== Creating root package.json scripts =="
cat > package.json <<EOF
{
  "name": "PROJECT_NAME",
  "private": true,
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test"
  },
  "devDependencies": {
    "turbo": "latest"
  },
  "packageManager": "pnpm@9.0.0"
}
EOF


echo "....done...."
