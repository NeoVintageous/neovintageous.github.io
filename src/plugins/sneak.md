# Sneak <Badge type="info">Since 1.21</Badge>

Sneak is a port of [vim-sneak](https://github.com/justinmk/vim-sneak) by [@justinmk](https://x.com/justinmk).

By default, Sneak is disabled to prevent conflicts with certain Vim commands such as `s`, `S`, `z`, and `Z`. To enable Sneak, follow these steps:

1. Open the Command Palette by selecting `Preferences: NeoVintageous Settings`.
1. Add the following JSON configuration:
   ```json
   {
       "vintageous_enable_sneak": true
   }
   ```

## Customize sneak mappings

You can customize the default sneak mappings by setting environment variables:

```sh
NEOVINTAGEOUS_SNEAK_MAP_S=s
NEOVINTAGEOUS_SNEAK_MAP_BIG_S=S
NEOVINTAGEOUS_SNEAK_MAP_Z=z
NEOVINTAGEOUS_SNEAK_MAP_BIG_Z=Z
```

::: details Linux and Mac setup example
You could add the following lines to your `~/.profile`, `~/.bashrc`, or relevant shell file:

```sh
export NEOVINTAGEOUS_SNEAK_MAP_S=s
export NEOVINTAGEOUS_SNEAK_MAP_BIG_S=S
export NEOVINTAGEOUS_SNEAK_MAP_Z=z
export NEOVINTAGEOUS_SNEAK_MAP_BIG_Z=Z
```

::: warning NOTE
You may need to reboot your system for the environment variables to take effect.
:::

::: details Windows setup example:
You can set environment variables for each user separately through the System Properties dialog box. The steps to do that:

1. Type Windows Key + R to open the "Run" dialog box.
1. Enter "sysdm.cpl" and press the "OK" button. The "System Properties" dialog box will open.
1. Select the "Advanced" tab and press the "Environment Variables..." button. The "Environment Variables" dialog box will open.
1. Select an existing variable in the "User variables" list and press the "Edit..." button to edit it. Or press the "New..." button to add a new variable.
1. After you finished editing variables, press the "OK" button to save the changes.

::: warning NOTE
You may need to reboot your system for the environment variables to take effect.
:::

::: info Why environment variables?
The necessity to configure these mappings through environment variables, rather than conventional settings, arises from an implementation detail: plugins are loaded during startup, and access to settings is not available at this stage. Resolving this issue will require making significant design adjustments. In the meantime, employing environment variables provides a solution.
:::

## Settings

<!--@include:@/reusables/settings/sneak.md-->

## Status

<!--@include:@/reusables/status/sneak.md-->

Check out the [roadmap](/roadmap#sneak) for a detailed inventory of feature status.
