# Setup Mint

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![GitHub release](https://img.shields.io/github/v/release/fabasoad/setup-mint-action?include_prereleases)
![functional-tests](https://github.com/fabasoad/setup-mint-action/actions/workflows/functional-tests.yml/badge.svg)
![security](https://github.com/fabasoad/setup-mint-action/actions/workflows/security.yml/badge.svg)
![linting](https://github.com/fabasoad/setup-mint-action/actions/workflows/linting.yml/badge.svg)

This action sets up a [Mint](https://www.mint-lang.com/) programming language.

## Prerequisites

The following tools have to be installed for successful work of this GitHub action:
[wget](https://www.gnu.org/software/wget).

## Inputs

<!-- prettier-ignore-start -->
| Name    | Required | Description                                                                       | Default  | Possible values          |
|---------|----------|-----------------------------------------------------------------------------------|----------|--------------------------|
| version | No       | Mint version that can be found [here](https://github.com/mint-lang/mint/releases) | `0.19.0` | `0.18.0`, `0.17.0`, etc. |
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
      - uses: actions/checkout@main
      - uses: fabasoad/setup-mint-action@main
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
