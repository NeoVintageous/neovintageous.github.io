# Contributing to NeoVintageous

Learn about how you can contribute.

[[toc]]

## Pull Requests

There are two branches:

- master (patch releases)
- develop (minor and major releases)

Please send bug fixes to the master branch and features to develop.

Please ensure your pull request supports:

- Sublime Text 3 (Python 3.3)
- Sublime Text 4 (Python 3.8)

[`flake8`](https://flake8.pycqa.org) and [`mypy`](https://mypy.readthedocs.io) are used to provide some code quality assurances. Run `flake8` to check your work and please check that the [ci checks](https://github.com/neovintageous/neovintageous/actions/workflows/ci.yml) pass.

Please check there are no unrelated changes.

Please [sign your commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) and a [commit message convention](https://github.com/vuejs/vitepress/blob/main/.github/commit-convention.md).

Consider a [commit message convention](https://github.com/vuejs/vitepress/blob/main/.github/commit-convention.md).

::: details Example flake8 and mypy install commands
pip3 install flake8 flake8-docstrings pydocstyle mypy
:::

## Testing

Please consider testing your work. There is a test suite in tests/. To run the tests, use the [UnitTesting](https://github.com/SublimeText/UnitTesting) package from @randy3k. The configuration file for the tests is in unittesting.json.

::: details Run the test suite
1. Open the Command Palette `Ctrl+Shift+P` (Linux/Win) or `Cmd+Shift+P` (Mac).
1. Type "UnitTesting" and press Enter.
1. Enter "NeoVintageous" as the package to test and press Enter.
:::

Consider [enabling pre-releases](/guide/getting-started#enable-pre-releases) to get access the latest features, improvements, and bug fixes before they are officially released.

## Debugging

The console log is your friend: Menu → View → Show Console

To enable command and input logging, run the following commands in the console:

```
sublime.log_commands(True)
sublime.log_input(True)
```

::: tip
Install [ToggleDebugMode](https://packagecontrol.io/packages/ToggleDebugMode) <Badge type="tip">Install via Package Control</Badge> to get a Developer Tools menu and Command Palette for toggling various Sublime Text loggers.
:::

To enable NeoVintageous logging, set an environment variable named `SUBLIME_NEOVINTAGEOUS_DEBUG` to a non-blank value or set it to one of the following log levels: `critical`, `error`, `warning`, `info`, `debug`.

::: code-group ex
```sh [Linux]
$ SUBLIME_NEOVINTAGEOUS_DEBUG=INFO subl
```
```ps [Win]
set SUBLIME_NEOVINTAGEOUS_DEBUG=INFO& "C:\Program Files\Sublime Text 3\subl.exe"
```
