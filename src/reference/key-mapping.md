# Key mapping

[[toc]]

## `<Leader>` mapleader

To define a mapping which uses the "mapleader" variable, the special string
"`<Leader>`" can be used.  It is replaced with the string value of
"mapleader".  If "mapleader" is not set or empty, a backslash is used
instead. Example:

```vim
noremap <Leader>A  oanother line<Esc>
```

Works like:

```vim
noremap \A  oanother line<Esc>
```

But after:

```vim
let mapleader=,
```

It works like:

```vim
noremap ,A  oanother line<Esc>
```

::: info NOTE
The value of "mapleader" is used at the moment the mapping is defined.  Changing "mapleader" after that has no effect for already defined mappings.
:::

## `<LocalLeader>` maplocalleader

`<LocalLeader>` is just like `<Leader>`, except that it uses "maplocalleader" instead of "mapleader".  Example:

```vim
let maplocalleader=,
noremap: <LocalLeader>A  oanother line<Esc>
```

## Map commands

There are commands to enter new mappings, remove mappings and list mappings.

`{lhs}`   means left-hand-side.

`{rhs}`   means right-hand-side.

| Commands | Description
| -------: | :----------
| :no[remap]&nbsp;`{lhs}`&nbsp;`{rhs}` <br>:nn[oremap]&nbsp;`{lhs}`&nbsp;`{rhs}` <br>:ino[remap]&nbsp;`{lhs}`&nbsp;`{rhs}` <br>:vn[oremap]&nbsp;`{lhs}`&nbsp;`{rhs}` <br>:xn[oremap]&nbsp;`{lhs}`&nbsp;`{rhs}` <br>:snor[emap]&nbsp;`{lhs}`&nbsp;`{rhs}` <br>:ono[remap]&nbsp;`{lhs}`&nbsp;`{rhs}` | Map the key sequence `{lhs}` to `{rhs}` for the modes where the map command applies.  Disallow mapping of `{rhs},` to avoid nested and recursive mappings.  Often used to redefine a command.

## Mapping specific file-types

The `FileType <type>` argument can be used to limit a mapping to specific file types. It must appear right after the command, before any other arguments. This feature is specific to Sublime Text.

File type specific mappings are supported by the `FileType` keyword that accepts a comma-delimited list of file-types.

**Example:** Map `gd` to the `lsp_symbol_definition` command for \*.go and \*.html files.

```vim
nnoremap FileType go,html gd :LspSymbolDefinition<CR>
```

## Mapping and modes

There are seven sets of mappings

- For Normal mode: When typing commands.
- For Visual mode: When typing commands while the Visual area is highlighted.
- For Select mode: like Visual mode but typing text replaces the selection.
- For Operator-pending mode: When an operator is pending (after "`d`", "`y`", "`c`", etc.).
- For Insert mode.  These are also used in Replace mode.

Special case: While typing a count for a command in Normal mode, mapping zero is disabled.  This makes it possible to map zero without making it impossible to type a count with a zero.

Overview of which map command works in which mode:

| COMMAND   | COMMAND | MODES
| :-------- | :------ | :----
| :noremap  | :unmap  | Normal, Visual, Select, Operator-pending
| :nnoremap | :nunmap | Normal
| :inoremap | :iunmap | Insert <br>:warning: Insert mode mappings are very limited. Very few keys are mappable out-of-the-box, but you can configure any key to be mappable. This may be improved in a future release.
| :vnoremap | :vunmap | Visual and Select
| :xnoremap | :xunmap | Visual
| :snoremap | :sunmap | Select <br>:warning: Currently represents Multiple-cursor mode; this may change in a future release. The multiple-cursor mode is likely to get its own dedicated mode. Probably :mnoremaap?
| :onoremap | :ounmap | Operator-pending

Same information in a table:

|          Mode  | Norm | Ins | Vis | Sel | Opr |
|:---------------|:----:|:---:|:---:|:---:|:---:|
| [nore]map      | yes  |  -  | yes | yes | yes |
| n[nore]map     | yes  |  -  |  -  |  -  |  -  |
| i[nore]map     |  -   | yes |  -  |  -  |  -  |
| v[nore]map     |  -   |  -  | yes | yes |  -  |
| x[nore]map     |  -   |  -  | yes |  -  |  -  |
| s[nore]map     |  -   |  -  |  -  | yes |  -  |
| o[nore]map     |  -   |  -  |  -  |  -  | yes |

| Command   | Command  | Normal | Visual+Select | Operator-pending
| :-------- | :------- | :----- | :------------ | :---------------
| :noremap  | :unmap   | yes    | yes           | yes
| :nnoremap | :nunmap  | yes    | -             | -
| :vnoremap | :vunmap  | -      | yes           | -
| :onoremap | :ounmap  | -      | -             | yes

## Mapping special keys

In Vim, certain keys hold special significance. You can find a useful list of these special keys, along with their notations and codes, in the Vim documentation's [key-notation and key-codes section](https://vimhelp.org/intro.txt.html#key-notation).

**Examples**

