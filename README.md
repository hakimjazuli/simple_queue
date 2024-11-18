# simple_queue
-   made for queue handler for `@html_first` internals;
-   but are generally capable enough for general usages;
## how to install
```shell
npm i @html_first/simple_queue
```


<h2 id="exported-api-and-type-list">exported-api-and-type-list</h2>

- [_Queue](#_queue)

- [_QueueFIFO](#_queuefifo)

- [_QueueObject](#_queueobject)

- [_QueueObjectFIFO](#_queueobjectfifo)

<h2 id="_queue">_Queue</h2>

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>

queue handler with `unique id`;

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>


<h2 id="_queuefifo">_QueueFIFO</h2>

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>

queue handler `first in first out`;

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>


<h2 id="_queueobject">_QueueObject</h2>

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>

debouncing using `unique id` in conjuction with [_Queue](#_queue);```js// @ts-checkimport { _Queue, _QueueObject } from '@html_first/simple_queue';$queue = new _Queue();$queue.assign( ...new _QueueObject({	...options}));```

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>


<h2 id="_queueobjectfifo">_QueueObjectFIFO</h2>

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>

debouncing `first in first out` in conjuction with [_QueueFIFO](#_queuefifo)```js// @ts-checkimport { _QueueFIFO, _QueueObjectFIFO } from '@html_first/simple_queue';$queue = new _QueueFIFO();$queue.assign( ...new _QueueObjectFIFO({	...options}));```

*) <sub>[go to exported list](#exported-api-and-type-list)</sub>
