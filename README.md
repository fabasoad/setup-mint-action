# Setup Mint

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![GitHub release](https://img.shields.io/github/v/release/fabasoad/setup-mint-action?include_prereleases)
![functional-tests](https://github.com/fabasoad/setup-mint-action/actions/workflows/functional-tests.yml/badge.svg)
![security](https://github.com/fabasoad/setup-mint-action/actions/workflows/security.yml/badge.svg)
![linting](https://github.com/fabasoad/setup-mint-action/actions/workflows/linting.yml/badge.svg)

This action sets up a [Mint](https://www.mint-lang.com/) programming language.

## Supported OS

<!-- prettier-ignore-start -->
| OS      | Arch   |                                 |
|---------|--------|---------------------------------|
| Windows | All    | :x:                             |
| Linux   | x86_84 | :white_check_mark:              |
| Linux   | arm    | :x:                             |
| macOS   | x86_84 | :white_check_mark:              |
| macOS   | arm    | :white_check_mark: `(> 0.19.x)` |
<!-- prettier-ignore-end -->

## Prerequisites

None

## Inputs

<!-- prettier-ignore-start -->
| Name    | Required | Description                                                                       | Default          | Possible values          |
|---------|----------|-----------------------------------------------------------------------------------|------------------|--------------------------|
| version | No       | Mint version that can be found [here](https://github.com/mint-lang/mint/releases) | `0.20.0-alpha.1` | `0.19.0`, `0.18.0`, etc. |
<!-- prettier-ignore-end -->

## Example usage

### Workflow configuration

```yaml
name: Setup Mint

on: push

jobs:
  setup:
    name: Setup
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: fabasoad/setup-mint-action@v1
      - name: Run script
        run: mint init test-project
```

### Result

```text
Mint - Initializing a new project
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙ Creating directory: test-project
⚙ Writing initial files:
  ➔ assets/head.html
  ➔ source/Main.mint
  ➔ tests/Main.mint
  ➔ mint.json
  ➔ .gitignore
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All done in 292μs!
```
