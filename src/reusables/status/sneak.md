**Normal mode**

| Status             | Command           | Description
| :----------------- | :---------------- | :----------
| :white_check_mark: | `s{char}{char}` | Go to the next occurrence of `{char}{char}`
| :white_check_mark: | `S{char}{char}` | Go to the previous occurrence of `{char}{char}`
| :white_check_mark: | `s{char}<Enter>` | Go to the next occurrence of `{char}`
| :white_check_mark: | `S{char}<Enter>` | Go to the previous occurrence of `{char}`
| :white_check_mark: | `s<Enter>` | Repeat the last Sneak.
| :white_check_mark: | `S<Enter>` | Repeat the last Sneak, in reverse direction.
| :white_check_mark: | `;` | Go to the `[count]`th next match
| :white_check_mark: | `,` or `\` | Go to the `[count]`th previous match
|                    | `s` | Go to the `[count]`th next match
|                    | `S` | Go to the `[count]`th previous match
|                    | `[count]s{char}{char}` | Invoke sneak-vertical-scope
|                    | `[count]S{char}{char}` | Invoke backwards sneak-vertical-scope
| :white_check_mark: | `{operator}z{char}{char}` | Perform `{operator}` from the cursor to the next occurrence of `{char}{char}`
| :white_check_mark: | `{operator}Z{char}{char}` | Perform `{operator}` from the cursor to the previous occurrence of `{char}{char}`

**Visual mode**

| Status             | Command           | Description
| :----------------- | :---------------- | :----------
| :white_check_mark: | `s{char}{char}` | Go to the next occurrence of `{char}{char}`
| :white_check_mark: | `Z{char}{char}` | Go to the previous occurrence of `{char}{char}`
| :white_check_mark: | `s{char}<Enter>` | Go to the next occurrence of `{char}`
| :white_check_mark: | `Z{char}<Enter>` | Go to the previous occurrence of `{char}`
| :white_check_mark: | `s<Enter>` | Repeat the last Sneak.
| :white_check_mark: | `Z<Enter>` | Repeat the last Sneak, in reverse direction.
| :white_check_mark: | `;` | Go to the `[count]`th next match
| :white_check_mark: | `,` or `\` | Go to the `[count]`th previous match
|                    | `s` | Go to the `[count]`th next match
|                    | `S` | Go to the `[count]`th previous match

**Label mode**

| Status              | Command               | Description
| :------------------ | :-------------------- | :----------
|                     | `<Space>` or `<Esc>`  | Exit `sneak-label-mode` where the cursor is.
|                     | `<Tab>`               | Label the next set of matches.
|                     | `<BS>` or `<S-Tab>`   | Label the previous set of matches.
