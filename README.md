# simple_queue

-   made for queue handler for `@html_first` internals;
-   but are generally capable enough for general usages;

## how to install

```shell
npm i @html_first/simple_queue
```

## usage

-   made `__Queue.__` global by instantiating one `__Queue` class

```js
// @ts-check

import { __Queue } from '@html_first/simple_queue';

new __Queue();
```

-   assign `_QueueObject` to `__Queue.__.assign`

```js
// @ts-check

import { __Queue } from '@html_first/simple_queue';
import { _QueueObject } from '@html_first/simple_queue';

__Queue.__.assign(
	new _(
		QueueObject(
			'id' /** <- queue id to prevent spamming action button */,
			() => {
				/**
				 * - callback
				 * - can also be async function
				 */
			},
			0 /** <- debounce on each valid(sanitized from spam) action */
		)
	)
);
```
