# `env-var`

**Warning:** This code is experimental. Use at your own risk.

## Installation

If you install this package locally, you will be able to use the command `env-var` in your `package.json` scripts (as shown in the next section):

```
cd my-package/
npm install --save-dev @rauschma/env-var
```

## How to use it

```json
{
  "scripts": {
    "hi": "env-var echo {{npm_package_config_hi}}"
  },
  "config": {
    "hi": "HELLO"
  }
}
```

The following shell command works on all platforms (tested on macOS and Windows):

```
% npm run hi
HELLO
```

## Tips

* Use `npm run env` to see which environment variables are available on your system.

## Inspiration

Inspired by [`cross-var` by Elijah Manor](https://github.com/elijahmanor/cross-var). Differences:

* A different syntax for interpolation.
* Interpolation is implemented differently.
* No dependencies.
