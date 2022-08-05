# `env-var`

## Installation

If you want to use the command `env-var` in your package, you can either install this package globally:

```
npm install -g @rauschma/env-var
```

You can also install it locally:

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

Works on all platforms (tested on macOS and Windows):

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
