# simple_queue

-   made for queue handler for `@html_first` internals;
-   but are generally capable enough for general usages;

## how to install

```shell
npm i @html_first/simple_queue
```

## usage

```js
// @ts-check

import { __Queue, _QueueObject } from '@html_first/simple_queue';

$queue = new __Queue();
$queue.assign(
	new _QueueObject(
		'id' /** <- queue id to prevent spamming action button */,
		() => {
			/**
			 * - callback
			 * - can also be async function
			 */
		},
		0 /** <- debounce on each valid(sanitized from spam action */
	)
);
```
