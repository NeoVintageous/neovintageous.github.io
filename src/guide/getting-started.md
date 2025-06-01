---
outline: deep
---

# Getting started

## Installation

### Prerequisites

- [Sublime Text](https://www.sublimetext.com/) `>=3`
- [Package Control](https://packagecontrol.io/installation) or [Git](https://git-scm.com/) (for manual installation)

### Package Control installation

1. Open the Command Palette: `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac).
1. Type "Package Control: Install Package" and press Enter.
1. In the input field, type "**NeoVintageous**" and select it from the list of packages.
1. Restart Sublime Text.

### Manual Git installation

1. Clone NeoVintageous into the Sublime Text directory:
   ::: code-group
   ``` [Linux]
   git clone https://github.com/NeoVintageous/NeoVintageous.git ~/.config/sublime-text/Packages/NeoVintageous
   ```
   ``` [Mac]
   git clone https://github.com/NeoVintageous/NeoVintageous.git ~/Library/Application\ Support/Sublime\ Text/Packages/NeoVintageous
   ```
   ``` [Windows]
   git clone https://github.com/NeoVintageous/NeoVintageous.git %APPDATA%\Sublime\ Text\Packages\NeoVintageous
   ```
   :::
1. Restart Sublime Text

## Install additional plugins

See [plugins](/plugins) for more details.

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

1. Restart Sublime Text.

::: info
Pre-release versions can contain experimental features and changes that are still being refined. If you encounter issues or have feedback, please feel free to share them with us. See [contributing](/contributing) for more details.
:::
