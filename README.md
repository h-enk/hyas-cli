# @hyas/cli
[![npm](https://img.shields.io/npm/v/@hyas/cli.svg)](https://www.npmjs.com/package/@hyas/cli)
[![CodeQL](https://github.com/h-enk/hyas-cli/workflows/CodeQL/badge.svg)](https://github.com/h-enk/hyas-cli/actions?query=workflow%3ACodeQL)
[![Node.js Package](https://github.com/h-enk/hyas-cli/workflows/Node.js%20Package/badge.svg)](https://github.com/h-enk/hyas-cli/actions?query=workflow%3A%22Node.js+Package%22)

Hyas command line tool.

## Installation

Install the Hyas CLI globally:

```bash
npm install -g @hyas/cli
```

## npx
Or use [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner):

```bash
npx @hyas/cli <command> [options]
```


## Commands


### Create

Create a new Hyas project:

```bash
hyas create [dir]
```

### Start
Start local development server:

```bash
hyas start
```

### Build
Build production website:

```bash
hyas build
```

### Clean
Delete temporary directories:

```bash
hyas clean
```

## Options

### -h, --help

Show help.

### -v, --version

Show version number.

## Documentation
- [Hyas CLI](https://gethyas.com/docs/prologue/hyas-cli/)
