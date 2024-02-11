# Highlighted Yank

Highlighted Yank is a plugin designed to highlight the yanked region in Sublime Text.

When new text is yanked, the old highlighting is automatically deleted. This ensures that the highlighting remains relevant to the most recent yanked text. Similarly, when former lines are edited, the highlighting is cleared to prevent shifting the position of the highlighting.

You can customize the highlighted yank duration and style using the following settings:

- `vintageous_highlighted_yank_duration`: This setting allows you to configure the duration for which the yanked region will be highlighted. You can set the duration according to your preferences.

- `vintageous_highlighted_yank_style`: This setting allows you to customize the style of the highlighted yank region. You can modify the background and foreground colors to suit your color scheme.

## Customize Highlighted Yank Colors

To tailor the colors of highlighted yanks to your preference, you can create a color scheme override using the following steps:

1. Open the Command Palette by using the shortcut `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac).

1. Open the Command Palette: `UI: Customize Color Scheme`.

1. Add the following styles using the "highlightedyank" scope, and adjust the background and foreground colors as desired:

   ```json
   {
       "rules": [
           {
               "scope": "highlightedyank",
               "background": "#e6db74",
               "foreground": "#272822"
           }
       ]
   }
   ```

By customizing the colors of highlighted yanks, you can make yanked regions more visually distinctive and ensure they align with your preferred color scheme, enhancing your editing experience in the Sublime Text editor.

## Settings

<!--@include:@/reusables/settings/highlighted-yank.md-->
