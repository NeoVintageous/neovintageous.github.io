# Abolish

Abolish is a port of [vim-abolish](https://github.com/tpope/vim-abolish) by [@tpope](https://x.com/tpope).

## Coercion

Abolish's case mutating algorithms can be applied to the word under the cursor using the cr mapping (mnemonic: CoeRce) followed by one of the following characters:

| Key       | Algorithm
| :-------- | :--------
| c         | camelCase
| p         | PascalCase
| m         | MixedCase (aka PascalCase)
| _         | snake_case
| s         | snake_case
| u         | SNAKE_UPPERCASE
| U         | SNAKE_UPPERCASE
| k         | kebab-case (not usually reversible; see abolish-coercion-reversible)
| -         | dash-case (aka kebab-case)
| .         | dot.case (not usually reversible; see abolish-coercion-reversible)

For example, cru on a lowercase word is a slightly easier to type equivalent to gUiw.

::: details Multiple cursor

1. `CTRL-n` Enter multiple cursor.
1. `n` Add next match.
1. `<Esc>` Enter normal mode.
1. `cru` Coerce to uppercase.

See the [multiple cursors](/plugins/multiple-cursors) documentation for more details.
:::

### Coercion reversibility

Some separators, such as "-" and ".", are listed as "not usually reversible".

The reason is that these are not "keyword characters", so vim (and abolish.vim) will treat them as breaking a word.

For example: "key_word" is a single keyword.  The dash-case version, "key-word", is treated as two keywords, "key" and "word".

## Settings

<!--@include:@/reusables/settings/abolish.md-->

## Status

<!--@include:@/reusables/status/abolish.md-->

Check out the [roadmap](/roadmap#abolish) for a detailed inventory of feature status.
