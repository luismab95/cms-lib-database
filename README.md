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
- [Development](#development)
- [Building](#building)
- [Packaging](#packaging)
- [Installing in Other Microservices](#installing-in-other-microservices)
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

## Development

Start the project in development mode:

```bash
pnpm run start:dev
```

Run the configured tests:

```bash
pnpm test
```

Run the linter if configured:

```bash
pnpm lint
```

## Building

Compile the project:

```bash
pnpm run build
```

The compiled output is generated in the `dist/` directory, depending on the TypeScript and Nest CLI configuration.

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

## License

See the [LICENSE](LICENSE) file for details.
