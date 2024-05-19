# simple_queue

-   made for queue handler for `@html_first` internals;
-   but are generally capable enough for general usages;

## how to install

```shell
npm i @html_first/simple_queue
```

## usage

-   debouncing using unique id

```js
// @ts-check

import { _Queue, _QueueObject } from '@html_first/simple_queue';

$queue = new _Queue();
$queue.assign(
	new _QueueObject(
		'id' /** <- queue id to prevent spamming action button */,
		() => {
			/**
			 * - callback
			 * - can also be async function
			 */
		},
		false /** <- false or number debounce on each valid(sanitized from spam action */
	)
);
```

-   handles all with first in first out

```js
// @ts-check

import { _QueueFIFO, _QueueObjectFIFO } from '@html_first/simple_queue';

$queue = new _QueueFIFO();
$queue.assign(
	new _QueueObjectFIFO(() => {
		/**
		 * - callback
		 * - can also be async function
		 */
	}, false /** <- false or number debounce on each valid(sanitized from spam action */)
);
```
