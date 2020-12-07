# Setup Mint
![GitHub release](https://img.shields.io/github/v/release/fabasoad/setup-mint-action?include_prereleases) ![CI (latest)](https://github.com/fabasoad/setup-mint-action/workflows/CI%20(latest)/badge.svg) ![CI (main)](https://github.com/fabasoad/setup-mint-action/workflows/CI%20(main)/badge.svg) ![YAML Lint](https://github.com/fabasoad/setup-mint-action/workflows/YAML%20Lint/badge.svg) ![CodeQL](https://github.com/fabasoad/setup-mint-action/workflows/CodeQL/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/setup-mint-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-mint-action/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/setup-mint-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/setup-mint-action/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/e259e98506d3691ab916/maintainability)](https://codeclimate.com/github/fabasoad/setup-mint-action/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/e259e98506d3691ab916/test_coverage)](https://codeclimate.com/github/fabasoad/setup-mint-action/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/setup-mint-action/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fabasoad/setup-mint-action?targetFile=package.json)

This action sets up a [Mint](https://www.mint-lang.com/) programming language.

## Inputs
| Name    | Required | Description                                                                       | Default | Possible values |
|---------|----------|-----------------------------------------------------------------------------------|---------|-----------------|
| version | Yes      | Mint version that can be found [here](https://github.com/mint-lang/mint/releases) |         | &lt;String&gt;  |

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
          version: 0.8.0
      - name: Run script
        run: mint init test-project
```

### Result
![Result](https://raw.githubusercontent.com/fabasoad/setup-mint-action/main/screenshot.png)
