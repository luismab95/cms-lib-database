# LIB-DATABASE

<p align="center">
  Database library for CMS microservices built with NestJS 12, TypeScript, and TypeORM.
</p>

<p align="center">
  <a href="https://github.com/luismab95/cms-lib-database.git">GitHub Repository</a>
</p>

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Building](#building)
- [Packaging](#packaging)
- [Deployment](#deployment)
- [Installing in Other Microservices](#installing-in-other-microservices)
- [Resources](#resources)
- [License](#license)

## Overview

`lib-database` is a reusable library designed to centralize database-related functionality for CMS microservices.

It is built with NestJS 12 and TypeScript and is intended to be shared across projects using TypeORM.

## Prerequisites

- Node.js 24 or a compatible supported version.
- pnpm.
- NestJS 12.
- TypeScript 6.

Enable pnpm through Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Verify the installed versions:

```bash
node --version
pnpm --version
```

## Installation

Clone the repository:

```bash
git clone https://github.com/luismab95/cms-lib-database.git
cd cms-lib-database
```

Install the dependencies:

```bash
pnpm install
```

## Environment Variables

Configure the environment variables required by the application before running it.

Create a `.env` file in the project root if your configuration uses environment files (review .env.example).

Example:

```env
NODE_ENV=development
PORT=3000
```

## Running the App

### Development

```bash
pnpm start
```

### Watch Mode

Automatically restart the application when files change:

```bash
pnpm start:dev
```

### Debug Mode

```bash
pnpm start:debug
```

### Production

```bash
pnpm start:prod
```

Build the application before running it in production:

```bash
pnpm build
pnpm start:prod
```
## Testing

### Unit Tests

```bash
pnpm test
```

### Watch Mode

```bash
pnpm test:watch
```

### End-to-End Tests

```bash
pnpm test:e2e
```

### Test Coverage

```bash
pnpm test:cov
```

## Building

Compile the application:

```bash
pnpm build
```

The compiled output is generated in the `dist` directory by the standard NestJS build configuration.

## Packaging

To distribute the library as a local package, configure its `package.json` with the correct public entry points and include the compiled files in the package.

Generate the package archive:

```bash
pnpm run pack
```

This creates a `.tgz` archive containing the files included in the package configuration.

For repeatable builds, commit `pnpm-lock.yaml` to the repository and use:

```bash
pnpm install --frozen-lockfile
```

## Installing in Other Microservices

Copy the generated archive to the root directory of the consuming microservice and install it using pnpm:

```bash
pnpm add ./cms-lib-database-0.0.1.tgz
```

Import the public exports from the package:

```typescript
import { DatabaseModule } from 'cms-lib-database';
```

The exported names depend on the modules and services exposed by the library.

When publishing a new version, update the library version, rebuild the package, and reinstall the new archive in the consuming microservices.

## Deployment

Before deploying to production:

- Configure production environment variables.
- Build the application using `pnpm build`.
- Ensure dependencies are installed consistently using the committed `pnpm-lock.yaml`.
- Configure the required database connections and external services.
- Verify that authentication and authorization flows work correctly.
- Configure logging, monitoring, and error handling.

For additional information, see the [NestJS deployment documentation](https://docs.nestjs.com/deployment).

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Official Website](https://nestjs.com)
- [pnpm Documentation](https://pnpm.io)
- [Node.js Documentation](https://nodejs.org/docs)
- [CMS-MS-AUTH Repository](https://github.com/luismab95/cms-lib-database)

## License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.
