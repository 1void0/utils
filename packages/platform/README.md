# @void0/platform

This package detects if the current code is running on client or server side..

## Usage

1. Install the package:

```sh
npm install --save @void0/platform
```

2. Import the variables exported from the package:

```js
import { isClient, isServer } from '@void0/platform'
```

Depending on the current platform, their value will be either true or false.
