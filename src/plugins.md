# Plugins

Experience the power of Vim with NeoVintageous, which seamlessly integrates several impressive Vim plugins right out of the box. While we continuously strive for feature parity, please note that some functional differences might exist, and they may not always be fully documented.

## Default plugins

All default plugins are bundled with NeoVintageous. You do not need to install these plugins.

| Plugin                                                                            | Description
| :-------------------------------------------------------------------------------- | :----------
| [Abolish](/plugins/abolish)                                                       | Port of [vim-abolish](https://github.com/tpope/vim-abolish).
| [Commentary](/plugins/commentary)                                                 | Port of [vim-commentary](https://github.com/tpope/vim-commentary).
| [Highlighted Yank](/plugins/highlighted-yank)                                     | Inspired by [vim-highlightedyank](https://github.com/machakann/vim-highlightedyank).
| [Input Method](/plugins/input-method) <Badge type="info">Since 1.32</Badge>       | Inspired by [vim-xkbswitch](https://github.com/lyokha/vim-xkbswitch) and [VSCodeVim/Vim](https://github.com/VSCodeVim/Vim#input-method).
| [Indent Object](/plugins/indent-object)                                           | Port of [vim-indent-object](https://github.com/michaeljsmith/vim-indent-object).
| [Markology](/plugins/markology) <Badge type="info">Since 1.32</Badge>             | Inspired by [vim-markology](https://github.com/jeetsukumaran/vim-markology).
| [Multiple Cursors](/plugins/multiple-cursors)                                     | Inspired by [vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors) and [mg979/vim-visual-multi](https://github.com/mg979/vim-visual-multi).
| [Sneak](/plugins/sneak) <Badge type="info">Disabled by Default</Badge>            | Port of [vim-sneak](https://github.com/justinmk/vim-sneak).
| [Surround](/plugins/surround)                                                     | Port of [vim-surround](https://github.com/tpope/vim-surround).
| [Targets](/plugins/targets)                                                       | Port of [vim-targets](https://github.com/wellle/targets.vim).
| [Unimpaired](/plugins/unimpaired)                                                 | Port of [vim-unimpaired](https://github.com/tpope/vim-unimpaired).

::: info NOTE
For a comprehensive inventory of supported features kindly consult our [roadmap](/roadmap#plugins).
:::

## Additional features plugins

- [NeoVintageous Files](https://github.com/gerardroche/NeoVintageousFiles) <Badge type="tip">Install via Package Control</Badge> - File commands.
- [NeoVintageous Highlight Line](https://github.com/gerardroche/NeoVintageousHighlightLine) <Badge type="tip">Install via Package Control</Badge> - Auto-disable highlight line.
- [NeoVintageous Line Numbers](https://github.com/gerardroche/NeoVintageousLineNumbers) <Badge type="tip">Install via Package Control</Badge> - Auto-disable line numbers.
- [NeoVintageous Toggle](https://github.com/NeoVintageous/NeoVintageousToggle) <Badge type="tip">Install via Package Control</Badge> - Toggle NeoVintageous on and off.

## Enhanced support plugins

- [Origami](https://github.com/SublimeText/Origami) <Badge type="tip">Install via Package Control</Badge>

  Required for window commands, such as `CTRL-w s`, `CTRL-w v`, and `CTRL-w ]`.

- [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter) <Badge type="tip">Install via Package Control</Badge>

  Required for jump-to lint-error commands, `[l` (backward) and `]l` (forward).

  ::: tip
  NeoVintageous has built-in support for jumping to diffs: `[c` (backward) and `]c` (forward).
  :::

  ::: details LSP jump-to-diagnostic mappings
  If you are using [LSP](https://github.com/sublimelsp/LSP), create mappings for jumping to diagnostics. See [neovintageousrc](/reference/neovintageousrc) for details on creating key mappings.
  ```
  nnoremap [d :LspPrevDiagnostic<CR>
  nnoremap ]d :LspNextDiagnostic<CR>
  ```
  :::

## Keyboard layout plugins

- [NeoVintageous Dvorak](https://github.com/gerardroche/NeoVintageousDvorak) - <Badge type="tip">Install via Package Control</Badge> Dvorak mappings.
- [NeoVintageous Colemak](https://github.com/gerardroche/NeoVintageousColemak) - <Badge type="tip">Install via Package Control</Badge> Colemak mappings.
