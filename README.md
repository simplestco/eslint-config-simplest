# eslint-config-simplest

## Features

- All in one lint, you need to install no more than this package
- AirB&B and eslint:recomended rules

## Set up

### Install

Run `npm i eslint-config-simplest -D`

### Configure

Run `echo '{ "extends": "simplest" }' > .eslintrc` or add `"extends": "simplest"` to yout .eslintrc file.

Use this file to add or disable rules as you want.

### Use

Normaly, your editor recognize .eslintrc files and execute it inline.

Otherwise run `npx eslint .` or add `eslint .` to your *package.json* as a script.