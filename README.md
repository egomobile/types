# @egomobile/types

[![npm](https://img.shields.io/npm/v/@egomobile/types.svg)](https://www.npmjs.com/package/@egomobile/types)

A repository of common interfaces, types and enums for [TypeScript](https://www.typescriptlang.org/).

## Install

```
$ npm install --save-dev @egomobile/types
```

## Usage

```typescript
import * as fs from 'fs';
import { PackageJSON } from '@egomobile/types';

const PACKAGE_JSON: PackageJSON = JSON.parse(
    fs.readFileSync('./package.json', 'utf8');
);
```

## Documentation

The API documentation can be found [here](https://egomobile.github.io/types/).
