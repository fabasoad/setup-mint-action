# Setup Mint

![GitHub release](https://img.shields.io/github/v/release/fabasoad/setup-mint-action?include_prereleases)
![Functional Tests](https://github.com/fabasoad/setup-mint-action/workflows/Functional%20Tests/badge.svg)
[![pre-commit.ci status](https://results.pre-commit.ci/badge/github/fabasoad/setup-mint-action/main.svg)](https://results.pre-commit.ci/latest/github/fabasoad/setup-mint-action/main)

This action sets up a [Mint](https://www.mint-lang.com/) programming language.

## Prerequisites

The following tools have to be installed for successful work of this GitHub action:
[wget](https://www.gnu.org/software/wget).

## Inputs

| Name    | Required | Description                                                                       | Default  | Possible values          |
|---------|----------|-----------------------------------------------------------------------------------|----------|--------------------------|
| version | No       | Mint version that can be found [here](https://github.com/mint-lang/mint/releases) | `0.16.1` | `0.15.1`, `0.16.0`, etc. |

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
