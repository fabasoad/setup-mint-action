# Setup Mint

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![GitHub release](https://img.shields.io/github/v/release/fabasoad/setup-mint-action?include_prereleases)
![functional-tests](https://github.com/fabasoad/setup-mint-action/actions/workflows/functional-tests.yml/badge.svg)
![security](https://github.com/fabasoad/setup-mint-action/actions/workflows/security.yml/badge.svg)
![linting](https://github.com/fabasoad/setup-mint-action/actions/workflows/linting.yml/badge.svg)

This action sets up a [Mint](https://www.mint-lang.com/) programming language.

## Supported OS

<!-- prettier-ignore-start -->
| OS      | Arch   |                                  |
|---------|--------|----------------------------------|
| Windows | All    | :x:                              |
| Linux   | x86_84 | :white_check_mark:               |
| Linux   | arm    | :x:                              |
| macOS   | x86_84 | :white_check_mark:               |
| macOS   | arm    | :white_check_mark: `(>= 0.20.0)` |
<!-- prettier-ignore-end -->

## Prerequisites

None.

## Inputs

```yaml
- uses: fabasoad/setup-mint-action@v1
  with:
    # (Optional) Mint version. Defaults to the latest version.
    version: "0.21.0"
    # (Optional) If "false" skips installation if mint is already installed. If
    # "true" installs mint in any case. Defaults to "false".
    force: "false"
    # (Optional) GitHub token that is used to send requests to GitHub API such
    # as downloading asset. Defaults to the token provided by GitHub Actions
    # environment.
    github-token: "${{ github.token }}"
```

## Outputs

<!-- prettier-ignore-start -->
| Name      | Description                       | Example |
|-----------|-----------------------------------|---------|
| installed | Whether mint was installed or not | `true`  |
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

## Contributions

![Alt](https://repobeats.axiom.co/api/embed/2fd14dca25bd7e385ad97b48484ed139295deda9.svg "Repobeats analytics image")
