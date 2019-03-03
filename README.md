## @hamgom95/itertools

Javascript iterator helper functions.

### API Documentation

#### Functions

<dl>
<dt><a href="#range">range(start, stop, step)</a> ⇒</dt>
<dd><p>Generate iterator for range.</p>
</dd>
<dt><a href="#range_n">range_n(n)</a> ⇒</dt>
<dd><p>Generate iterator of items from 0 to n.</p>
</dd>
<dt><a href="#map">map(iterable, callback)</a> ⇒</dt>
<dd><p>Map items with function.</p>
</dd>
<dt><a href="#chain">chain(iterables)</a> ⇒</dt>
<dd><p>Chain multiple iterators.</p>
</dd>
<dt><a href="#endless">endless(items)</a> ⇒</dt>
<dd><p>Repeat items forever.</p>
</dd>
<dt><a href="#take_while">take_while(iterable, predicate)</a> ⇒</dt>
<dd><p>Take items from iterator while predicate is true.</p>
</dd>
<dt><a href="#take_unless">take_unless(iterable, predicate)</a> ⇒</dt>
<dd><p>Take items from iterator unless predicate is true.</p>
</dd>
<dt><a href="#filter">filter(iterable, predicate)</a> ⇒</dt>
<dd><p>Take items from iterator where predicate is true.</p>
</dd>
<dt><a href="#foldl">foldl(iterable, accumulator, base)</a></dt>
<dd><p>Reduce iterator values from left.</p>
</dd>
<dt><a href="#foldl1">foldl1(iterable, accumulator)</a></dt>
<dd><p>Reduce iterator from left using first value as accumulator.</p>
</dd>
<dt><a href="#foldr">foldr(iterable, accumulator, base)</a></dt>
<dd><p>Reduce iterator values from right.</p>
</dd>
<dt><a href="#foldr1">foldr1(iterable, accumulator)</a></dt>
<dd><p>Reduce iterator from right using first value as accumulator.</p>
</dd>
<dt><a href="#avg">avg(iterable)</a> ⇒</dt>
<dd><p>Get average of number iterator.</p>
</dd>
<dt><a href="#Iterable">Iterable(next)</a> ⇒</dt>
<dd><p>Factory function creating a iterable object from next function.</p>
</dd>
<dt><a href="#enumerate">enumerate(iterable, start)</a> ⇒</dt>
<dd><p>Enumerate iterator.</p>
<p>Adds index number to item.</p>
</dd>
<dt><a href="#repeat">repeat(n, callback)</a> ⇒</dt>
<dd><p>Repeat function n times and collect return values.</p>
</dd>
<dt><a href="#consume">consume(iterator)</a></dt>
<dd><p>Consume iterator.</p>
</dd>
<dt><a href="#ntimes">ntimes(n, callback)</a></dt>
<dd><p>Repeat function n times.</p>
</dd>
<dt><a href="#take_n">take_n(n, iterable)</a> ⇒</dt>
<dd><p>Take n items from iterator.</p>
</dd>
</dl>

<a name="range"></a>

#### range(start, stop, step) ⇒
Generate iterator for range.

**Kind**: global function  
**Returns**: Iterator of range.  

| Param | Default | Description |
| --- | --- | --- |
| start | <code>0</code> | Start value (inclusive). |
| stop |  | Stop value (inclusive). |
| step | <code>1</code> | Interval between values. |

<a name="range_n"></a>

#### range\_n(n) ⇒
Generate iterator of items from 0 to n.

**Kind**: global function  
**Returns**: Iterator of range.  

| Param | Description |
| --- | --- |
| n | Max limit. |

<a name="map"></a>

#### map(iterable, callback) ⇒
Map items with function.

**Kind**: global function  
**Returns**: Iterator of mapped items.  

| Param | Description |
| --- | --- |
| iterable | Iterator items to map over. |
| callback | Mapping function. |

<a name="chain"></a>

#### chain(iterables) ⇒
Chain multiple iterators.

