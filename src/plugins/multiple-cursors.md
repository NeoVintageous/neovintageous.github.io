# Multiple Cursors

NeoVintageous provides multiple cursor support in normal mode and visual mode. This feature allows you to work with multiple cursors simultaneously, making repetitive editing tasks more efficient.

**Normal and Visual Mode Commands**

| Command                   | Description
| :------------------------ | :----------
| `<C-n>`, `gh`             | Start multiple cursor.
| `<C-n>`, `n`, `j`         | Add next match.
| `<C-x>`, `q`, `l`         | Skip next match.
| `<C-p>`, `N`, `k`, `Q`    | Remove current match.
| `<M-n>`, `\\A`            | Select all matches.
| `<Esc>`, `J`, `<Tab>`     | Quit and enter normal mode.
| `v`, `<Tab>`              | Enter normal mode.
| `gH`                      | Select all search occurrences (`/`, `?`, `*`, `#`).

When you have entered multiple cursor mode, you use visual commands such as `c`, `I`, `x`, and `y`, all work without any issues.

You can also go to Normal mode by pressing `v` and use normal commands there.

At any time, you can press `<Esc>` to exit back to regular Vim. To change the behaviour of `<Esc>`, see the [multi cursor exit from visual mode](#vintageous-multi-cursor-exit-from-visual-mode) setting.

::: info NOTE
Match case sensitivity is controlled by the Sublime Text find widget. *Menu → Find → Find...* OR Enter insert mode and press CTRL-f. Toggle the Case sensitive "Aa" button.
:::

::: tip
Leverage visual block mode to create vertical multiple cursors
1. `CTRL-v` Enter visual block mode.
1. `3j` Extend visual block 3 lines down.
1. `CTRL-n` Enter multiple cursor mode.
:::

## Settings

<!--@include:@/reusables/settings/multiple-cursors.md-->

## Status

<!--@include:@/reusables/status/multiple-cursors.md-->

Check out the [roadmap](/roadmap#multiple-cursors) for a detailed inventory of feature status.
