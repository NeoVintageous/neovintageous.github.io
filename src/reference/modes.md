# Modes

`[count]` - An optional number that may precede the command to multiply or iterate the command.

| Mode                               | Description
| :----------------------------------| :----------
| Insert mode                        | `[count]i`
| Normal mode                        | `<Esc>` or `CTRL-[` or `CTRL-c`
| Visual mode                        | `v`
| Visual line mode                   | `[count]V`
| Visual block mode                  | `CTRL-v`
| Replace mode                       | `R`
| Operator&#8209;pending&nbsp;mode   | Like Normal mode, but after an operator command has start, and Vim is waiting for a `{motion}` to specify the text that the operator will work on.
| Command-line mode<br>Cmdline mode  | `:`, `/`, `?`, `!`
| Multiple-cursor mode               | `CTRL-n` or `gh`
