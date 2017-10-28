# memoize
:beginner: A JavaScript function wrapper to memorize / cache result with the same input

# Installation

```
npm install --save @changyan/memoize
```

# Basic Usage

```js
import { memoize, memoizeAsync } from '@changyan/memoize'

const add = (a, b) => a + b

const memoizedAdd = memoize(add)

memoizedAdd(1, 2) // => 3
memoizedAdd(1, 2) // => return the cached "3"

const getFakeAsyncResult = () => new Promise((resolve, reject) => setTimeout(resolve, 1000))

// and it supports caching async functions
const memoizedGetAsyncResult = memoizeAsync(getFakeAsyncResult)
```

## Contribution

PRs are welcomed!