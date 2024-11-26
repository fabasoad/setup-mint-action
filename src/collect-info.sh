#!/usr/bin/env sh

# Starting from v0.20.0-alpha.1 mint supports macos arm64 OS. This function
# checks if requested version is less than 0.20.x
_if_old_version() {
  version="${1}"

  major=$(echo "$version" | cut -d '.' -f 1)
  minor=$(echo "$version" | cut -d '.' -f 2)
  if [ "$major" -lt 1 ] && [ "$minor" -lt 20 ]; then
    echo "true"
  else
    echo "false"
  fi
}

main() {
  input_version="${1}"

  echo "mint-installed=$(if command -v mint >/dev/null 2>&1; then echo true; else echo false; fi)" >> "$GITHUB_OUTPUT"
  mkdir -p "${GITHUB_WORKSPACE}/mint"
  echo "mint-path=${GITHUB_WORKSPACE}/mint" >> "$GITHUB_OUTPUT"
  if [ "${RUNNER_OS}" = "Linux" ]; then
    mint_binary="mint-${input_version}-linux-x86_64"
  else
    if [ "${RUNNER_ARCH#ARM}" != "$RUNNER_ARCH" ]; then
      if [ "$(_if_old_version "${input_version}")" = "true" ]; then
        msg="${RUNNER_OS} ${RUNNER_ARCH} is not supported by mint ${input_version}."
        msg="${msg} Try newer version of mint (>= 0.20.0)."
        echo "::error title=OS is not supported::${msg}"
        exit 1
      else
        mint_binary="mint-${input_version}-osx-arm64"
      fi
    else
      if [ "$(_if_old_version "${input_version}")" = "true" ]; then
        mint_binary="mint-${input_version}-osx"
      else
        mint_binary="mint-${input_version}-osx-x86_64"
      fi
    fi
  fi
  echo "mint-binary=${mint_binary}" >> "$GITHUB_OUTPUT"
}

main "$@"
