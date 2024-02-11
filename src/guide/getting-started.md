---
outline: deep
---

# Getting started

## Installation

### Prerequisites

- [Sublime Text](https://www.sublimetext.com/) version 3 or higher.
- [Package Control](https://packagecontrol.io/installation) for Package Control installation.
- [Git](https://git-scm.com/) for Manual Git installation.

### Package Control installation

1. Open the Command Palette: `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac).
1. Type "Package Control: Install Package" and press Enter.
1. In the input field, type "NeoVintageous" and select it from the list of available packages.

::: info NOTE
You may need to restart Sublime Text.
:::

### Manual Git installation

1. Open a terminal or command prompt.
1. Navigate to the Sublime Text Packages directory:
   ::: code-group
   ``` [Linux]
   ~/.config/sublime-text/Packages
   ```
   ``` [Mac]
   ~/Library/Application Support/Sublime Text/Packages
   ```
   ``` [Windows]
   %APPDATA%\Sublime Text\Packages
   ```
   :::
1. Clone NeoVintageous directly into the Packages directory:
   ```bash
   git clone https://github.com/NeoVintageous/NeoVintageous.git
   ```

::: info NOTE
You may need to restart Sublime Text.
:::

## Install additional plugins

Some features require additional plugins. See the [plugins](/plugins) documentation for more details.

## Enable pre-releases

Pre-release versions allow you to access the latest features, improvements, and bug fixes before they are officially released. If you're eager to test out new functionalities in NeoVintageous, you can enable pre-release installation with this configuration.

1. Open the Command Palette by using the shortcut `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` on (Mac). Type and select `Preferences: Package Control Settings` to open the settings file for Package Control.

1. In the user settings file, add the "install_prereleases" setting and specify "NeoVintageous" in the list of packages to enable pre-release installation:

   ```json
   {
       "install_prereleases": [
            "NeoVintageous"
        ]
   }
   ```

1. After saving the settings, you can now install the pre-release version of NeoVintageous. Open the Command Palette again and type `Package Control: Upgrade Package` to install the pre-release version.

::: info NOTE
You may need to restart Sublime Text.
:::

::: info
Pre-release versions can contain experimental features and changes that are still being refined. If you encounter issues or have feedback, please feel free to share them with us. See [contributing](/contributing) for more details.
:::
