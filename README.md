# @hyas/cli
[![npm](https://img.shields.io/npm/v/@hyas/cli.svg)](https://www.npmjs.com/package/@hyas/cli)
[![CodeQL](https://github.com/h-enk/hyas-cli/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/h-enk/hyas-cli/actions/workflows/codeql-analysis.yml)

Hyas command line tool.

![Hyas CLI](https://raw.githubusercontent.com/h-enk/hyas-cli/master/images/hyas-cli.png)

## Installation

Install the [Hyas CLI](https://www.npmjs.com/package/@hyas/cli) globally:

```bash
npm install -g @hyas/cli
```

## npx

Or use [npx](https://nodejs.dev/learn/the-npx-nodejs-package-runner):

```bash
npx @hyas/cli <command> [options]
```

## Usage

```bash
hyas <command> [options]
```

## Commands

### Create

Create a new Hyas project:

```bash
hyas create <dir> [theme]
```

| Arguments | Description |
| - | - |
| `dir` | Name of the directory to create the project in |
| `theme` | Name of the Hyas theme to use |
| `-s, --starter` | Use starter theme (default: use child theme) |

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

### Check

Check local environment:

```bash
hyas check
```

## Options

### -h, --help

Show help for command.

### -v, --version

Show @hyas/cli version.

## Documentation

- [Hyas CLI](https://gethyas.com/docs/prologue/hyas-cli/)
