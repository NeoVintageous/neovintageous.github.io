# Options

The list below includes all options that NeoVintageous supports.

::: info NOTE
Some options are "facades" to underlying Sublime Text settings. The default of these options is to fallback to the underlying setting. These options are highlighted below as <Badge type="info">Sublime Text settings</Badge>.
:::

::: tip
You can lookup options in the vim help file by surrounding it with quotes: `:help 'smartcase'`
:::

[[toc]]

## `'autoindent' 'ai'`

- Type: `string`
- Default: `'auto_indent'` sublime setting

## `'belloff' 'bo'`

- Type: `string`
- Default: `''`

Valid values: `''` and `'all'`.

## `'equalalways'`

- Type: `boolean`
- Default: On

## `'expandtab' 'et'`

- Type: `boolean`
- Default: `'translate_tabs_to_spaces'` <Badge type="info">Sublime Text setting</Badge>

## `'hlsearch' 'hls'`

- Type: `boolean`
- Default: On

When there is a previous search pattern, highlight all its matches.

::: tip
When you get bored looking at the highlighted matches, you can turn it off with `:nohlsearch`.  This does not change the option value, as soon as you use a search command, the highlighting comes back.
:::

::: tip
See also: [`'incsearch'`](#incsearch-is)
:::

## `'ignorecase' 'ic'`

- Type: `boolean`
- Default: Off

## `'incsearch' 'is'`

- Type: `boolean`
- Default: On

While typing a search command, show where the pattern, as it was typed so far, matches.  The matched string is highlighted.  If the pattern is invalid or not found, nothing is shown.  The screen will be updated often.

The match will be shown, but the cursor will return to its original position when no match is found and when pressing `<Esc>.`  You still need to finish the search command with `<Enter>` to move the cursor to the match.

When `'hlsearch'` is on, all matched strings are highlighted too while typing a search command. See also: `'hlsearch'.`

## `'list'`

- Type: `boolean`
- Default: `'draw_white_space'` <Badge type="info">Sublime Text setting</Badge>

Useful to see the difference between tabs and spaces and for trailing blanks.

## `'magic'`

- Type: `boolean`
- Default: On

## `'menu'`

- Type: `boolean`
- Default: On

## `'minimap'`

- Type: `boolean`
- Default: On

## `'modeline' 'ml'`

- Type: `boolean`
- Default: On

## `'modelines' 'mls'`

- Type: `number`
- Default: 5

## `'number' 'nu'`

- Type: `boolean`
- Default: `'line_numbers'` <Badge type="info">Sublime Text setting</Badge>

Print the line number in front of each line.

## `'relativenumber' 'rnu'`

- Type: `boolean`
- Default: `'relative_line_numbers'` <Badge type="info">Sublime Text setting</Badge>

Show the line number relative to the line with the cursor in front of each line. Relative line numbers help you use the `count` you can precede some vertical motion commands (e.g., `j` `k` `+` `-`) with, without having to calculate it yourself. Especially useful in combination with other commands (e.g., `y` `d` `c` `<` `>` `gq` `gw` `=`).

## `'scrolloff' 'so'`

- Type: `number`
- Default: `'scroll_context_lines'` <Badge type="info">Sublime Text setting</Badge>

## `'shell'`

- Type: `string`
- Default: `$SHELL` or `"sh"`, Win32: `"cmd.exe"`

## `'sidebar'`

- Type: `boolean`
- Default: On

## `'smartcase' 'scs'`

- Type: `boolean`
- Default: Off

## `'spell'`

- Type: `boolean`
- Default: `'spell_check'` <Badge type="info">Sublime Text setting</Badge>

## `'statusbar'`

- Type: `boolean`
- Default: On

## `'tabstop' 'ts'`

- Type: `number`
- Default: `'tab_size'` <Badge type="info">Sublime Text setting</Badge>

## `'textwidth' 'tw'`

- Type: `number`
- Default: `'wrap_width'` <Badge type="info">Sublime Text setting</Badge>

## `'winaltkeys' 'wak'`

- Type: `string`
- Default: `menu`

Some GUI versions allow the access to menu entries by using the ALT key in combination with a character that appears underlined in the menu.  This conflicts with the use of the ALT key for mappings and entering special characters.  This option tells what to do:
 - `no` Don't use ALT keys for menus.  ALT key combinations can be mapped, but there is no automatic handling.
 - `yes` ALT key handling is done by the windowing system.  ALT key combinations cannot be mapped.
 - `menu` Using ALT in combination with a character that is a menu shortcut key, will be handled by the windowing system.  Other keys can be mapped.

## `'wrap'`

- Type: `boolean`
- Default: `word_wrap` <Badge type="info">Sublime Text setting</Badge>

This option changes how text is displayed.  It doesn't change the text in the buffer, see `'textwidth'` for that.

When `on`, lines longer than the width of the window will wrap and displaying continues on the next line.

When `off` lines will not wrap and only part of long lines will be displayed.  When the cursor is moved to a part that is not shown, the screen will scroll horizontally.

## `'wrapscan' 'ws'`

- Type: `boolean`
- Default: On
