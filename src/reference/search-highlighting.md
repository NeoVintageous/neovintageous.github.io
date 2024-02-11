# Search highlighting

You can customize the colors for search highlighting in Sublime Text.

::: details TIP Create a mapping for clearing search highlighting
```vim
noremap <C-l> :nohlsearch<CR>
```
See [neovintageousrc](/reference/neovintageousrc) for details on creating key mappings.
:::

## Custom search highlighting colors

1. Open the Command Palette by using the shortcut `Ctrl+Shift+P` (Linux/Win) or `Cmd+Shift+P` (Mac).

1. Type and select: `UI: Customize Color Scheme`

1. Within the color scheme file, define distinct styles for various search highlighting scopes:

   - `neovintageous_search_inc`: This scope is used for highlighting the current search incrementally as you type.
   - `neovintageous_search_cur`: This scope is used for highlighting the current search term.
   - `neovintageous_search_occ`: This scope is used for highlighting all occurrences of the search term.

::: details Example

```json
{
    "rules": [
        {
            "scope": "neovintageous_search_inc",
            "background": "#a1efe4",
            "foreground": "#272822"
        },
        {
            "scope": "neovintageous_search_cur",
            "background": "#a1efe4",
            "foreground": "#272822"
        },
        {
            "scope": "neovintageous_search_occ",
            "background": "#e6db74",
            "foreground": "#272822"
        }
    ]
}
```
:::

## Settings

<!--@include:@/reusables/settings/search.md-->
