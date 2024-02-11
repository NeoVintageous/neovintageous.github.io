# Markology <Badge type="info">Since 1.32</Badge>

Markology displays marks associated with the current line in the gutter. You can disable this feature by modifying the setting `vintageous_show_marks_in_gutter`.

To do so, follow these steps:

1. Open the Command Palette: `Preferences: NeoVintageous Settings`.
1. Add the following JSON configuration:
   ```json
   {
       "vintageous_show_marks_in_gutter": false
   }
   ```

## Customize Markology Mark Colors

If you wish to personalize the color of the marks displayed by Markology, you can follow these steps to create a color scheme override:

1. Open the Command Palette by using the shortcut `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac).
1. Type and select: `UI: Customize Color Scheme`.
1. Add the following JSON configuration, adjusting the color as desired:
   ```json
   {
       "rules": [
           {
               "scope": "neovintageous.mark",
               "foreground": "yellow"
           }
       ]
   }
   ```

By customizing the color of the marks, you can ensure they are visually distinct and align with your preferred color scheme, providing you with a more tailored and visually appealing editing experience in Sublime Text.

## Settings

<!--@include:@/reusables/settings/markology.md-->
