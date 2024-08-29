# Roadmap

:white_check_mark: Implemented

:star: Sublime Text specific; Non-Vim behaviour

`[count]` An optional number that may precede the command to multiply or iterate the command.

Vim reference: https://vimhelp.org

::: details Table of Contents (click to expand)
[[toc]]
:::

## Modes

- Vim reference: [vim-modes](https://vimhelp.org/intro.txt.html#vim-modes)

|                               | Mode                               | Description
| :---------------------------- | :----------------------------------| :----------
| :white_check_mark:            | Insert mode                        | `[count]i`
| :white_check_mark:            | Normal mode                        | `<Esc>`, `CTRL-[`, `CTRL-c`
| :white_check_mark:            | Visual mode                        | `v`
| :white_check_mark:            | Visual line mode                   | `[count]V`
| :white_check_mark:            | Visual block mode                  | `CTRL-v`
| :white_check_mark:            | Replace mode                       | `R`
|                               | Replace mode                       | `[count]R` [#1005](https://github.com/NeoVintageous/NeoVintageous/issues/1005)
| :white_check_mark:            | Operator&#8209;pending&nbsp;mode   | Like Normal mode, but after an operator command has start, and Vim is waiting for a `{motion}` to specify the text that the operator will work on.
| :white_check_mark:            | Command-line mode<br>Cmdline mode  | `:`, `/`, `?`, `!`
| :white_check_mark:            | Multiple-cursor mode               | `CTRL-n`, `gh` :star:

## About using the help files

- Vim reference: [helphelp.txt](https://vimhelp.org/helphelp.txt.html)

|                    | Command   | Description
| :----------------- | :-------- | :----------
| :white_check_mark: | `:h[elp]` | Open a window and display the help file in read-only mode.
| :white_check_mark: | <code>:h[elp]&nbsp;\{subject\}</code> | Like ":help", additionally jump to the tag `{subject}`. Example: `:help options`

## Editing and writing files

- Vim reference: [editing.txt](https://vimhelp.org/editing.txt.html)

### 1. Introduction

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `CTRL-G`<br>`:f[ile]`            | Prints the current file name.
| :white_check_mark: | `:buffers`<br>`:files`<br>`:ls`  | List all the currently known file names. *Multiple cursors are presented as a comma-delimited list of line numbers.*
| :white_check_mark: | `:e[dit]`                        | Edit the current file. This is useful to re-edit the current file, when it has been changed outside of Sublime.
| :white_check_mark: | `:e[dit]!`                       | Edit the current file always.  Discard any changes to the current buffer. This is useful if you want to start all over again.
| :white_check_mark: | <code>:e[dit]&nbsp;\{file\}</code> | Edit `{file}`.
| :white_check_mark: | `:ene[w]`                        | Edit a new, unnamed buffer.
| :white_check_mark: | `CTRL-^`                         | Edit the alternate file.  Mostly the alternate file is the previously edited file.  This is a quick way to toggle between two files.  It is equivalent to ":e #", except that it also works when there is no file name. Mostly the ^ character is positioned on the 6 key, pressing CTRL and 6 then gets you what we call `CTRL-^`. But on some non-US keyboards `CTRL-^` is produced in another way.
| :white_check_mark: | `gf`                             | Edit the file whose name is under or after the cursor. Mnemonic: "goto file". For Unix the '~' character is expanded, like in "~user/file".  Environment variables are expanded too.
| :white_check_mark: | `{Visual}gf`                     | Same as "gf", but the highlighted text is used as the name of the file to edit. Leading blanks are skipped, otherwise all blanks and special characters are included in the file name. (For `{Visual}` see `Visual-mode`.).
| :white_check_mark: | `gF`                             | Same as "gf", except if a number follows the file name, then the cursor is positioned on that line in the file. The file name and the number must be separated by a non-filename and non-numeric character. White space between the filename, the separator and the number are ignored. Examples: `eval.c:10`, `eval.c:10:42`, `eval.c@20`, `eval.c(30)`.
| :white_check_mark: | `{Visual}gF`                     | Same as "v_gf".

### 4. Writing

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `:w[rite]`                       | Write the whole buffer to the current file.  This is the normal way to save changes to a file.
| :white_check_mark: | `:w[rite]!`                      | Like ":write", but forcefully write when there is another reason why writing was refused.
| :white_check_mark: | <code>:w[rite]&nbsp;\{file\}</code>     | Like ":write", but write to `{file}`.

WRITING WITH MULTIPLE BUFFERS

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `:wa[ll]`                        | Write all changed buffers.  Buffers without a file name cause an error message.  Buffers which are readonly are not written.
| :white_check_mark: | `:wa[ll]!`                       | Write all changed buffers, even the ones that are readonly.  Buffers without a file name are not written and cause an error message.

### 5. Writing and quitting

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `:q[uit]`                        | Quit the current window.  Quit Sublime if this is the last view. See `CTRL-W_q` for quitting another window.
| :white_check_mark: | `:q[uit]!`                       | Quit without writing, also when the current buffer has changes. Use ":qall!" to exit always.
| :white_check_mark: | `:wq`                            | Write the current file and close the window.  If this was the last window Sublime quits. Writing fails when the file is read-only or the buffer does not have a name.  Quitting fails when the last file in the argument list has not been edited.
| :white_check_mark: | `:wq!`                           | Write the current file and close the window.  If this was the last window Sublime quits. Writing fails when the current buffer does not have a name.
| :white_check_mark: | `:wq {file}`                     | Write to `{file}` and close the window.  If this was the last view Sublime quits. Quitting fails when the last file in the argument list has not been edited.
| :white_check_mark: | `:wq! {file}`                    | Write to `{file}` and close the window.  Quit Sublime if this was the last view.
| :white_check_mark: | `:[range]wq[!]`                  | Same as above, but only write the lines in `[range]`.
| :white_check_mark: | <code>:[range]x[it][!]&nbsp;[file]</code> | Like ":wq", but write only when changes have been made.
| :white_check_mark: | <code>:[range]exi[t][!]&nbsp;[file]</code> | Same as ":xit".
| :white_check_mark: | `ZZ`                             | Write current file, if modified, and close the current window (same as ":x").
| :white_check_mark: | `ZQ`                             | Quit without checking for changes (same as ":q!").

MULTIPLE WINDOWS AND BUFFERS

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `:qa[ll]`                        | Exit Vim, unless there are some buffers which have been changed.
| :white_check_mark: | `:qa[ll]!`                       | Exit Vim.  Any changes to buffers are lost.
| :white_check_mark: | `:quita[ll][!]`                  | Same as ":qall".
| :white_check_mark: | `:wqa[ll]`<br>`:xa[ll]`          | Write all changed buffers and exit Sublime.  If there are buffers without a file name, which are readonly or which cannot be written for another reason, Sublime will not quit.
| :white_check_mark: | `:wqa[ll]!`<br>`:xa[ll]!`        | Write all changed buffers, even the ones that are readonly, and exit Vim.  If there are buffers without a file name or which cannot be written for another reason Sublime will not quit.

### 6. Dialogs

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `:bro[wse]`                      | Open a file selection dialog.

### 7. The current directory

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | :cd[!]                           | Change the current directory to the home directory. Use `:pwd` to print the current directory.
| :white_check_mark: | :cd[!]&nbsp;\{path\}             | Change the current directory to `{path}`. To change to the directory of the current file: `:cd %:h`.
| :white_check_mark: | :pw[d]                           | Print the current directory name.

## Commands for moving around

- Vim reference: [motion.txt](https://vimhelp.org/motion.txt.html)

### 1. Motions and operators

- Vim reference: `operator`

|                    | Command   | Description
| :----------------- | :-------- | :----------
| :white_check_mark: | `c`       | change
| :white_check_mark: | `d`       | delete
| :white_check_mark: | `y`       | yank into register (does not change the text)
|                    | `~`       | swap case (only if `'tildeop'` is set)
| :white_check_mark: | `g~`      | swap case
| :white_check_mark: | `gu`      | make lowercase
| :white_check_mark: | `gU`      | make uppercase
| :white_check_mark: | `!`       | filter through an external program
|                    | `=`       | filter through `'equalprg'` or C-indenting if empty
| :white_check_mark: | `gq`      | text formatting
|                    | `gw`      | text formatting with no cursor movement
|                    | `g?`      | ROT13 encoding
| :white_check_mark: | `>`       | shift right
| :white_check_mark: | `<`       | shift left
|                    | `g@`      | call function set with the `'operatorfunc'` option

FORCING A MOTION TO BE LINEWISE, CHARACTERWISE OR BLOCKWISE

|                    | Command   | Description
| :----------------- | :-------- | :----------
|                    | v         | When used after an operator, before the motion command: Force the operator to work characterwise, also when the motion is linewise.  If the motion was linewise, it will become `exclusive`.<br> If the motion already was characterwise, toggle inclusive/exclusive.  This can be used to make an exclusive motion inclusive and an inclusive motion exclusive. [#90](https://github.com/NeoVintageous/NeoVintageous/issues/90)
|                    | V         | When used after an operator, before the motion command: Force the operator to work linewise, also when the motion is characterwise. [#90](https://github.com/NeoVintageous/NeoVintageous/issues/90)
|                    | CTRL-V    | When used after an operator, before the motion command: Force the operator to work blockwise.  This works like Visual block mode selection, with the corners defined by the cursor position before and after the motion. [#90](https://github.com/NeoVintageous/NeoVintageous/issues/90)

### 2. Left-right motions

- Vim reference: `left-right-motions`

|                    | Command                              | Description
| :----------------- | :----------------------------------- | -----------
| :white_check_mark: | `h`, `<Left>`, `CTRL-H`, `<BS>`      | `[count]` characters to the left.
| :white_check_mark: | `l`, `<Right>`, `<Space>`            | `[count]` characters to the right.
| :white_check_mark: | `0`                                  | To the first character of the line.
| :white_check_mark: | `<Home>`                             | To the first character of the line.
| :white_check_mark: | `^`                                  | To the first non-blank character of the line.
| :white_check_mark: | `$`, `<End>`                         | To the end of the line.
| :white_check_mark: | `g_`                                 | To the last non-blank character of the line and `[count-1]` lines downward.
|                    | `g0`, `g<Home>`                      | When lines wrap (`'wrap'` on): To the first character of the screen line.
|                    | `g^`                                 | When lines wrap (`'wrap'` on): To the first non-blank character of the screen line.
| :white_check_mark: | `gm`                                 | Like "g0", but half a screen-width to the right (or as much as possible).
|                    | `gM`                                 | Like "g0", but to halfway the text of the line.
| :white_check_mark: | `g$` or `g<End>`                     | When lines wrap (`'wrap'` on): To the last character of the screen line and `[count-1]` screen lines downward.
| :white_check_mark: | `\|`                                 | To screen column `[count]` in the current line.
| :white_check_mark: | `f{char}`                            | To `[count]`'th occurrence of `{char}` to the right.
| :white_check_mark: | `F{char}`                            | To the `[count]`'th occurrence of `{char}` to the left.
| :white_check_mark: | `t{char}`                            | Till before `[count]`'th occurrence of `{char}` to the right.
| :white_check_mark: | `T{char}`                            | Till after `[count]`'th occurrence of `{char}` to the left.
| :white_check_mark: | `;`                                  | Repeat latest f, t, F or T `[count]` times.
| :white_check_mark: | `,`                                  | Repeat latest f, t, F or T in opposite direction `[count]` times.

### 3. Up-down motions

- Vim reference: `up-down-motions`

|                    | Command                                    | Description
| :----------------- | :----------------------------------------- | -----------
| :white_check_mark: | `k`, `<Up>`, `CTRL-P`                      | `[count]` lines upward.
| :white_check_mark: | `j`, `<Down>`, `CTRL-J`, `<NL>`, `CTRL-N`  | `[count]` lines downward.
| :white_check_mark: | `gk`, `g<Up>`                              | `[count]` display lines upward.
| :white_check_mark: | `gj`, `g<Down>`                            | `[count]` display lines downward.
| :white_check_mark: | `-`, `<minus>`                             | `[count]` lines upward, on the first non-blank character.
| :white_check_mark: | `+`, `CTRL-M`, `<CR>`                      | `[count]` lines downward, on the first non-blank character.
| :white_check_mark: | `_`, `<underscore>`                        | `[count]` - 1 lines downward, on the first non-blank character.
| :white_check_mark: | `G`                                        | Goto line `[count]`, default last line, on the first non-blank character.
|                    | `<C-End>`                                  | Goto line `[count]`, default last line, on the last character.
| :white_check_mark: | `<C-Home>`, `gg`                           | Goto line `[count]`, default first line, on the first non-blank character.
| :white_check_mark: | `:[range]`                                 | Set the cursor on the last line number in `[range]`.
| :white_check_mark: | `{count}%`                                 | Go to `{count}` percentage in the file, on the first non-blank in the line.
|                    | `:[range]go[to] [count]`, `[count]go`      | Go to `[count]` byte in the buffer.

### 4. Word motions

- Vim reference: `word-motions`

|                    | Command            | Description
| :----------------- | :----------------- | -----------
| :white_check_mark: | w<br>`<S-Right>`   | `[count]` words forward.
| :white_check_mark: | W<br>`<C-Right>`   | `[count]` WORDS forward.
| :white_check_mark: | e                  | Forward to the end of word `[count]`.
| :white_check_mark: | E                  | Forward to the end of WORD `[count]`.
| :white_check_mark: | b<br>`<S-Left>`    | `[count]` words backward.
| :white_check_mark: | B<br>`<C-Left>`    | `[count]` WORDS backward.
| :white_check_mark: | ge                 | Backward to the end of word `[count]`.
| :white_check_mark: | gE                 | Backward to the end of WORD `[count]`.

### 5. Text object motions

- Vim reference: `object-motions`

|                    | Command  | Description
| :----------------- | :------- | -----------
| :white_check_mark: | `(`      | a `sentence` backward.
| :white_check_mark: | `)`      | a `sentence` forward.
| :white_check_mark: | `{`      | `[count]` `paragraph`s backward.
| :white_check_mark: | `}`      | `[count]` `paragraph`s forward.
|                    | `]]`     | `[count]` `section`s forward or to the next '\{' in the first column. [#32](https://github.com/NeoVintageous/NeoVintageous/issues/32)
|                    | `][`     | `[count]` `section`s forward or to the next '\}' in the first column. [#32](https://github.com/NeoVintageous/NeoVintageous/issues/32)
|                    | `[[`     | `[count]` `section`s backward or to the previous '\{' in the first column. [#32](https://github.com/NeoVintageous/NeoVintageous/issues/32)
|                    | `[]`     | `[count]` `section`s backward or to the previous '\}' in the first column. [#32](https://github.com/NeoVintageous/NeoVintageous/issues/32)

### 6. Text object selection

- Vim reference: `text-objects`

|                    | Command                       | Description
| :----------------- | :---------------------------- | -----------
| :white_check_mark: | `aw`                          | "a word", select `[count]` words.
| :white_check_mark: | `iw`                          | "inner word", select `[count]` words.
| :white_check_mark: | `aW`                          | "a WORD", select `[count]` WORDs.
| :white_check_mark: | `iW`                          | "inner WORD", select `[count]` WORDs.
| :white_check_mark: | `as`                          | "a sentence".
| :white_check_mark: | `is`                          | "inner sentence".
| :white_check_mark: | `ap`                          | "a paragraph", select `[count]` paragraphs.
| :white_check_mark: | `ip`                          | "inner paragraph", select `[count]` paragraphs.
| :white_check_mark: | `a]`<br>`a[`                  | "a `[]` block".
| :white_check_mark: | `i]`<br>`i[`                  | "inner `[]` block".
| :white_check_mark: | `a)`<br>`a(`<br>`ab`          | "a block", select blocks, from "[(" to the matching ')', including the '(' and ')'.
| :white_check_mark: | `i)`<br>`i(`<br>`ib`          | "inner block", select blocks, from "[(" to the matching ')', excluding the '(' and ')'.
| :white_check_mark: | `a>`<br>`a<`                  | "a <> block".
| :white_check_mark: | `i>`<br>`i<`                  | "inner <> block".
| :white_check_mark: | `at`                          | "a tag block".
| :white_check_mark: | `it`                          | "inner tag block".
| :white_check_mark: | `a}`<br>`a{`<br>`aB`          | "a Block", select blocks, from "[\{" to the matching '\}', including the '\{' and '\}'.
| :white_check_mark: | `i}`<br>`i{`<br>`iB`          | "inner block", select blocks, from "[\{" to the matching '\}', excluding the '\{' and '\}'.
| :white_check_mark: | `a"`<br>`a'`<br><code>a\`</code> | Selects the text from the previous quote until the next quote.
| :white_check_mark: | `i"`<br>`i'`<br><code>i\`</code> | Like `a"`, `a'` and <code>a\`</code>, but exclude the quotes.

### 7. Marks

- Vim reference: `mark-motions`

|                    | Command                              | Description
| :----------------- | :------------------------------------| -----------
| :white_check_mark: | `m{a-zA-Z}`                          | Set mark `{a-zA-Z}` at cursor position (does not move the cursor, this is not a motion command).
| :white_check_mark: | `'{a-z}`<br><code>\`\{a-z\}</code>   | Jump to the mark `{a-z}` in the current buffer.
| :white_check_mark: | `'{A-Z}`<br><code>\`\{A-Z\}</code>   | To the mark `{A-Z}` in the file where it was set (not a motion command when in another file).
| :white_check_mark: | `:marks`                             | List all the current marks (not a motion command). The `'(`, `')`, `'{` and `'}` marks are not listed. The first column has number zero.
| :white_check_mark: | <code>:delm[arks]&nbsp;\{marks\}</code> | Delete the specified marks.  Marks that can be deleted include A-Z and 0-9.  You cannot delete the ' mark. They can be specified by giving the list of mark names, or with a range, separated with a dash.  Spaces are ignored.  Examples: <br>`:delmarks a` deletes mark a <br>`:delmarks a b c` deletes marks a, b and c <br>`:delmarks Aa` deletes marks A and a <br>`:delmarks p-z` deletes marks in the range p to z
| :white_check_mark: | `:delm[arks]!`                       | Delete all marks for the current buffer, but not marks A-Z or 0-9.
| :white_check_mark: | `''`<br><code>\`\`</code>            | To the position before the latest jump
|                    |  `'[`<br><code>\`[</code>            | To the first character of the previously changed or yanked text. [#951](https://github.com/NeoVintageous/NeoVintageous/issues/951)
|                    |  `']`<br><code>\`]</code>            | To the last character of the previously changed or yanked text. [#951](https://github.com/NeoVintageous/NeoVintageous/issues/951)

### 8. Jumps

- Vim reference: `jump-motions`

|                    | Command                        | Description
| :----------------- | :----------------------------- | -----------
| :white_check_mark: | `CTRL-o`                       | Go to `[count]` older cursor position in jump list (not a motion command).
| :white_check_mark: | `<Tab>`<br>`CTRL-i`            | Go to `[count]` newer cursor position in jump list (not a motion command).

CHANGE LIST JUMPS

|                    | Command                        | Description
| :----------------- | :----------------------------- | -----------
|                    | `g;`                           | Go to `[count]` older position in change list. If `[count]` is larger than the number of older change positions go to the oldest change. If there is no older change an error message is given. (not a motion command)
|                    | `g,`                           | Go to `[count]` newer position in change list. Just like `g;` but in the opposite direction. (not a motion command)

### 9. Various motions

- Vim reference: `various-motions`

|                    | Command  | Description
| :----------------- | :------- | -----------
| :white_check_mark: | `%`      | Find the next item in this line after or under the cursor and jump to its match.
| :white_check_mark: | `[(`     | Go to previous unmatched '('.
| :white_check_mark: | `[{`     | Go to previous unmatched '\{'.
| :white_check_mark: | `])`     | Go to next unmatched ')'.
| :white_check_mark: | `]}`     | Go to next unmatched '\}'.
| :white_check_mark: | `H`      | To the first line of the window on the first non-blank character. Cursor is adjusted for `'scrolloff'` option, unless an operator is pending, in which case the text may scroll.  E.g. "yH" yanks from the first visible line until the cursor line (inclusive).
| :white_check_mark: | `M`      | To Middle line of window, on the first non-blank character.
| :white_check_mark: | `L`      | To last line of the window on the first non-blank character. Cursor is adjusted for `'scrolloff'` option, unless an operator is pending, in which case the text may scroll.  E.g. "yL" yanks from the cursor to the last visible line.

## Scrolling the text in the window

- Vim reference: [scroll.txt](https://vimhelp.org/scroll.txt.html)

### 1. Scrolling downwards

The following commands move the edit window (the part of the buffer that you see) downwards (this means that more lines downwards in the text buffer can be seen):

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | CTRL-E                                         | Scroll window `[count]` lines downwards in the buffer. The text moves upwards on the screen. Mnemonic: Extra lines.
| :white_check_mark: | CTRL-D                                         | Scroll window Downwards in the buffer.  The number of lines comes from the `'scroll'` option (default: half a screen).  If `[count]` given, first set `'scroll'` option to `[count]`.  The cursor is moved the same number of lines down in the file (if possible; when lines wrap and when hitting the end of the file there may be a difference).  When the cursor is on the last line of the buffer nothing happens and a beep is produced.
| :white_check_mark: | CTRL-F<br>`<S-Down>`<br>`<PageDown>`           | Scroll window `[count]` pages Forwards (downwards) in the buffer.

### 2. Scrolling upwards

The following commands move the edit window (the part of the buffer that you see) upwards (this means that more lines upwards in the text buffer can be seen):

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | `CTRL-Y`                                       | Scroll window `[count]` lines upwards in the buffer. The text moves downwards on the screen.
| :white_check_mark: | `CTRL-U`                                       | Scroll window Upwards in the buffer.  The number of lines comes from the `'scroll'` option (default: half a screen).  If `[count]` given, first set the `'scroll'` option to `[count]`.  The cursor is moved the same number of lines up in the file (if possible; when lines wrap and when hitting the end of the file there may be a difference).  When the cursor is on the first line of the buffer nothing happens and a beep is produced.
| :white_check_mark: | `<S-Up>`, `<PageUp>`, `CTRL-B`                 | Scroll window `[count]` pages Backwards (upwards) in the buffer.

### 3. Scrolling relative to cursor

The following commands reposition the edit window (the part of the buffer that you see) while keeping the cursor on the same line.

::: info NOTE
The `'scrolloff'` option adds context lines above and below the cursor.
:::

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | `z<CR>`                                        | Redraw, line `[count]` at top of window (default cursor line).  Put cursor at first non-blank in the line.
| :white_check_mark: | `zt`                                           | Like "z`<CR>`", but leave the cursor in the same column.
|                    | `z{height}<CR>`                                | Redraw, make window `{height}` lines tall.  This is useful to make the number of lines small when screen updating is very slow.  Cannot make the height more than the physical screen height.
| :white_check_mark: | `z.`                                           | Redraw, line `[count]` at centre of window (default cursor line).  Put cursor at first non-blank in the line.
| :white_check_mark: | `zz`                                           | Like "z.", but leave the cursor in the same column. Careful: If caps-lock is on, this command becomes "ZZ": write buffer and exit!
| :white_check_mark: | `z-`                                           | Redraw, line `[count]` at bottom of window (default cursor line).  Put cursor at first non-blank in the line.
| :white_check_mark: | `zb`                                           | Like "z-", but leave the cursor in the same column.

### 4. Scrolling horizontally

For the following four commands the cursor follows the screen.  If the character that the cursor is on is moved off the screen, the cursor is moved to the closest character that is on the screen.  The value of `'sidescroll'` is not used.

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `z<Right>`<br>`zl`               | Move the view on the text `[count]` characters to the right, thus scroll the text `[count]` characters to the left.  This only works when `'wrap'` is off.
| :white_check_mark: | `z<Left>`<br>`zh`                | Move the view on the text `[count]` characters to the left, thus scroll the text `[count]` characters to the right.  This only works when `'wrap'` is off.
| :white_check_mark: | `zL`                             | Move the view on the text half a screen-width to the right, thus scroll the text half a screen-width to the left.  This only works when `'wrap'` is off.
| :white_check_mark: | `zH`                             | Move the view on the text half a screen-width to the left, thus scroll the text half a screen-width to the right.  This only works when `'wrap'` is off.

## Insert and Replace mode

- Vim reference: [insert.txt](https://vimhelp.org/insert.txt.html)

### 1. Special keys

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | CTRL-[<br>`<Esc>`                              | End insert or Replace mode, go back to Normal mode. Note: If your `<Esc>` key is hard to hit on your keyboard, train yourself to use `CTRL-[`.
| :white_check_mark: | CTRL-C                                         | Quit insert mode, go back to Normal mode.
| :white_check_mark: | CTRL-W                                         | Delete the word before the cursor.

### 2. Special special keys

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | `<Left>`                                       | Cursor one character left.
| :white_check_mark: | `<Right>`                                      | Cursor one character right.

### 7. Insert mode completion

Completing whole lines

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | CTRL-X CTRL-L                                  | Search backwards for a line that starts with the same characters as those in the current line before the cursor.  Indent is ignored.  The matching line is inserted in front of the cursor.
| :white_check_mark: | CTRL-N                                         | Search forward for next matching line.  This line replaces the previous matching line.
| :white_check_mark: | CTRL-P                                         | Search backwards for next matching line.  This line replaces the previous matching line.
|                    | CTRL-L                                         | Same as CTRL-P.

Completing keywords in current file

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
|                    | CTRL-X CTRL-N                                  |
|                    | CTRL-N                                         | Search forward for next matching keyword.  This keyword replaces the previous matching keyword.
|                    | CTRL-P                                         | Search backwards for next matching keyword.  This keyword replaces the previous matching keyword.

Completing file names

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
|                    | CTRL-X CTRL-F                                  | Search for the first file name that starts with the same characters as before the cursor.  The matching file name is inserted in front of the cursor.
|                    | CTRL-N                                         | Search forwards for next matching file name.  This file name replaces the previous matching file name.
|                    | CTRL-P                                         | Search backward for previous matching file name. This file name replaces the previous matching file name.
|                    | CTRL-F                                         | Same as CTRL-N.

Completing tags

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
|                    | CTRL-X CTRL-]                                  | Search for the first tag that starts with the same characters as before the cursor.  The matching tag is inserted in front of the cursor.  See also CTRL-].
|                    | CTRL-N                                         | Search forwards for next matching tag.  This tag replaces the previous matching tag.
|                    | CTRL-P                                         | Search backward for previous matching tag.  This tag replaces the previous matching tag.
|                    | CTRL-]                                         | Same as CTRL-N.

Completing keywords from different sources

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | CTRL-N                                         | Find next match for words that start with the keyword in front of the cursor.
| :white_check_mark: | CTRL-P                                         | Find previous match for words that start with the keyword in front of the cursor.
| :white_check_mark: | CTRL-N                                         | Search forward for next matching keyword.
| :white_check_mark: | CTRL-P                                         | Search backwards for next matching keyword.

### 8. Insert mode commands

The following commands can be used to insert new text into the buffer.  They can all be undone and repeated with the "." command.

|                    | Command                                        | Description
| :----------------- | :--------------------------------------------- | :----------
| :white_check_mark: | a                                              | Append text after the cursor `[count]` times.  If the cursor is in the first column of an empty line Insert starts there.  But not when `'virtualedit'` is set!
| :white_check_mark: | A                                              | Append text at the end of the line `[count]` times.
| :white_check_mark: | i<br>`<insert>`                                | Insert text before the cursor `[count]` times.
| :white_check_mark: | I                                              | Insert text before the first non-blank in the line `[count]` times.
|                    | gI                                             | Insert text in column 1 `[count]` times.
|                    | gi                                             | Insert text in the same position as where Insert mode was stopped last time in the current buffer.<br> This uses the `'^` mark.  It's different from "<code>\`</code>^i" when the mark is past the end of the line.<br> The position is corrected for inserted/deleted lines, but NOT for inserted/deleted characters. [#949](https://github.com/NeoVintageous/NeoVintageous/issues/949)
| :white_check_mark: | o                                              | Begin a new line below the cursor and insert text, repeat `[count]` times.
| :white_check_mark: | O                                              | Begin a new line above the cursor and insert text, repeat `[count]` times.

## Deleting and replacing text

- Vim reference: [change.txt](https://vimhelp.org/change.txt.html)

### 1. Deleting text

|                    | Command                                                                | Description
| :----------------- | :--------------------------------------------------------------------- | :----------
| :white_check_mark: | ["x]`<Del>` or<br>["x]x                                                | Delete `[count]` characters under and after the cursor [into register x] (not `linewise`).  Does the same as "dl".
| :white_check_mark: | ["x]X                                                                  | Delete `[count]` characters before the cursor [into register x] (not `linewise`).  Does the same as "dh".
| :white_check_mark: | ["x]d`{motion}`                                                        | Delete text that `{motion}` moves over [into register x]. There are some exceptions.
| :white_check_mark: | ["x]dd                                                                 | Delete `[count]` lines [into register x] `linewise`.
| :white_check_mark: | ["x]D                                                                  | Delete the characters under the cursor until the end of the line and `[count]`-1 more lines [into register x]; synonym for "d$". (not `linewise`).
| :white_check_mark: | `{Visual}`["x]x or<br>`{Visual}`["x]d or<br>`{Visual}`["x]`<Del>`      | Delete the highlighted text [into register x] (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | `{Visual}`["x]X<br>`{Visual}`["x]D                                     | Delete the highlighted lines [into register x] (for `{Visual}` see `Visual-mode`).  In Visual block mode, "D" deletes the highlighted text plus all text until the end of the line.
| :white_check_mark: | :`[range]`d[elete]&nbsp;[x]                                            | Delete `[range]` lines (default: current line) [into register x].

|                    | Command                      | Description
| :----------------- | :--------------------------- | :----------
| :white_check_mark: | J                            | Join `[count]` lines, with a minimum of two lines. Remove the indent and insert up to two spaces (see below).  Fails when on the last line of the buffer. If `[count]` is too big it is reduced to the number of lines available.
| :white_check_mark: | `{Visual}`J                  | Join the highlighted lines, with a minimum of two lines.  Remove the indent and insert up to two spaces (see below).
| :white_check_mark: | gJ                           | Join `[count]` lines, with a minimum of two lines. Don't insert or remove any spaces.
| :white_check_mark: | `{Visual}`gJ                 | Join the highlighted lines, with a minimum of two lines.  Don't insert or remove any spaces.

### 2. Delete and insert

|                    | Command                                                                | Description
| :----------------- | :--------------------------------------------------------------------- | :----------
| :white_check_mark: | R                                                                      | Enter Replace mode: Each character you type replaces an existing character, starting with the character under the cursor.
| :white_check_mark: | ["x]c\{motion\}                                                        | Delete `{motion}` text [into register x] and start insert.
| :white_check_mark: | ["x]cc                                                                 | Delete `[count]` lines [into register x] and start insert `linewise`.
| :white_check_mark: | ["x]C                                                                  | Delete from the cursor position to the end of the line and `[count]`-1 more lines [into register x], and start insert.  Synonym for c$ (not `linewise`).
| :white_check_mark: | ["x]s                                                                  | Delete `[count]` characters [into register x] and start insert (s stands for Substitute).  Synonym for "cl" (not `linewise`).
| :white_check_mark: | ["x]S                                                                  | Delete `[count]` lines [into register x] and start insert.  Synonym for "cc" `linewise`.
| :white_check_mark: | \{Visual\}["x]c<br>\{Visual\}["x]s                                     | Delete the highlighted text [into register x] and start insert (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | \{Visual\}r\{char\}                                                    | Replace all selected characters by `{char}`.
|                    | \{Visual\}["x]C                                                        | Delete the highlighted lines [into register x] and start insert.
|                    | \{Visual\}["x]S                                                        | Delete the highlighted lines [into register x] and start insert (for `{Visual}` see `Visual-mode`).
|                    | \{Visual\}["x]R                                                        | Currently just like `{Visual}`["x]S.  In a next version it might work differently.

### 3. Simple changes

|                    | Command      | Description
| :----------------- | :----------- | :----------
| :white_check_mark: | r\{char\}    | Replace the character under the cursor with `{char}`.

The following commands change the case of letters.

|                    | Command          | Description
| :----------------- | :--------------- | :----------
| :white_check_mark: | \~               | `'notildeop'` option: Switch case of the character under the cursor and move the cursor to the right. If a `[count]` is given, do that many characters.
|                    | \~\{motion\}     | `'tildeop'` option: switch case of `{motion}` text.
| :white_check_mark: | g\~\{motion\}    | Switch case of `{motion}` text.
| :white_check_mark: | g\~g\~<br>g\~\~  | Switch case of current line.
| :white_check_mark: | \{Visual\}\~     | Switch case of highlighted text (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | \{Visual\}U      | Make highlighted text uppercase (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | gU\{motion\}     | Make `{motion}` text uppercase.
| :white_check_mark: | gUgU<br>gUU      | Make current line uppercase.
| :white_check_mark: | \{Visual\}u      | Make highlighted text lowercase (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | gu\{motion\}     | Make `{motion}` text lowercase.
| :white_check_mark: | gugu<br>guu      | Make current line lowercase.

Adding and subtracting

|                    | Command                      | Description
| :----------------- | :--------------------------- | :----------
| :white_check_mark: | CTRL-A                       | Add `[count]` to the number or alphabetic character at or after the cursor.
| :white_check_mark: | \{Visual\}CTRL-A             | Add `[count]` to the number or alphabetic character in the highlighted text.
|                    | \{Visual\}g&nbsp;CTRL-A      | Add `[count]` to the number or alphabetic character in the highlighted text. If several lines are highlighted, each one will be incremented by an additional `[count]` (so effectively creating a `[count]` incrementing sequence).
| :white_check_mark: | CTRL-X                       | Subtract `[count]` from the number or alphabetic character at or after the cursor.
| :white_check_mark: | \{Visual\}CTRL-X             | Subtract `[count]` from the number or alphabetic character in the highlighted text.
|                    | \{Visual\}g&nbsp;CTRL-X      | Subtract `[count]` from the number or alphabetic character in the highlighted text. If several lines are highlighted, each value will be decremented by an additional `[count]` (so effectively creating a `[count]` decrementing sequence).

SHIFTING LINES LEFT OR RIGHT

|                    | Command                      | Description
| :----------------- | :--------------------------- | :----------
| :white_check_mark: | &lt;\{motion\}               | Shift `{motion}` lines leftwards.
| :white_check_mark: | &lt;                         | Shift `[count]` lines leftwards.
| :white_check_mark: | \{Visual\}[count]&lt;        | Shift the highlighted lines `[count]` leftwards (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | &gt;\{motion\}               | Shift `{motion}` lines one rightwards.
| :white_check_mark: | &gt;                         | Shift `[count]` lines one rightwards.
| :white_check_mark: | \{Visual\}[count]&gt;        | Shift the highlighted lines `[count]` rightwards (for `{Visual}` see `Visual-mode`).

### 4. Complex changes

|                    | Command                                                                              | Description
| :----------------- | :----------------------------------------------------------------------------------- | :----------
| :white_check_mark: | =\{motion\}                                                                          | Filter `{motion}` lines through the re-indent command.
| :white_check_mark: | ==                                                                                   | Filter `[count]` lines like with `={motion}`.
| :white_check_mark: | \{Visual\}=                                                                          | Filter the highlighted lines like with `={motion}`.

#### 4.2 Substitute

|                    | Command                                                                              | Description
| :----------------- | :----------------------------------------------------------------------------------- | :----------
| :white_check_mark: | `:[range]s[ubstitute]/{pattern}/{string}/[flags] [count]`                            | For each line in `[range]` replace a match of \{pattern\} with \{string\}. When `[range]` and `[count]` are omitted, replace in the current line only.  When `[count]` is given, replace in `[count]` lines, starting with the last line in `[range]`. When `[range]` is omitted start in the current line. `[count]` must be a positive number. See `:s_flags` for `[flags]`.
| :white_check_mark: | `:[range]s[ubstitute] [flags] [count]`<br><br>`:[range]&[&][flags] [count]`          | Repeat last :substitute with same search pattern and substitute string, but without the same flags.  You may add `[flags]`, see `:s_flags`.
| :white_check_mark: | &                                                                                    | Synonym for `:s` (repeat last substitute).  Note that the flags are not remembered, thus it might actually work differently.  You can use `:&&` to keep the flags.
|                    | g&                                                                                   | Synonym for `:%s//~/&` (repeat last substitute with last search pattern on all lines with the same flags). For example, when you first do a substitution with `:s/pattern/repl/flags` and then `/search` for something else, `g&` will do `:%s/search/repl/flags`. Mnemonic: global substitute.

The flags that you can use for the substitute commands:

|                    | Flag  | Description
| :----------------- | :---- | :----------
| :white_check_mark: | `[c]` | Confirm each substitution.
|                    | `[&]` | Must be the first one: Keep the flags from the previous substitute command.  Examples: `:&& :s/this/that/&`. Note that `:s` and `:&` don't keep the flags.
| :white_check_mark: | `[g]` | Replace all occurrences in the line.  Without this argument, replacement occurs only for the first occurrence in each line.
| :white_check_mark: | `[i]` | Ignore case for the pattern.  The `'ignorecase'` and `'smartcase'` options are not used.
| :white_check_mark: | `[I]` | Don't ignore case for the pattern.  The `'ignorecase'` and `'smartcase'` options are not used.

### 5. Copying and moving text

|                    | Command                              | Description
| :----------------- | :----------------------------------- | :----------
| :white_check_mark: | `"{register}`                        | Use `{register}` for next delete, yank or put.  Use an uppercase character to append with delete and yank. Registers ".", "%", "#" and ":" only work with put.
| :white_check_mark: | `:reg[isters]`                       | Display the type and contents of all numbered and named registers.
| :white_check_mark: | `["x]y{motion}`                      | Yank `{motion}` text [into register x].
| :white_check_mark: | `["x]yy`                             | Yank `[count]` lines [into register x] `linewise`.
| :white_check_mark: | `["x]Y`                              | yank `[count]` lines [into register x] (synonym for yy, `linewise`).  If you like "Y" to work from the cursor to the end of line (which is more logical, but not Vi-compatible) use ":map Y y$".
| :white_check_mark: | `{Visual}["x]y`                      | Yank the highlighted text [into register x] (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | `{Visual}["x]Y`                      | Yank the highlighted lines [into register x] (for `{Visual}` see `Visual-mode`).
| :white_check_mark: | <code>:[range]y[ank]&nbsp;[x]</code> | Yank `[range]` lines [into register x].
| :white_check_mark: | `["x]p`                              | Put the text [from register x] after the cursor `[count]` times.
| :white_check_mark: | `["x]P`                              | Put the text [from register x] before the cursor `[count]` times.
| :white_check_mark: | `["x]gp`                             | Just like "p", but leave the cursor just after the new text.
| :white_check_mark: | `["x]gP`                             | Just like "P", but leave the cursor just after the new text.
| :white_check_mark: | `["x]]p`                             | Like "p", but adjust the indent to the current line.
| :white_check_mark: | `["x][P`<br>`["x]]P`<br>`["x][p`     | Like "P", but adjust the indent to the current line.

There are ten types of registers:


|                    | #   | Type
| :----------------- | :-- | :---
| :white_check_mark: | 1.  | The unnamed register ""
| :white_check_mark: | 2.  | 10 numbered registers "0 to "9
| :white_check_mark: | 3.  | The small delete register "-
| :white_check_mark: | 4.  | 26 named registers "a to "z or "A to "Z
| :white_check_mark: | 5.  | Three read-only registers "%
|                    | 5.  | Three read-only registers ":, ".
| :white_check_mark: | 6.  | Alternate buffer register "#
|                    | 7.  | The expression register "=
| :white_check_mark: | 8.  | The selection and drop registers "*, "+
|                    | 8.  | The selection and drop registers ~
| :white_check_mark: | 9.  | The black hole register "_
|                    | 10. | Last search pattern register "/

The next two commands always work on whole lines.

|                    | Command                                      | Description
| :----------------- | :------------------------------------------- | :----------
| :white_check_mark: | <code>:[range]co[py]&nbsp;\{address\}</code> | Copy the lines given by `[range]` to below the line given by `{address}`.
| :white_check_mark: | <code>:[range]m[ove]&nbsp;\{address\}</code> | Move the lines given by `[range]` to below the line given by `{address}`.

### 6. Formatting text

|                    | Command                        | Description
| :----------------- | :----------------------------- | :----------
| :white_check_mark: | `gq{motion}`                   | Format the lines that `{motion}` moves over. Formatting is done internally. The `'textwidth'` option controls the length of each formatted line (see below). If the `'textwidth'` option is 0, the formatted line length is the screen width (with a maximum width of 79). NOTE: The "Q" command formerly performed this function.  If you still want to use "Q" for formatting, use this mapping: `:nnoremap Q gq`.
| :white_check_mark: | `gqgq`<br>`gqq`                | Format the current line.  With a count format that many lines.
| :white_check_mark: | `{Visual}gq`                   | Format the highlighted text.  (for `{Visual}` see `Visual-mode`).

### 7. Sorting text

|                    | Command                                    | Description
| :----------------- | ------------------------------------------ | :----------
| :white_check_mark: | <code>:[range]sor[t]!&nbsp;[i][u]</code>   | Sort lines in `[range]`.  When no range is given all lines are sorted. <br><br>With `[!]` the order is reversed. <br><br>With `[i]` case is ignored.<br><br>With `[u]` (u stands for unique) only keep the first of a sequence of identical lines (ignoring case when `[i]` is used).  Without this flag, a sequence of identical lines will be kept in their original order. Note that leading and trailing white space may cause lines to be different.

## Undo and Redo

- Vim reference: [undo.txt](https://vimhelp.org/undo.txt.html)

|                    | Command                      | Description
| :----------------- | :--------------------------- | -----------
| :white_check_mark: | `u`                          | Undo `[count]` changes
| :white_check_mark: | `CTRL-R`                     | Redo `[count]` changes which were undone
|                    | `U`                          | Undo all latest changes on one line, the line where the latest change was made

## Repeating commands

- Vim reference: [repeat.txt](https://vimhelp.org/repeat.txt.html)

### 1. Single repeats

|                    | Command                      | Description
| :----------------- | :--------------------------- | -----------
| :white_check_mark: | `[count].`                   | Repeat last change, with count replaced with `[count]`. Does not repeat a command-line command.

Simple changes can be repeated with the "." command.  Without a count, the
count of the last change is used.  If you enter a count, it will replace the
last one.

|                    | Command                      | Description
| :----------------- | :--------------------------- | -----------
|                    | `@:`                         | Repeat last command-line `[count]` times

### 2. Multiple repeats

|                    | Command                                  | Description
| :----------------- | :--------------------------------------- | -----------
| :white_check_mark: | `:[range]g[lobal]/{pattern}/[cmd]`       | Execute the Ex command `[cmd]` (default ":p") on the lines within `[range]` where `{pattern}` matches. *Currently only works with a few commands like print.*
| :white_check_mark: | `:[range]g[lobal]!/{pattern}/[cmd]`      | Execute the Ex command `[cmd]` (default ":p") on the lines within `[range]` where `{pattern}` does NOT match. *Currently only works with a few commands like print.*
|                    | `:[range]v[global]/{pattern}/[cmd]`      | Same as :g!.

### 3. Complex repeats

|                    | Command                      | Description
| :----------------- | :--------------------------- | -----------
| :white_check_mark: | `q{0-9a-zA-Z"}`              | Record typed characters into register `{0-9a-zA-Z"}` (uppercase to append)
| :white_check_mark: | `q`                          | Stops recording
| :white_check_mark: | `@{0-9a-z"}`                 | Execute the contents of register `{0-9a-z"}` `[count]` times
|                    | `@{=*+}`                     | Execute the contents of register `{=*+}` `[count]` times
| :white_check_mark: | `@@`                         | Repeat the previous `@{0-9a-z":*}` `[count]` times

## Using the Visual mode (selecting a text area)

- Vim reference: [visual.txt](https://vimhelp.org/visual.txt.html)

### 2. Starting and stopping Visual mode

|                    | Command                       | Description
| :----------------- | :---------------------------- | -----------
| :white_check_mark: | `v`                           | Start Visual mode per character
| :white_check_mark: | `[count]V`                    | Start Visual mode linewise
| :white_check_mark: | `CTRL-V`                      | Start Visual mode blockwise
| :white_check_mark: | `gv`                          | Start visual mode with the same area as the previous area and the same mode
| :white_check_mark: | `gn`                          | Search forward for the last used search pattern, like with `n`, and start Visual mode to select the match.
| :white_check_mark: | `gN`                          | Like `gn` but searches backward, like with `N`
| :white_check_mark: | `<Esc>` or `CTRL-C`           | Stop Visual mode.

### 3. Changing the Visual area

|                    | Command                       | Description
| :----------------- | :---------------------------- | -----------
| :white_check_mark: | `o`                           | Go to Other end of highlighted text: The current cursor position becomes the start of the highlighted text and the cursor is moved to the other end of the highlighted text.  The highlighted area remains the same.
| :white_check_mark: | `O`                           | Go to Other end of highlighted text.  This is like "o", but in Visual block mode the cursor moves to the other corner in the same line.  The highlighted area remains the same.

## Various remaining commands

- Vim reference: [various.txt](https://vimhelp.org/various.txt.html)

|                    | Command                              | Description
| :----------------- | :----------------------------------- | -----------
| :white_check_mark: | `ga`                                 | Print the ascii value of the character under the cursor in dec, hex and oct.
|                    | `:as[cii]`                           | Same as `ga`.
| :white_check_mark: | `:sh[ell]`                           | This command starts a shell.
| :white_check_mark: | `:!{cmd}`                            | Execute `{cmd}` with the shell.
| :white_check_mark: | `:!!`                                | Repeat last `":!{cmd}"`.
| :white_check_mark: | `:sil[ent] {command}`                | Execute `{command}` silently.
|                    | `:norm[al][!] {commands}`            | Execute Normal mode commands `{commands}`. [#128](https://github.com/NeoVintageous/NeoVintageous/issues/128)
|                    | `:{range}norm[al][!] {commands}`     | Execute Normal mode commands `{commands}` for each line in the `{range}`. [#128](https://github.com/NeoVintageous/NeoVintageous/issues/128)

## Command-line editing

- Vim reference: [cmdline.txt](https://vimhelp.org/cmdline.txt.html)

### 1. Command-line editing

|                    | Command                          | Description
| :----------------- | :------------------------------- | -----------
| :white_check_mark: | `<Left>`                         | Cursor left.
| :white_check_mark: | `<Right>`                        | Cursor right.
| :white_check_mark: | `<S-Left>`<br>`<C-Left>`         | Cursor one WORD left.
| :white_check_mark: | `<S-Right>`<br>`<C-Right>`       | Cursor one WORD right.
| :white_check_mark: | `CTRL-B`<br>`<Home>`             | Cursor to beginning of command-line.
| :white_check_mark: | `CTRL-E`<br>`<End>`              | Cursor to end of command-line.
| :white_check_mark: | `CTRL-H`<br>`<BS>`               | Delete the character in front of the cursor.
| :white_check_mark: | `<Del>`                          | Delete the character under the cursor (at end of line: character before the cursor).
| :white_check_mark: | `CTRL-W`                         | Delete the `word` before the cursor.
| :white_check_mark: | `CTRL-U`                         | Remove all characters between the cursor position and the beginning of the line.
| :white_check_mark: | `CTRL-[`<br>`<Esc>`              | Quit Command-line mode without executing.
| :white_check_mark: | `CTRL-C`                         | Quit Command-line mode without executing.
| :white_check_mark: | `<Tab>`                          | Go to next matched completion.
| :white_check_mark: | `<Up>`                           | Recall older command-line from history, whose beginning matches the current command-line.
| :white_check_mark: | `<Down>`                         | Recall more recent command-line from history, whose beginning matches the current command-line.
| :white_check_mark: | :his[tory]                       | Print the history of last entered commands.
| :white_check_mark: | :his[tory]&nbsp;[\{name\}]       | List the contents of history `{name}` which can be: <br>`c[md]` or : command-line history <br>`s[earch]` or / or ? search string history <br>`e[xpr]` or = expression register history <br>`i[nput]` or @ input line history <br>`d[ebug]` or > debug command history <br>`a[ll]` all of the above

### 2. Command-line completion

|                    | Command                          | Description
| :----------------- | :------------------------------- | -----------
| :white_check_mark: | `<S-Tab>`                        | Like `<Tab>`, but begin with the last match and then go to the previous match.
| :white_check_mark: | `CTRL-N`                         | Go to next match.  Otherwise recall more recent command-line from history.
| :white_check_mark: | `CTRL-P`                         | Go to previous match.  Otherwise recall older command-line from history.

### 4. Ex command-line ranges

Some Ex commands accept a line range in front of them.  This is noted as `[range].`  It consists of one or more line specifiers, separated with ',' or ';'.

Line numbers may be specified with:

|                    | Command                          | Description
| :----------------- | :------------------------------- | -----------
| :white_check_mark: | `{number}`                       | An absolute line number.
| :white_check_mark: | `.`                              | The current line.
| :white_check_mark: | `$`                              | The last line in the file.
| :white_check_mark: | `%`                              | Equal to 1,$ (the entire file).
| :white_check_mark: | `'t`                             | Position of mark t (lowercase).
| :white_check_mark: | `'T`                             | Position of mark T (uppercase); when the mark is in another file it cannot be used in a range.
| :white_check_mark: | `/{pattern}[/]`                  | The next line where `{pattern}` matches (also see `:range-pattern`).
| :white_check_mark: | `?{pattern}[?]`                  | The previous line where `{pattern}` matches (also see `:range-pattern`).
|                    | `\/`                             | The next line where the previously used search pattern matches. [#126](https://github.com/NeoVintageous/NeoVintageous/issues/126)
|                    | `\?`                             | The previous line where the previously used search pattern matches. [#126](https://github.com/NeoVintageous/NeoVintageous/issues/126)
|                    | `\&`                             | The next line where the previously used substitute pattern matches. [#126](https://github.com/NeoVintageous/NeoVintageous/issues/126)

## Description of all options

- Vim reference: [options.txt](https://vimhelp.org/options.txt.html)

### 1. Setting options

|                    | Command                                      | Description
| :----------------- | :------------------------------------------- | -----------
| :white_check_mark: | `:se[t] {option}?`                           | Show value of `{option}`.
| :white_check_mark: | `:se[t] {option}`                            | Toggle option: set, switch it on. Number or String option: show value..
| :white_check_mark: | `:se[t] no{option}`                          | Toggle option: Reset, switch it off.
| :white_check_mark: | `:se[t] {option}!`, `:se[t] inv{option}`     | Toggle option: Invert value.
| :white_check_mark: | `:se[t] {option}={value}`                    | Set string or number option to `{value}`.

### 3. Options summary

In the list below all the options are mentioned with their full name and with an abbreviation if there is one.  Both forms may be used.

Some options "proxy" to Sublime Text settings. This means that the option uses the underlying Sublime Text setting . Changing the option, changes the underlying Sublime Text setting. See this [blog post](https://blog.gerardroche.com/2023/06/05/neovintageous-options/) about options.

|                                 | Option                          | Type    | Default                                         | Description |
| :------------------------------ | :------------------------------ | :------ | :-----------------------------------------------| :---------- |
| :white_check_mark:              | `'autoindent'`<br>`'ai'`        | String  | `auto_indent` <br>sublime setting               | :star: |
| :white_check_mark:              | `'belloff'`<br>`'bo'`           | String  | `''`; accepts 'all'                             |             |
| :white_check_mark:              | `'equalalways'`                 | Boolean | On                                              |             |
| :white_check_mark:              | `'expandtab'`<br>`'et'`         | Boolean | `translate_tabs_to_spaces` <br>sublime setting  | :star: |
| :white_check_mark:              | `'hlsearch'`<br>`'hls'`         | Boolean | On                                              | When there is a previous search pattern, highlight all its matches. See also: `'incsearch'`. When you get bored looking at the highlighted matches, you can turn it off with `:nohlsearch`.  This does not change the option value, as soon as you use a search command, the highlighting comes back. |
| :white_check_mark:              | `'ignorecase'`<br>`'ic'`        | Boolean | Off                                             |             |
| :white_check_mark:              | `'incsearch'`<br>`'is'`         | Boolean | On                                              | While typing a search command, show where the pattern, as it was typed so far, matches.  The matched string is highlighted.  If the pattern is invalid or not found, nothing is shown.  The screen will be updated often.<br> Note that the match will be shown, but the cursor will return to its original position when no match is found and when pressing `<Esc>.`  You still need to finish the search command with `<Enter>` to move the cursor to the match.<br> When `'hlsearch'` is on, all matched strings are highlighted too while typing a search command. See also: `'hlsearch'.` |
| :white_check_mark:              | `'list'`                        | Boolean | `draw_white_space` <br>sublime setting          | Useful to see the difference between tabs and spaces and for trailing blanks. :star: |
| :white_check_mark:              | `'magic'`                       | Boolean | On                                              |             |
| :white_check_mark:              | `'menu'`                        | Boolean | On                                              |             |
| :white_check_mark:              | `'minimap'`                     | Boolean | On                                              |             |
| :white_check_mark:              | `'modeline'`<br>`'ml'`          | Boolean | On                                              |             |
| :white_check_mark:              | `'modelines'`<br>`'mls'`        | Number  | 5                                               |             |
| :white_check_mark:              | `'number'`<br>`'nu'`            | Boolean | `line_numbers` <br>sublime setting              | Print the line number in front of each line. :star: |
| :white_check_mark:              | `'relativenumber'`<br>`'rnu'`   | Boolean | `relative_line_numbers` <br>sublime setting     | Show the line number relative to the line with the cursor in front of each line. Relative line numbers help you use the `count` you can precede some vertical motion commands (e.g., `j` `k` `+` `-`) with, without having to calculate it yourself. Especially useful in combination with other commands (e.g., `y` `d` `c` `<` `>` `gq` `gw` `=`). :star: |
| :white_check_mark:              | `'scrolloff'`<br>`'so'`         | Number  | `scroll_context_lines` <br>sublime setting      | :star: |
| :white_check_mark:              | `'shell'`                       | String  | `$SHELL` or `"sh"`, Win32: `"cmd.exe"`          |             |
| :white_check_mark:              | `'sidebar'`                     | Boolean | On                                              |             |
| :white_check_mark:              | `'smartcase'`<br>`'scs'`        | Boolean | Off                                             |             |
| :white_check_mark:              | `'spell'`                       | Boolean | `spell_check` <br>sublime setting               | :star: |
| :white_check_mark:              | `'statusbar'`                   | Boolean | On                                              |             |
| :white_check_mark:              | `'tabstop'`<br>`'ts'`           | Number  | `tab_size` <br>sublime setting                  | :star: |
| :white_check_mark:              | `'textwidth'`<br>`'tw'`         | Number  | `wrap_width` <br>sublime setting                | :star: |
| :white_check_mark:              | `'winaltkeys'`<br>`'wak'`       | String  | `menu`                                          |             |
| :white_check_mark:              | `'wrap'`                        | Boolean | `word_wrap` <br>sublime setting                 | This option changes how text is displayed.  It doesn't change the text in the buffer, see `'textwidth'` for that.<br> When on, lines longer than the width of the window will wrap and displaying continues on the next line.  When off lines will not wrap and only part of long lines will be displayed.  When the cursor is moved to a part that is not shown, the screen will scroll horizontally.| :white_check_mark:              | `'wrapscan'`<br>`'ws'`          | Boolean | On | :star: |
|                                 | `'clipboard'`                   | String  |                                                 | [#829](https://github.com/NeoVintageous/NeoVintageous/issues/829)  |
|                                 | `'iskeyword'`<br>`'isk'`        | String  |                                                 | Keywords are used in searching and recognizing with many commands: "w", "*", "[i", etc. [#622](https://github.com/NeoVintageous/NeoVintageous/issues/622) |
|                                 | `'sidescrolloff'`<br>`'siso'`   | Number  | 5                                               | The minimal number of screen columns to keep to the left and to the right of the cursor if `'nowrap'` is set. |
|                                 | `'splitbelow'`<br>`'sb'`        | Boolean | Off                                             | When on, splitting a window will put the new window below the current one. `:split` |
|                                 | `'splitright'`<br>`'spr'`       | Boolean | Off                                             | When on, splitting a window will put the new window right of the current one. `:vsplit` |

## Regexp patterns and search commands

- Vim reference: [pattern.txt](https://vimhelp.org/pattern.txt.html)

### 1. Search commands

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `/{pattern}<CR>`                 | Search forward for the `[count]`'th occurrence of `{pattern}` `exclusive`.
| :white_check_mark: | `/<CR>`                          | Search forward for the `[count]`'th occurrence of the latest used pattern.
| :white_check_mark: | `?{pattern}<CR>`                 | Search backward for the `[count]`'th previous occurrence of `{pattern}` `exclusive`.
| :white_check_mark: | `?<CR>`                          | Search backward for the `[count]`'th occurrence of the latest used pattern.
| :white_check_mark: | `n`                              | Repeat the latest "/" or "?" `[count]` times. If the cursor doesn't move the search is repeated with count + 1.
| :white_check_mark: | `N`                              | Repeat the latest "/" or "?" `[count]` times in opposite direction.
| :white_check_mark: | `*`                              | Search forward for the `[count]`'th occurrence of the word nearest to the cursor. Only whole keywords are searched for, like with the command "/\\&lt;keyword\\&gt;".  `'ignorecase'` is used, `'smartcase'` is not.
| :white_check_mark: | `#`                              | Same as "\*", but search backward.  The pound sign (character 163) also works.
| :white_check_mark: | `gd`                             | Go to local Declaration.
| :white_check_mark: | `gD`                             | Go to global Declaration.
| :white_check_mark: | `:noh[lsearch]`                  | Stop the highlighting for the `'hlsearch'` option.  It is automatically turned back on when using a search command, or setting the `'hlsearch'` option.

While typing the search pattern the current match will be shown if the `'incsearch'` option is on.  Remember that you still have to finish the search command with `<CR>` to actually position the cursor at the displayed match.  Or use `<Esc>` to abandon the search.

All matches for the last used search pattern will be highlighted if you set the `'hlsearch'` option.  This can be suspended with the `:nohlsearch` command.

### 3. Magic

Some characters in the pattern, such as letters, are taken literally.  They match exactly the same character in the text.  When preceded with a backslash however, these characters may get a special meaning.  For example, "a" matches the letter "a", while "\a" matches any alphabetic character.

Other characters have a special meaning without a backslash.  They need to be preceded with a backslash to match literally.  For example "." matches any character while "\." matches a dot.

If a character is taken literally or not depends on the `'magic'` option and the items in the pattern mentioned next.  The `'magic'` option should always be set, but it can be switched off for Vi compatibility.  We mention the effect of `'nomagic'` here for completeness, but we recommend against using that.

Use of "\m" makes the pattern after it be interpreted as if `'magic'` is set, ignoring the actual value of the `'magic'` option.

Use of "\M" makes the pattern after it be interpreted as if `'nomagic'` is used.

Use of "\v" means that after it, all ASCII characters except '0'-'9', 'a'-'z', 'A'-'Z' and '\_' have special meaning: "very magic".

Use of "\V" means that after it, only a backslash and the terminating character (usually / or ?) have special meaning: "very nomagic".

Examples:

| after:  | `\v` | `\m`      | `\M`        | `\V`   | matches
| :------ | :--- | :-------- | :---------- | :----- | :------
|         |      | `'magic'` | `'nomagic'` |        |
|         | `a`  | `a`       | `a`         | `a`    | literal `'a'`
|         | `\a` | `\a`      | `\a`        | `\a`   | any alphabetic character
|         | `.`  | `.`       | `\.`        | `\.`   | any character
|         | `\.` | `\.`      | `.`         | `.`    | literal dot
|         | `$`  | `$`       | `$`         | `\$`   | end-of-line
|         | `*`  | `*`       | `\*`        | `\*`   | any number of the previous atom
|         | `~`  | `~`       | `\~`        | `\~`   | latest substitute string
|         | `()` | `\(\)`    |   `\(\)`    | `\(\)` | group as an atom
|         | `\|` | `\\|`     | `\\|`       | `\\|`   | nothing: separates alternatives
|         | `\\` | `\\`      | `\\`        | `\\`   | literal backslash
|         | `\{` | `{`       | `{`         | `{`    | literal curly brace

If you want to you can make a pattern immune to the `'magic'` option being set or not by putting "\m" or "\M" at the start of the pattern.

## Key mapping and abbreviations

- Vim reference: [map.txt](https://vimhelp.org/map.txt.html)

::: info NOTE
At present, the "Select" mode corresponds to the Multiple Cursor mode. In a forthcoming update, Multiple Cursor mode will be distinguished with its dedicated designation.
:::

Map the key sequence `{lhs}` to `{rhs}` for the modes where the map command applies.  Disallow mapping of `{rhs}`, to avoid nested and recursive mappings.  Often used to redefine a command.

|                    | Command                                              | Modes
| :----------------- | ---------------------------------------------------: | :----
| :white_check_mark: | <code>:no[remap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code>    | Normal, Visual, and Operator-pending modes.
| :white_check_mark: | <code>:nn[oremap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code>   | Normal mode.
| :white_check_mark: | <code>:vn[oremap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code>   | Visual and Select mode.
| :white_check_mark: | <code>:xn[oremap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code>   | Visual mode.
| :white_check_mark: | <code>:snor[emap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code>   | Select mode.
| :white_check_mark: | <code>:ono[remap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code>   | Operator-pending mode.
| :white_check_mark: | <code>:ino[remap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code>   | Insert mode.

Remove the mapping of `{lhs}` for the modes where the map command applies.  The mapping may remain defined for other modes where it applies. It also works when `{lhs}` matches the `{rhs}` of a mapping. This is for when an abbreviation applied.

::: info NOTE
Trailing spaces are included in the `{lhs}`.
:::

|                    | Command                                | Modes
| :----------------- | -------------------------------------: | :----
| :white_check_mark: | <code>:unm[ap]&nbsp;\{lhs\}</code>     | All modes.
| :white_check_mark: | <code>:nun[map]&nbsp;\{lhs\}</code>    | Normal mode.
| :white_check_mark: | <code>:vu[nmap]&nbsp;\{lhs\}</code>    | Visual and Select mode.
| :white_check_mark: | <code>:xu[nmap]&nbsp;\{lhs\}</code>    | Visual mode.
| :white_check_mark: | <code>:sunm[ap]&nbsp;\{lhs\}</code>    | Select mode.
| :white_check_mark: | <code>:ou[nmap]&nbsp;\{lhs\}</code>    | Operator-pending mode.
| :white_check_mark: | <code>:iu[nmap]&nbsp;\{lhs\}</code>    | Insert mode.

Map the key sequence `{lhs}` to `{rhs}` for the modes where the map command applies.  The result, including `{rhs}`, is then further scanned for mappings.  This allows for nested and recursive use of mappings. Note: Trailing spaces are included in the `{rhs}`, because space is a valid Normal mode command.

|                    | Command                                        | Modes
| :----------------- | ---------------------------------------------: | :----
|                    | <code>:map&nbsp;\{lhs\}&nbsp;\{rhs\}</code>    | Normal, Visual, and Operator-pending mode.
|                    | <code>:nm[ap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code> | Normal mode.
|                    | <code>:vm[ap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code> | Visual and Select mode.
|                    | <code>:xm[ap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code> | Visual mode.
|                    | <code>:smap&nbsp;\{lhs\}&nbsp;\{rhs\}</code>   | Select mode.
|                    | <code>:om[ap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code> | Operator-pending mode.
|                    | <code>:im[ap]&nbsp;\{lhs\}&nbsp;\{rhs\}</code> | Insert mode.

## Tags and special searches

- Vim reference: [tagsrch.txt](https://vimhelp.org/tagsrch.txt.html)

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | CTRL-]                           | Jump to the definition of the keyword under the cursor.

## Commands for using multiple windows

- Vim reference: [windows.txt](https://vimhelp.org/windows.txt.html)

::: info NOTE
Some window commands, such as `CTRL-w s`, `CTRL-w v`, `CTRL-w ]`, require [Origami](https://github.com/SublimeText/Origami).
:::

### 3. Opening and closing a window

|                    | Command                                                                    | Description
| :----------------- | :------------------------------------------------------------------------- | :----------
| :white_check_mark: | CTRL-W&nbsp;s<br>CTRL-W&nbsp;S<br>CTRL-W&nbsp;CTRL-S<br>:sp[lit] [file]    | Split current window in two.  The result is two viewports on the same file. The windows will be spread out if `'equalalways'` is set. If `[file]` is given it will be edited in the new window.
| :white_check_mark: | CTRL-W&nbsp;CTRL-V<br>CTRL-W&nbsp;v<br>:vs[plit] [file]                    | Like :split, but split vertically. The windows will be spread out if `'equalalways'` is set.
| :white_check_mark: | CTRL-W&nbsp;n<br>CTRL-W&nbsp;CTRL-N<br>:new                                | Create a new window and start editing an empty file in it. The windows will be spread out if `'equalalways'` is set. This behaves like a ":split" first, and then an ":enew" command.
| :white_check_mark: | :vne[w] [file]                                                             | Like `:new`, but split vertically.  If `'equalalways'` is set the windows will be spread out horizontally, unless a width was specified.
| :white_check_mark: | :new `{file}` <br>:sp[lit] `{file}`                                        | Create a new window and start editing file `{file}` in it.  This behaves almost like a ":split" first, and then an ":edit" command, but the alternate file name in the original window is set to `{file}`. The windows will be spread out if `'equalalways'` is set.
|                    | :sv[iew] [file]                                                            | Same as `":split"`, but set `'readonly'` option for this buffer.
|                    | :sf[ind] `{file}`                                                          | Same as ":split", but search for `{file}` in `'path'` like in `:find`.  Doesn't split if `{file}` is not found.
| :white_check_mark: | CTRL-W CTRL-^<br>CTRL-W ^                                                  | Split the current window in two and edit the alternate file.
| :white_check_mark: | CTRL-W :                                                                   | Does the same as typing `:` - enter a command line

#### Closing a window

|                    | Command                                                                    | Description
| :----------------- | :------------------------------------------------------------------------- | :----------
| :white_check_mark: | :q[uit]<br>CTRL-W&nbsp;q<br>CTRL-W&nbsp;CTRL-Q                             | Quit the current window.
| :white_check_mark: | :q[uit]!                                                                   | If this was the last window for a buffer, any changes to that buffer are lost.  When quitting the last window (not counting help windows), exit Vim,
| :white_check_mark: | :clo[se][!]<br>CTRL-W&nbsp;c                                               | Close the current window.
| :white_check_mark: | CTRL-W&nbsp;CTRL-C                                                         | You might have expected that CTRL-W CTRL-C closes the current window, but that does not work, because the CTRL-C cancels the command.
|                    | :hid[e]                                                                    | Quit the current window, unless it is the last window on the screen.
|                    | :hid[e] \{cmd\}                                                            | Execute `{cmd}` with 'hidden' is set.
| :white_check_mark: | :on[ly][!]<br>CTRL-W&nbsp;o<br>CTRL-W&nbsp;CTRL-O                          | Make the current window the only one on the screen.

### 4. Moving cursor to other windows

|                    | Command                                                                    | Description
| :----------------- | :------------------------------------------------------------------------- | :----------
| :white_check_mark: | CTRL-W &lt;Down&gt;<br>CTRL-W CTRL-J<br>CTRL-W j                           | Move cursor to Nth window below current one.
| :white_check_mark: | CTRL-W &lt;Up&gt;<br>CTRL-W CTRL-K<br>CTRL-W k                             | Move cursor to Nth window above current one.
| :white_check_mark: | CTRL-W &lt;Left&gt;<br>CTRL-W CTRL-H<br>CTRL-W &lt;BS&gt;<br>CTRL-W h      | Move cursor to Nth window left of current one.
| :white_check_mark: | CTRL-W &lt;Right&gt;<br>CTRL-W CTRL-L<br>CTRL-W l                          | Move cursor to Nth window right of current one.
| :white_check_mark: | CTRL-W w<br>CTRL-W CTRL-W                                                  | Move cursor to window below/right of the current one.
| :white_check_mark: | CTRL-W W                                                                   | Move cursor to window above/left of current one.
| :white_check_mark: | CTRL-W t<br>CTRL-W CTRL-T                                                  | Move cursor to top-left window.
| :white_check_mark: | CTRL-W b<br>CTRL-W CTRL-B                                                  | Move cursor to bottom-right window.
| :white_check_mark: | CTRL-W p<br>CTRL-W CTRL-P                                                  | Go to previous (last accessed) window.
| :white_check_mark: | CTRL-W P                                                                   | Go to preview window.

### 5. Moving windows around

|                    | Command                                                      | Description
| :----------------- | :----------------------------------------------------------- | :----------
|                    | CTRL-W r<br>CTRL-W&nbsp;CTRL-R                               | Rotate windows downwards/rightwards.  The first window becomes the second one, the second one becomes the third one, etc. The last window becomes the first window.  The cursor remains in the same window. This only works within the row or column of windows that the current window is in.
|                    | CTRL-W R                                                     | Rotate windows upwards/leftwards.  The second window becomes the first one, the third one becomes the second one, etc.  The first window becomes the last window.  The cursor remains in the same window. This only works within the row or column of windows that the current window is in.
| :white_check_mark: | CTRL-W x<br>CTRL-W&nbsp;CTRL-X                               | Exchange current window with next one.  If there is no next window, exchange with previous window.

The following commands can be used to change the window layout.  For example,
when there are two vertically split windows, CTRL-W K will change that in
horizontally split windows.  CTRL-W H does it the other way around.

|                    | Command                                                      | Description
| :----------------- | :----------------------------------------------------------- | :----------
| :white_check_mark: | CTRL-W K                                                     |  Move the current window to be at the very top, using the full width of the screen.  This works like closing the current window and then creating another one with `:topleft split`, except that the current window contents is used for the new window.
| :white_check_mark: | CTRL-W J                                                     |  Move the current window to be at the very bottom, using the full width of the screen.  This works like closing the current window and then creating another one with `:botright split`, except that the current window contents is used for the new window.
| :white_check_mark: | CTRL-W H                                                     |  Move the current window to be at the far left, using the full height of the screen.  This works like closing the current window and then creating another one with `:vert topleft split`, except that the current window contents is used for the new window.
| :white_check_mark: | CTRL-W L                                                     |  Move the current window to be at the far right, using the full height of the screen.  This works like closing the current window and then creating another one with `:vert botright split`, except that the current window contents is used for the new window.
| :white_check_mark: | CTRL-W T                                                     |  Move the current window to a new tab page.  This fails if there is only one window in the current tab page. When a count is specified the new tab page will be opened before the tab page with this index.  Otherwise it comes after the current tab page.

### 6. Window resizing

|                    | Command                                                      | Description
| :----------------- | :----------------------------------------------------------- | :----------
| :white_check_mark: | CTRL-W =                                                     | Make all windows (almost) equally high and wide.
| :white_check_mark: | CTRL-W CTRL-_<br>CTRL-W \_                                   | Set current window height to N (default: highest possible).
| :white_check_mark: | CTRL-W \|                                                    | Set current window width to N (default: widest possible).

When the option `'equalalways'` (`'ea'`) is set, all the windows are automatically made the same size after splitting or closing a window.

### 9. Tag or file name under the cursor

|                    | Command                                                      | Description
| :----------------- | :----------------------------------------------------------- | :----------
| :white_check_mark: | CTRL-W ]<br>CTRL-W&nbsp;CTRL-]                               | Split current window in two.  Use identifier under cursor as a tag and jump to it in the new upper window. In Visual mode uses the Visually selected text as a tag. Same as CTRL-], except in a split window.
| :white_check_mark: | CTRL-W gt                                                    | Go to next tab page, same as `gt`.
| :white_check_mark: | CTRL-W gT                                                    | Go to previous tab page, same as `gT`.

### 11. Using hidden buffers

|                    | Command                                                      | Description
| :----------------- | :----------------------------------------------------------- | :----------
| :white_check_mark: | :files<br>:buffers<br>:ls                                    | Show all buffers.
| :white_check_mark: | `:b[uffer] [N]`                                              | Edit buffer `[N]` from the buffer list.  If `[N]` is not given, the current buffer remains being edited.
| :white_check_mark: | `:b[uffer] #`                                                | Edit alternate file buffer `#` from the buffer list.  If `#` is not given, the current buffer remains being edited.
|                    | <code>b[uffer]&nbsp;\{bufname\}</code>                       | Edit buffer for `{bufname}` from the buffer list.  A partial name also works, so long as it is unique in the list of buffers.
| :white_check_mark: | `:bn[ext] [N]`                                               | Go to `[N]`th next buffer in buffer list.  `[N]` defaults to one.  Wraps around the end of the buffer list.
| :white_check_mark: | `:bN[ext] [N]`<br><code>:bp[revious]&nbsp;[N]</code>         | Go to `[N]`th previous buffer in buffer list.  `[N]` defaults to one.  Wraps around the start of the buffer list.
| :white_check_mark: | :br[ewind]                                                   | Go to first buffer in buffer list.  If the buffer list is empty, go to the first unlisted buffer.
| :white_check_mark: | :bf[irst]                                                    | Same :brewind
| :white_check_mark: | :bl[ast]                                                     | Go to last buffer in buffer list.  If the buffer list is empty, go to the last unlisted buffer.

## Commands for using multiple tab pages

- Vim reference: [tabpage.txt](https://vimhelp.org/tabpage.txt.html)

### 2. Commands

OPENING A NEW TAB PAGE:

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | :tabe[dit]<br>:tabnew            | Open a new tab page with an empty window, after the current tab page.
| :white_check_mark: | CTRL-W&nbsp;gf                   | Open a new tab page and edit the file name under the cursor. See CTRL-W_gf.
| :white_check_mark: | CTRL-W&nbsp;gF                   | Open a new tab page and edit the file name under the cursor and jump to the line number following the file name. See CTRL-W_gF.

CLOSING A TAB PAGE:

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | :tabc[lose]                      | Close current tab page.
| :white_check_mark: | :tabo[nly]                       | Close all other tab pages.

SWITCHING TO ANOTHER TAB PAGE:

|                    | Command                                                  | Description
| :----------------- | :------------------------------------------------------- | :----------
| :white_check_mark: | `:tabn[ext]`<br>`<C-PageDown>`<br>`gt`                   | Go to the next tab page.  Wraps around from the last to the first one.
| :white_check_mark: | `:tabp[revious]`<br>`:tabN[ext]`<br>`<C-PageUp>`<br>`gT` | Go to the previous tab page.  Wraps around from the first one to the last one.
| :white_check_mark: | <code>:tabn[ext]&nbsp;\{count\}</code>                   | Go to tab page `{count}`.  The first tab page has number one.  Wraps around from the first one to the last one.
| :white_check_mark: | <code>:tabp[revious]&nbsp;\{count\}</code>               | Go `{count}` tab pages back.  Wraps around from the first one to the last one.
| :white_check_mark: | `:tabr[ewind]`<br>`:tabfir[st]`                          | Go to the first tab page.
| :white_check_mark: | `:tabl[ast]`                                             | Go to the last tab page.

## Spell checking

- Vim reference: [spell.txt](https://vimhelp.org/spell.txt.html)

To search for the next misspelled word:

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | \]s                              | Move to next misspelled word after the cursor. A count before the command can be used to repeat. `'wrapscan'` applies.
| :white_check_mark: | \[s                              | Like "]s" but search backwards, find the misspelled word before the cursor.  Doesn't recognize words split over two lines, thus may stop at words that are not highlighted as bad.  Does not stop at word with missing capital at the start of a line.

To add words to your own word list:

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | zg                               | Add word under the cursor as a good word to the first.  In Visual mode the selected characters are added as a word (including white space!).
| :white_check_mark: | zuw<br>zug                       | Undo zg.
| :white_check_mark: | :spe[llgood]&nbsp;\{word\}       | Add `{word}` as a good word, like with zg.
| :white_check_mark: | :spellu[ndo]&nbsp;\{word\}       | Like zuw.

Finding suggestions for bad words:

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | z=                               | For the word under/after the cursor suggest correctly spelled words.

## Working with versions of the same file

- Vim reference: [diff.txt](https://vimhelp.org/diff.txt.html)

### 3. Jumping to diffs

Two commands can be used to jump to diffs:

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | [c                               | Jump backwards to the previous start of a change. When a count is used, do it that many times.
| :white_check_mark: | ]c                               | Jump forwards to the next start of a change. When a count is used, do it that many times.

It is an error if there is no change for the cursor to move to.

## Expression evaluation, conditional commands

- Vim reference: [eval.txt](https://vimhelp.org/eval.txt.html)

### 7. Commands

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | `:let {var-name}={expr1}`        | Set internal variable `{var-name}` to the result of the expression `{expr1}.`  The variable will get the type from the `{expr}.`  If `{var-name}` didn't exist yet, it is created. <br>*Only "mapleader" and "maplocalleader" are currently supported.*<br>Example: `let mapleader=,`<br>Example: `let maplocalleader=,`

## Hide (fold) ranges of lines

- Vim reference: [fold.txt](https://vimhelp.org/fold.txt.html)

### 2. Fold commands

All folding commands start with "z".  Hint: the "z" looks like a folded piece of paper, if you look at it from the side.

OPENING AND CLOSING FOLDS

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
| :white_check_mark: | zo                               | Open one fold under the cursor.
| :white_check_mark: | zO                               | Same as zo.
| :white_check_mark: | zc                               | Close one fold under the cursor.
| :white_check_mark: | zC                               | Same as zc.
| :white_check_mark: | zM                               | Close all folds.
| :white_check_mark: | zR                               | Open all folds.

## Commands for a quick edit-compile-fix cycle

- Vim reference: [quickfix.txt](https://vimhelp.org/quickfix.txt.html)

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
|                    | `:lne[xt]`                       |
|                    | `:lN[ext]`<br>`:lp[revious]`     |
|                    | `:lfir[st]`                      | Same as ":lrewind".
|                    | `:lla[st]`                       |
| :white_check_mark: | `:cq[uit]`                       | Quit Sublime.

## Win32 GUI

- Vim reference: [gui_w32.txt](https://vimhelp.org/gui_w32.txt.html)

|                    | Command                          | Description
| :----------------- | :------------------------------- | :----------
|                    | `:simalt`                        | Simulate pressing `{key}` while holding Alt pressed. [#1004](https://github.com/NeoVintageous/NeoVintageous/issues/1004)

## Plugins

The following Vim plugins have been ported or have inspired implementations.

|                    | Plugin              | Reference
| :----------------- | :------------------ | :--------
| :white_check_mark: | [Abolish](/plugins/abolish)                      | [vim-abolish](https://github.com/tpope/vim-abolish)
| :white_check_mark: | [Commentary](/plugins/commentary)                | [vim-commentary](https://github.com/tpope/vim-commentary)
| :white_check_mark: | [Highlighted Yank](/plugins/highlighted-yank)    | [vim-highlightedyank](https://github.com/machakann/vim-highlightedyank)
| :white_check_mark: | [Input Method](/plugins/input-method)            <Badge type="info">Since 1.32</Badge>        | [vim-xkbswitch](https://github.com/lyokha/vim-xkbswitch), [VSCodeVim](https://github.com/VSCodeVim/Vim#input-method)
| :white_check_mark: | [Indent Object](/plugins/indent-object)          | [vim-indent-object](https://github.com/michaeljsmith/vim-indent-object)
| :white_check_mark: | [Markology](/plugins/markology)                  <Badge type="info">Since 1.32</Badge>           | [vim-markology](https://github.com/jeetsukumaran/vim-markology)
| :white_check_mark: | [Multiple Cursors](/plugins/multiple-cursors)    | [vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors), [vim-visual-multi](https://github.com/mg979/vim-visual-multi)
| :white_check_mark: | [Sneak](/plugins/sneak)                          <Badge type="warning">Disabled by Default</Badge> [#731](https://github.com/NeoVintageous/NeoVintageous/issues/731) | [vim-sneak](https://github.com/justinmk/vim-sneak)
| :white_check_mark: | [Surround](/plugins/surround)                    | [vim-surround](https://github.com/tpope/vim-surround)
| :white_check_mark: | [Targets](/plugins/targets)                      | [vim-targets](https://github.com/wellle/targets.vim)
| :white_check_mark: | [Unimpaired](/plugins/unimpaired)                | [vim-unimpaired](https://github.com/tpope/vim-unimpaired)

### Suggested future ports

The following Vim plugins have been suggested for future implementations.

| Plugin | Reference | Issue
| :----- | :-------- | :----
| EasyMotion | [vim-easymotion](https://github.com/easymotion/vim-easymotion) | [#276](https://github.com/NeoVintageous/NeoVintageous/issues/276)
| Hop | [hop.nvim](https://github.com/phaazon/hop.nvim) | [#808](https://github.com/NeoVintageous/NeoVintageous/issues/808)
| SurroundAny | | [#743](https://github.com/NeoVintageous/NeoVintageous/issues/743)
| WhichKey | [vim-which-key](https://github.com/liuchengxu/vim-which-key) | [#758](https://github.com/NeoVintageous/NeoVintageous/issues/758)
| YankStackAndRing | | [#337](https://github.com/NeoVintageous/NeoVintageous/issues/337)

### Abolish

A port of the awesome [vim-abolish](https://github.com/tpope/vim-abolish).

- See [plugin documentation](/plugins/abolish)
- Reference: [abolish.txt](https://github.com/tpope/vim-abolish/blob/master/doc/abolish.txt)

<!--@include:@/reusables/status/abolish.md-->

### Commentary

A port of the awesome [vim-commentary](https://github.com/tpope/vim-commentary).

- See [plugin documentation](/plugins/commentary)
- Reference: [commentary.txt](https://github.com/tpope/vim-commentary/blob/master/doc/commentary.txt)

<!--@include:@/reusables/status/commentary.md-->

### Highlighted Yank

Inspired by [vim-highlightedyank](https://github.com/machakann/vim-highlightedyank).

- See [plugin documentation](/plugins/highlighted-yank)
- Reference: [highlightedyank.txt](https://github.com/machakann/vim-highlightedyank/blob/master/doc/highlightedyank.txt)

### Indent Object

A port of the awesome [vim-indent-object](https://github.com/michaeljsmith/vim-indent-object).

- See [plugin documentation](/plugins/indent-object)
- Reference: [indent-object.txt](https://github.com/michaeljsmith/vim-indent-object/blob/master/doc/indent-object.txt)

<!--@include:@/reusables/status/indent-object.md-->

### Input Method

Inspired by [vim-xkbswitch](https://github.com/lyokha/vim-xkbswitch), [VSCodeVim](https://github.com/VSCodeVim/Vim#input-method), and others.

- See [plugin documentation](/plugins/input-method)

### Markology

Inspired by [vim-markology](https://github.com/jeetsukumaran/vim-markology).

- See [plugin documentation](/plugins/markology)

### Multiple Cursors

Inspired by [vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors).

- See [plugin documentation](/plugins/multiple-cursors)

<!--@include:@/reusables/status/multiple-cursors.md-->

### Sneak

A port of the awesome [vim-sneak](https://github.com/justinmk/vim-sneak).

- See [plugin documentation](/plugins/sneak)
- Reference: [sneak.txt](https://github.com/justinmk/vim-sneak/blob/master/doc/sneak.txt)

<!--@include:@/reusables/status/sneak.md-->

### Surround

A port of the awesome [vim-surround](https://github.com/tpope/vim-surround).

- See [plugin documentation](/plugins/surround)
- Reference: [surround.txt](https://github.com/tpope/vim-surround/blob/master/doc/surround.txt)

<!--@include:@/reusables/status/surround.md-->

### Targets

Inspired by [targets.vim](https://github.com/wellle/targets.vim).

- See [plugin documentation](/plugins/targets)

<!--@include:@/reusables/status/targets.md-->

### Unimpaired

A port of the awesome [vim-unimpaired](https://github.com/tpope/vim-unimpaired).

- See [plugin documentation](/plugins/unimpaired)
- Reference: [unimpaired.txt](https://github.com/tpope/vim-unimpaired/blob/master/doc/unimpaired.txt)

<!--@include:@/reusables/status/unimpaired.md-->
