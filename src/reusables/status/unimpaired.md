**Next and previous**

| Status              | Command           | Description
| :------------------ | :---------------- | :----------
|                     | `[a` | `:previous`
|                     | `]a` | `:next`
|                     | `[A` | `:first`
|                     | `]A` | `:last`
| :white_check_mark:  | `[b` | `:bprevious`
| :white_check_mark:  | `]b` | `:bnext`
| :white_check_mark:  | `[B` | `:bfirst`
| :white_check_mark:  | `]B` | `:blast`
| :white_check_mark:  | `[l` | `:lprevious` - Jump to previous lint-error (requires [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter)).
| :white_check_mark:  | `]l` | `:lnext` - Jump to next lint-error (requires [SublimeLinter](https://github.com/SublimeLinter/SublimeLinter)).
|                     | `[L` | `:lfirst`
|                     | `]L` | `:llast`
|                     | `[<C-L>` | `:lpfile`
|                     | `]<C-L>` | `:lnfile`
|                     | `[q` | `:cprevious`
|                     | `]q` | `:cnext`
|                     | `[Q` | `:cfirst`
|                     | `]Q` | `:clast`
|                     | `[<C-Q>` | `:cpfile` (Note that `<C-Q>` only works in a terminal if you disable
|                     | `]<C-Q>` | `:cnfile` flow control: stty -ixon)
|                     | `[t` | `:tprevious`
|                     | `]t` | `:tnext`
|                     | `[T` | `:tfirst`
|                     | `]T` | `:tlast`
|                     | `[<C-T>` | `:ptprevious`
|                     | `]<C-T>` | `:ptnext`
|                     | `[f` | Go to the file preceding the current one alphabetically in the current file's directory.  In the quickfix window, equivalent to `:colder`.
|                     | `]f` | Go to the file succeeding the current one alphabetically in the current file's directory.  In the quickfix window, equivalent to `:cnewer`.
| :white_check_mark:  | `[n` | Go to the previous SCM conflict marker or diff/patch hunk.  Try `d[n` inside a conflict.
| :white_check_mark:  | `]n` | Go to the next SCM conflict marker or diff/patch hunk.

**Line operations**

| Status              | Command           | Description
| :------------------ | :---------------- | :----------
| :white_check_mark:  | `[<Space>` | Add `[count]` blank lines above the cursor.
| :white_check_mark:  | `]<Space>` | Add `[count]` blank lines below the cursor.
| :white_check_mark:  | `[e` | Exchange the current line with `[count]` lines above it.
| :white_check_mark:  | `]e` | Exchange the current line with `[count]` lines below it.
|                     | `>p` | Paste after linewise, increasing indent.
|                     | `>P` | Paste before linewise, increasing indent.
|                     | `<p` | Paste after linewise, decreasing indent.
|                     | `<P` | Paste before linewise, decreasing indent.
|                     | `=p` | Paste after linewise, re-indenting.
|                     | `=P` | Paste before linewise, re-indenting.

**Option toggling**

| Status                    | On    | Off   | Toggle | Option
| :------------------------ | :---- | :---- | :----- | :-----
|                           | `[ob` | `]ob` | `yob`  | `'background'` (dark is off, light is on)
| :white_check_mark:        | `[oc` | `]oc` | `yoc`  | `'cursorline'`
|                           | `[od` | `]od` | `yod`  | `'diff'` (actually `:diffthis` / `:diffoff`)
| :white_check_mark:        | `[oh` | `]oh` | `yoh`  | `'hlsearch'`
| :white_check_mark:        | `[oi` | `]oi` | `yoi`  | `'ignorecase'`
| :white_check_mark:        | `[ol` | `]ol` | `yol`  | `'list'`
| :white_check_mark:        | `[on` | `]on` | `yon`  | `'number'`
| :white_check_mark:        | `[or` | `]or` | `yor`  | `'relativenumber'`
| :white_check_mark:        | `[os` | `]os` | `yos`  | `'spell'`
|                           | `[ot` | `]ot` | `yot`  | `'colorcolumn'` ("+1" or last used value)
|                           | `[ou` | `]ou` | `you`  | `'cursorcolumn'`
|                           | `[ov` | `]ov` | `yov`  | `'virtualedit'`
| :white_check_mark:        | `[ow` | `]ow` | `yow`  | `'wrap'`
|                           | `[ox` | `]ox` | `yox`  | `'cursorline'` `'cursorcolumn'` (x as in crosshairs)

**Option toggling (specific to Sublime Text)**

| Status                    | On    | Off   | Toggle | Option
| :------------------------ | :---- | :---- | :----- | :-----
| :white_check_mark: :star: | `[oa` | `]oa` | `yoa`  | `'menu'`
| :white_check_mark: :star: | `[oe` | `]oe` | `yoe`  | `'statusbar'`
| :white_check_mark: :star: | `[om` | `]om` | `yom`  | `'minimap'`
| :white_check_mark: :star: | `[ot` | `]ot` | `yot`  | `'sidebar'`