**Kind**: global function  
**Returns**: Iterator of chained inputs.  

| Param | Description |
| --- | --- |
| iterables | Input iterators to chain. |

<a name="endless"></a>

#### endless(items) ⇒
Repeat items forever.

**Kind**: global function  
**Returns**: Endless iterator of items.  

| Param | Description |
| --- | --- |
| items | Iterator of items to repeat |

<a name="take_while"></a>

#### take\_while(iterable, predicate) ⇒
Take items from iterator while predicate is true.

**Kind**: global function  
**Returns**: Iterator of selected items.  

| Param | Description |
| --- | --- |
| iterable | Iterator of items. |
| predicate | Predicate function. |

<a name="take_unless"></a>

#### take\_unless(iterable, predicate) ⇒
Take items from iterator unless predicate is true.

**Kind**: global function  
**Returns**: Iterator of selected items.  

| Param | Description |
| --- | --- |
| iterable | Iterator of items. |
| predicate | Predicate function. |

<a name="filter"></a>

#### filter(iterable, predicate) ⇒
Take items from iterator where predicate is true.

**Kind**: global function  
**Returns**: Filtered iterator.  

| Param | Description |
| --- | --- |
| iterable | Iterator to filter. |
| predicate | Predicate function. |

<a name="foldl"></a>

#### foldl(iterable, accumulator, base)
Reduce iterator values from left.

**Kind**: global function  

| Param | Description |
| --- | --- |
| iterable | Iterator |
| accumulator | Accumulator function. |
| base | Start value. |

<a name="foldl1"></a>

#### foldl1(iterable, accumulator)
Reduce iterator from left using first value as accumulator.

**Kind**: global function  

| Param | Description |
| --- | --- |
| iterable | Iterator. |
| accumulator | Accumulator function. |

<a name="foldr"></a>

#### foldr(iterable, accumulator, base)
Reduce iterator values from right.

**Kind**: global function  

| Param | Description |
| --- | --- |
| iterable | Iterator |
| accumulator | Accumulator function. |
| base | Start value. |

<a name="foldr1"></a>

#### foldr1(iterable, accumulator)
Reduce iterator from right using first value as accumulator.

**Kind**: global function  

| Param | Description |
| --- | --- |
| iterable | Iterator. |
| accumulator | Accumulator function. |

<a name="avg"></a>

#### avg(iterable) ⇒
Get average of number iterator.

**Kind**: global function  
**Returns**: Average.  

| Param | Description |
| --- | --- |
| iterable | Number iterator. |

<a name="Iterable"></a>

#### Iterable(next) ⇒
Factory function creating a iterable object from next function.

**Kind**: global function  
**Returns**: Iterator  

| Param | Description |
| --- | --- |
| next | Next value function. |

<a name="enumerate"></a>

#### enumerate(iterable, start) ⇒
Enumerate iterator.

Adds index number to item.

**Kind**: global function  
**Returns**: Enumerated iterator.  

| Param | Default | Description |
| --- | --- | --- |
| iterable |  | Iterator to enumerate. |
| start | <code>0</code> | Count start value. |

<a name="repeat"></a>

#### repeat(n, callback) ⇒
Repeat function n times and collect return values.

**Kind**: global function  
**Returns**: Iterator of return values.  

| Param | Description |
| --- | --- |
| n | Number of times to execute function. |
| callback | Function to execute. |

<a name="consume"></a>

#### consume(iterator)
Consume iterator.

**Kind**: global function  

| Param | Description |
| --- | --- |
| iterator | Iterator to consume. |

<a name="ntimes"></a>

#### ntimes(n, callback)
Repeat function n times.

**Kind**: global function  

| Param | Description |
| --- | --- |
| n | Number of times to execute function. |
| callback | Function to execute. |

<a name="take_n"></a>

#### take\_n(n, iterable) ⇒
Take n items from iterator.

**Kind**: global function  
**Returns**: Iterator of n items.  

| Param | Description |
| --- | --- |
| n | Number of items to take. |
| iterable | Iterator of items. |