| Key        | Meaning
| :--------- | :------
| `<tab>`    | tab
| `<space>`  | space
| `<lt>`     | less-than `<`
| `<bslash>` | backslash `\`

## Mapping ex commands

**Example:** Map CTRL-l to the :nohlsearch command to stop the highlighting for the 'hlsearch' option.

```vim
noremap <C-l> :nohlsearch<CR>
```

For a full list of supported ex commands, please refer to our [roadmap](https://github.com/NeoVintageous/NeoVintageous/blob/master/ROADMAP.md).

## Mapping Sublime Text commands

Sublime Text commands are mappable. The command must be PascalCase and the parameters must be space separated.

::: info NOTE
Sublime Text commands are PascalCased for the purpose of distinguishing them from Ex commands, which always start with a lowercase letter. This choice is due to an implementation detail.
:::

**Example:** Map `,f` to the `show_overlay` command with arguments `{"overlay": "goto", "text": "@"}`

```vim
nnoremap ,f :ShowOverlay overlay=goto text=@<CR>
```

**Where do these commands come from?**

When you run a command in Sublime Text, you can inspect the console log to discover the command and arguments needed to map it.

1. Console Logging: View console logging by navigating to `Menu → View → Show Console`.
1. Command and Input Logging: Enable command and input logging by running the following commands in the console:
   ```
   sublime.log_commands(True)
   sublime.log_input(True)
   ```

For example, let's say you want to map "Goto Symbol" command above. Run the command, e.g., "Menu → Goto → Goto Symbol" command and Sublime Text will print the following in the console:

```
command: show_overlay {"overlay": "goto", "text": "@"}
```

## Mapping super-keys

Super keys, also known as the Windows key or Command key (⌘) on Mac, are denoted as `<D-...>`.

For example, to map the `<D-i>` combination to the `goto_symbol_in_project` command, add the following configuration to your neovintageousrc file:

```vim
nnoremap <D-i> :GotoSymbolInProject<CR>
```

With this mapping in place, pressing the Super key (Windows key or Command key on Mac) together with the 'i' key will trigger the `goto_symbol_in_project` command in NeoVintageous.

Please note that this example demonstrates mapping the `<D-i>` combination for illustrative purposes. You can map other Super-key combinations or any desired key combinations to different commands based on your needs and preferences.

## Mapping case-sensitivity

All keys are case-sensitive in Sublime Text. This means that `<D-i>` and `<D-I>` are treated as two distinct key events, allowing you to map actions to both.

**Example:** Map "Goto Symbol in Project" and "Goto Symbol in File" using case-sensitive mappings

To map the Super-key (Windows key or Command key on Mac) together with the 'i' key to the "Goto Symbol in Project" command, add the following configuration to your neovintageousrc file:

```vim
noremap <D-i> :GotoSymbolInProject<CR>
```

To map the Super-key together with the 'Shift' and 'i' keys (`<D-I>`) to the "Goto Symbol in File" command, add the following configuration to your neovintageousrc file:

```vim
noremap <D-I> :ShowOverlay overlay=goto text=@<CR>
```

With these mappings in place, you can now use both `<D-i>` and `<D-I>` combinations to trigger different commands in NeoVintageous.

Feel free to modify and customize these mappings based on your preferences and workflow. The case-sensitivity of the keys allows you to create distinct mappings for different actions, providing you with greater flexibility in your keybindings.

## Mapping for toggling the sidebar

To create a mapping to toggle the side bar, you need to create a mapping and key binding.

First, add the mapping to your [neovintageousrc](/reference/neovintageousrc):

Command Palette → NeoVintageous: Open .neovintageousrc file

```vim
let mapleader=,
nnoremap <Leader>d :Neovintageous action=toggle_side_bar<CR>
```

Next, add the key binding.

Command Palette → Preferences: Key Bindings

```json
{
    "keys": [",", "d"],
    "command": "neovintageous",
    "args": {
        "action": "toggle_side_bar"
    },
    "context": [
        { "key": "control", "operand": "sidebar_tree" }
    ]
}
```

Reload your neovintageousrc:

Command Palette → NeoVintageous: Reload .neovintageousrc file

::: info
The key binding is for when the side bar has focus.
:::

::: info NOTE
In the example above we use `<Leader>d`, and the leader key is a comma. This means to toggle the side bar you press `,d`, but you can choose your preferred mapping.
:::

## Mapping for revealing the sidebar

To create a mapping to reveal the sidebar, you need to create a mapping and key binding.

First, add the mapping to your [neovintageousrc](/reference/neovintageousrc):

Command Palette → NeoVintageous: Open .neovintageousrc file

```vim
let mapleader=,
nnoremap <Leader><Leader> :Neovintageous action=reveal_side_bar<CR>
```

Next, add the key binding.

Command Palette → Preferences: Key Bindings

```json
{
    "keys": [",", ","],
    "command": "focus_group",
    "args": {
        "group": 0
    },
    "context": [
        { "key": "control", "operand": "sidebar_tree" }
    ]
}
```

Reload your neovintageousrc:

Command Palette → NeoVintageous: Reload .neovintageousrc file

::: info
The key binding is for when the side bar has focus.
:::

::: info NOTE
In the example above we use `<Leader><Leader>`, and the leader key is a comma. This means to reveal the sidebar you press `,,`, but you can choose your preferred mapping.
:::

## Mapping Capslock to Escape

NeoVintageous cannot directly remap the CapsLock key; however, you can achieve this remapping at the operating system level. For instance, on Ubuntu, you can map the CapsLock key to Escape using a tool called `gsettings`. Follow these steps to make the remapping:

Run the following command to map CapsLock to Escape using `gsettings`:

```bash
gsettings set org.gnome.desktop.input-sources xkb-options "['caps:escape']"
```

After executing this command, the CapsLock key will act as the Escape key in your system. This means that when using NeoVintageous or any other application, pressing CapsLock will have the same effect as pressing the Escape key.

::: info NOTE
The specific method to remap keys might vary depending on your operating system or desktop environment. Be sure to check the documentation or forums related to your OS for any variations or additional steps.
:::
