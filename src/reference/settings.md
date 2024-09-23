---
outline: deep
---

# Settings

Command Palette → Preferences: NeoVintageous Settings

[[toc]]

## vintageous_auto_complete_exit_from_insert_mode

- Type: `boolean`
- Default: `true`

Close auto complete, if visible, when leaving Insert mode and entering Normal mode. When set to false only the auto complete is closed.

## vintageous_auto_nohlsearch_on_normal_enter

- Type: `boolean`
- Default: `true`

When set to `true`, search highlighting is automatically cleared upon entering normal mode (usually by pressing `<Esc>`).

::: details TIP Use `:noh` to clear search highlighting
To manually clear search highlighting, use the ex command `:nohlsearch`, abbreviation `:noh`, or create a mapping:

```vim [example]
noremap <C-l> :nohlsearch<CR>
```
See [neovintageousrc](/reference/neovintageousrc) for details on creating key mappings.
:::

## Input Method

<!--@include:@/reusables/settings/input-method.md-->

## vintageous_bell

- Type: `string ('blink' | 'view' | 'views')`
- Default: `'blink'`

Choose the style for the visual bell.

## vintageous_bell_color_scheme

- Type: `string (resource) | 'dark' | 'light' `
- Default: `'dark'`

Choose the color scheme for the visual bell.

Example: `Packages/Name/Name.color-scheme`

## vintageous_clear_auto_indent_on_esc

- Type: `boolean`
- Default: `true`

If you do not type anything on a new line e.g. pressing `<Esc>` after "o" or "O", the indent is deleted again. To preserve the leading white-space on after pressing `<esc>` set this setting to false.

## vintageous_default_mode

- Type: `null | string ('insert' | 'visual')`
- Default: `null`

Default mode to use when activating or switching views.

- `null` - Default behaviour. Enter normal mode when opening or switching views or when the window receives focus and is not in visual mode i.e. visual mode selections are retained when the window loses focus.

- `'insert'` - Enter insert mode when opening or switching views or when the window receives focus and is not in visual mode i.e. visual mode selections are retained when the window loses focus.

- `'visual'` - Enter insert mode when opening or switching views or when the window receives focus and is not already in visual mode i.e. visual mode selections are retained when the window loses focus.

## Abolish

<!--@include:@/reusables/settings/abolish.md-->

## Commentary

<!--@include:@/reusables/settings/commentary.md-->

## Highlighted Yank

<!--@include:@/reusables/settings/highlighted-yank.md-->

## Markology

<!--@include:@/reusables/settings/markology.md-->

## Multiple cursors

<!--@include:@/reusables/settings/multiple-cursors.md-->

## Sneak

<!--@include:@/reusables/settings/sneak.md-->

## Sublime

### vintageous_enable_sublime

- Type: `boolean`
- Default: `true`

Enable Sublime Text tweaks.

## Surround

<!--@include:@/reusables/settings/surround.md-->

## Targets

<!--@include:@/reusables/settings/targets.md-->

## Unimpaired

<!--@include:@/reusables/settings/unimpaired.md-->

## vintageous_exit_when_quitting_last_window

- Type: `boolean | 'unless_sidebar_visible'`
- Default: `true`

Controls the behaviour of commands like ZZ, :quit, :wq.

Setting this value `true` exits Sublime Text when quitting the last view.

Setting this value `false` doesn't exit Sublime Text after closing the last view.

Setting this value `'unless_sidebar_visible'` exits Sublime Text when quitting the last view, but only if the sidebar is not visible.

## vintageous_handle_keys

- Type: `dict`
- Default: `{}`

Delegate configured keys to be handled by Sublime Text. For example to use native Sublime Text behaviour for CTRL-f:

```jsonl
"vintageous_handle_keys": {
    "<C-f>": false
}
```

Keys can be handled for specific modes by using a prefix:

- `n_` - Normal
- `i_` - Insert
- `v_` - Visual
- `V_` - Visual line
- `b_` - Visual block
- `s_` - Select

For example, to only delegate `<C-w>` in Insert and Visual modes:

```jsonl
"vintageous_handle_keys": {
    "i_<C-w>": false,
    "v_<C-w>": false
}
```

## vintageous_i_escape_jj

- Type: `boolean`
- Default: `false`

Toggle the use of "jj" as an escape sequence in Insert mode.

## vintageous_i_escape_jk

- Type: `boolean`
- Default: `false`

Toggle the use of "jk" as an escape sequence in Insert mode.

## vintageous_i_escape_kj

- Type: `boolean`
- Default: `false`

Toggle the use of "kj" as an escape sequence in Insert mode.

## vintageous_lsp_save

- Type: `boolean`
- Default: `false`

Map save commands like `:w` to LSP save routine.

::: info NOTE
You need to enable this if you have LSP code actions like `source.fixAll` and `source.organizeImports` enabled and want them to run on save commands like `:w`. See https://github.com/sublimelsp/LSP/issues/1725
:::

## vintageous_reset_mode_when_switching_tabs

- Type: `boolean`
- Default: `true`

Reset to normal mode when a tab is activated.

## vintageous_save_async

- Type: `boolean`
- Default: `false`

Asynchronous file saving with commands like :w, :wq.

## Search

<!--@include:@/reusables/settings/search.md-->

## vintageous_shell_silent

- Type: `boolean`
- Default: `false`

Show output panel from shell commands.

## vintageous_source

- Type: `string (resource)`
- Default: `null`

Read Ex commands from a resource before the `neovintageousrc` is sourced.

::: info
Can be used to preload a base set of mappings, e.g., used by the [Dvorak](https://github.com/gerardroche/NeoVintageousDvorak) and [Colemak](https://github.com/gerardroche/NeoVintageousColemak) packages.
:::

## vintageous_terminal

- Type: `string`
- Default: `null`

Define the program to use when initiating a ":shell" command.

Example: `'gnome-terminal' | 'kitty'`

## vintageous_use_ctrl_keys

- Type: `boolean`
- Default: `true`

Enable Ctrl keys.

## vintageous_use_super_keys

- Type: `boolean`
- Default: `true`

Enable Super keys.

::: info
Super key refers to the Windows key (Win/Linux) or Command key (Mac).
:::

## vintageous_use_sys_clipboard

- Type: `boolean`
- Default: `false`

Propagate copy actions to the system clipboard.
