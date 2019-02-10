/**
 * Generate iterator for range.
 * @param start Start value (inclusive).
 * @param stop Stop value (inclusive).
 * @param step Interval between values.
 * @returns Iterator of range.
 */
export function* range(start: number = 0, stop?: number, step: number = 1): IterableIterator<number> {
  for (let i = start; i + step <= stop || stop === undefined; i += step) {
    yield i;
  }
}

/**
 * Generate iterator of items from 0 to n.
 * @param n Max limit.
 * @returns Iterator of range.
 */
export function* range_n(n: number): IterableIterator<number> {
  yield* range(Math.min(0, n), Math.max(0, n), 1);
}

/**
 * Map items with function.
 * @param iterable Iterator items to map over.
 * @param callback Mapping function.
 * @returns Iterator of mapped items.
 */
export function* map<T, U>(iterable: IterableIterator<T>, callback: (a: T) => U): IterableIterator<U> {
  for (let item of iterable) {
    yield callback(item);
  }
}


/**
 * Chain multiple iterators.
 * @param iterables Input iterators to chain.
 * @returns Iterator of chained inputs.
 */
export function* chain<T>(iterables: IterableIterator<IterableIterator<T>>): IterableIterator<T> {
  for (let iterable of iterables) {
    yield* iterable;
  }
}

/**
 * Repeat items forever.
 * @param items Iterator of items to repeat
 * @returns Endless iterator of items.
 */
export function* endless<T>(items: IterableIterator<T>): IterableIterator<T> {
  while (true) {
    for (let item of items) {
      yield item;
    }
  }
}

/**
 * Take items from iterator while predicate is true.
 * @param iterable Iterator of items.
 * @param predicate Predicate function.
 * @returns Iterator of selected items.
 */
export function* take_while<T>(iterable: IterableIterator<T>, predicate: (a: T) => boolean): IterableIterator<T> {
  for (let item of iterable) {
    if (!predicate(item)) {
      break;
    }
    yield item;
  }
}

/**
 * Take items from iterator unless predicate is true.
 * @param iterable Iterator of items.
 * @param predicate Predicate function.
 * @returns Iterator of selected items.
 */
export function* take_unless<T>(iterable: IterableIterator<T>, predicate: (a: T) => boolean): IterableIterator<T> {
  yield* take_while(iterable, item => !predicate(item));
}

/**
 * Take items from iterator where predicate is true.
 * @param iterable Iterator to filter.
 * @param predicate Predicate function.
 * @returns Filtered iterator.
 */
export function* filter<T>(iterable: IterableIterator<T>, predicate: (a: T) => boolean): IterableIterator<T> {
  for (let item of iterable) {
    if (predicate(item)) yield item;
  }
}

/**
 * Reduce iterator values from left.
 * @param iterable Iterator
 * @param accumulator Accumulator function.
 * @param base Start value.
 */
export function foldl<T, U>(iterable: IterableIterator<T>, accumulator: (a: U, b: T) => U , base: U): U {
  let acc = base;
  for (let item of iterable) {
    acc = accumulator(acc, item);
  }
  return acc;
}

/**
 * Reduce iterator from left using first value as accumulator.
 * @param iterable Iterator.
 * @param accumulator Accumulator function.
 */
export function foldl1<T>(iterable: IterableIterator<T>, accumulator: (a: T, b: T) => T): T {
  const iterator = iterable[Symbol.iterator]();
  const first = iterator.next().value;
  return foldl(iterator, accumulator, first);
}

/**
 * Reduce iterator values from right.
 * @param iterable Iterator
 * @param accumulator Accumulator function.
 * @param base Start value.
 */
export function foldr<T, U>(iterable: IterableIterator<T>, accumulator: (a: T, b: U) => U , base: U): U {
    let acc = base;
    for (let item of iterable) {
        acc = accumulator(item, acc);
    }
    return acc;
}

/**
 * Reduce iterator from right using first value as accumulator.
 * @param iterable Iterator.
 * @param accumulator Accumulator function.
 */
export function foldr1<T>(iterable: IterableIterator<T>, accumulator: (a: T, b: T) => T): T {
  const iterator = iterable[Symbol.iterator]();
  const first = iterator.next().value;
  return foldr(iterator, accumulator, first);
}

/**
 * Get sum of items in iterator.
 * @param iterable Iterator.
 * @returns Sum of items.
 */
export function sum(iterable: IterableIterator<string>): string;
export function sum(iterable: IterableIterator<number>): number;
export function sum(iterable) {
  return foldl1(iterable, (item: any, acc: any) => acc + item);
}

/**
 * Get average of number iterator.
 * @param iterable Number iterator.
 * @returns Average.
 */
export function avg(iterable: IterableIterator<number>): number {
  // use reduce to sum items and count length of iterable in one consume
  const { len, sum } = foldl(
    iterable,
    ({ len, sum }, item) => ({ len: len + 1, sum: sum + item }),
    { len: 0, sum: 0 }
  );
  return sum / len;
}

/**
 * Factory function creating a iterable object from next function.
 * @param next Next value function.
 * @returns Iterator
 */
export const Iterable = <T>(next: () => {value: T, done: boolean}): Iterable<T> => ({
    [Symbol.iterator]: () => ({
      next
    })
});

/**
 * Enumerate iterator.
 * 
 * Adds index number to item.
 * 
 * @param iterable Iterator to enumerate.
 * @param start Count start value.
 * @returns Enumerated iterator. 
 */
export function* enumerate<T>(iterable: IterableIterator<T>, start: number = 0): IterableIterator<[number, T]> {
  let i = start;
  for (let item of iterable) {
    yield [i, item];
    i++;
  }
}

/**
 * Repeat function n times and collect return values.
 * @param n Number of times to execute function.
 * @param callback Function to execute.
 * @returns Iterator of return values.
 */
export function* repeat<T>(n: number, callback: (a: number) => T): IterableIterator<T> {
  for (let i = 0; i < n; i++) {
    yield callback(i);
  }
}

/**
 * Consume iterator.
 * @param iterator Iterator to consume.
 */
export function consume<T>(iterator: IterableIterator<T>): void {
  for (let _item of iterator) {
    // do nothing
  }
}

/**
 * Repeat function n times.
 * @param n Number of times to execute function.
 * @param callback Function to execute.
 */
export function ntimes(n: number, callback: (a: number) => any): void {
  // repeat callback n times and consume resulting iterator to force execute
  consume(repeat(n, callback));
}

/**
 * Take n items from iterator.
 * @param n Number of items to take.
 * @param iterable Iterator of items.
 * @returns Iterator of n items.
 */
export function* take_n<T>(n: number, iterable: IterableIterator<T>): IterableIterator<T> {
  const iter = iterable[Symbol.iterator]();
  for (let i = 0; i < n; i++) {
    let { value, done } = iter.next();
    if (value === undefined) break;
    yield value;
  }
}
