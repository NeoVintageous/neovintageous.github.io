# Input Method <Badge type="info">Since 1.32</Badge>

Automatically switch the input method when entering and exiting Insert Mode.

Any third-party program can be used to switch input methods.

Below, you'll find instructions for installing and using input method switchers on various operating systems.

[[toc]]

## Setup

### Linux

1. **Install an input method switcher.**

   - ibus - A powerful input method framework.
   - xkb-switch - A lightweight utility for XKB-based layouts.
   - fcitx - A flexible and feature-rich input method platform.
   - gdbus - A command-line tool for switching input methods.
   - qdbus - A D-Bus tool for communication with input methods.

   ::: details Example gdbus scripts
   You will need two scripts. One getter and one setter.
   ::: code-group
   ```sh [im-get]
   #!/usr/bin/env sh

   gdbus call \
       --session \
       --dest org.gnome.Shell \
       --object-path /org/gnome/Shell \
       --method org.gnome.Shell.Eval \
       "imports.ui.status.keyboard.getInputSourceManager().currentSource.index" | awk -F'[^0-9]*' '{print $2}'
   ```
   ```sh [im-set]
   #!/usr/bin/env sh

   gdbus call \
       --session \
       --dest org.gnome.Shell \
       --object-path /org/gnome/Shell \
       --method org.gnome.Shell.Eval \
       "imports.ui.status.keyboard.getInputSourceManager().inputSources[$1].activate()"
   ```
   ::: info NOTE
   You may need to make the scripts executable: `chmod +x im-get im-set`
   :::

1. **Determine your default input method.**

   Switch your input method to English and execute the relevant command:

   ::: code-group
   ```sh [ibus]
   ibus engine
   ```
   ```sh [xkb-switch]
   xkb-switch
   ```
   ```sh [fcitx]
   fcitx-remote
   ```
   ```sh [gdbus]
   im-get
   ```
   ```sh [qdbus]
   qdbus org.kde.keyboard /Layouts getLayout
   ```
   :::

1. **Configure the NeoVintageous input method.**

   Open the settings from the the Command Palette, `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac), and add the settings:

   ::: code-group
   ```json [ibus]
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "xkb:us::eng",
       "vintageous_auto_switch_input_method_get_cmd": "/usr/bin/ibus engine",
       "vintageous_auto_switch_input_method_set_cmd": "/usr/bin/ibus engine {im}"
   }
   ```
   ```json [xkb-switch]
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "us",
       "vintageous_auto_switch_input_method_get_cmd": "/usr/local/bin/xkb-switch",
       "vintageous_auto_switch_input_method_set_cmd": "/usr/local/bin/xkb-switch -s {im}"
   }
   ```
   ```json [fcitx]
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "1",
       "vintageous_auto_switch_input_method_get_cmd": "/usr/bin/fcitx-remote",
       "vintageous_auto_switch_input_method_set_cmd": "/usr/bin/fcitx-remote -t {im}"
   }
   ```
   ```json [gdbus]
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "0",
       "vintageous_auto_switch_input_method_get_cmd": "/path/to/im-get",
       "vintageous_auto_switch_input_method_set_cmd": "/path/to/im-set {im}"
   }
   ```
   ```json [qdbujsons (kde)]
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "0",
       "vintageous_auto_switch_input_method_get_cmd": "/usr/bin/qdbus org.kde.keyboard /Layouts getLayout",
       "vintageous_auto_switch_input_method_set_cmd": "/usr/bin/qdbus org.kde.keyboard /Layouts setLayout {im}"
   }
   ```
   :::

### Mac

1. **Install an input method switcher.**

   - [im-select](https://github.com/daipeihust/im-select) - A versatile input switching tool.

1. **Determine your default input method.**

   Switch your input method to English and execute the following commands in your terminal:

   ::: code-group
    ``` [im-select]
    im-select
    ```
   :::

1. **Configure the NeoVintageous input method.**

   Open the settings from the the Command Palette, `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac), and add the settings:

   ::: code-group
   ```json [im-select]
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "com.apple.keylayout.US",
       "vintageous_auto_switch_input_method_get_cmd": "/usr/local/bin/im-select",
       "vintageous_auto_switch_input_method_set_cmd": "/usr/local/bin/im-select {im}"
   }
   ```
   :::

### Windows

1. **Install an input method switcher.**

   - [im-select](https://github.com/daipeihust/im-select) - A versatile input switching tool.

1. **Determine your default input method.**

   Switch your input method to English and execute the following commands in your terminal:

   ::: code-group
    ```sh [im-select]
    im-select
    ```
   :::
1. **Configure the NeoVintageous input method.**

   Open the settings from the the Command Palette, `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac), and add the settings:

   ::: code-group
   ```json [im-select]
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "1033",
       "vintageous_auto_switch_input_method_get_cmd": "D:\\bin\\im-select.exe",
       "vintageous_auto_switch_input_method_set_cmd": "D:\\bin\\im-select.exe {im}"
   }
   ```
   :::

## Settings

<!--@include:@/reusables/settings/input-method.md-->
