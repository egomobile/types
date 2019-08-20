# @egodigital/types

[![npm](https://img.shields.io/npm/v/@egodigital/@egodigital/types.svg)](https://www.npmjs.com/package/@egodigital/@egodigital/types)

A repository of common interfaces, enums and base classes for [TypeScript](https://www.typescriptlang.org/).

## Install

```
$ npm install --save-dev @egodigital/types
```

## Usage

```typescript
import * as fs from 'fs';
import { PackageJSON } from '@egodigital/types';

const PACKAGE_JSON: PackageJSON = JSON.parse(
    fs.readFileSync('./package.json', 'utf8');
);
```