# Setup Mint
![GitHub release](https://img.shields.io/github/v/release/fabasoad/setup-mint-action?include_prereleases) ![CI](https://github.com/fabasoad/setup-mint-action/workflows/CI/badge.svg) ![YAML Lint](https://github.com/fabasoad/setup-mint-action/workflows/YAML%20Lint/badge.svg)

This action sets up a [Mint](https://www.mint-lang.com/) programming language.

## Inputs
1. `version` - _[Required]_ Mint version that can be found [here](https://github.com/mint-lang/mint/releases).

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
      - uses: actions/checkout@v1
      - uses: fabasoad/setup-mint-action@v1.0.0
        with:
          version: '0.8.0'
      - name: Run script
        run: mint init test-project
```

### Result
![Result](https://raw.githubusercontent.com/fabasoad/setup-mint-action/master/screenshot.png)
