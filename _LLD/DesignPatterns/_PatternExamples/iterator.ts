// iterator behaviour design pattern (help to iterate over the object without providing access to internals)

// Iterator interface
interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}

// Concrete Iterator
class NameIterator implements IIterator<string> {
  private index = 0;

  constructor(private names: string[]) {}

  hasNext(): boolean {
    return this.index < this.names.length;
  }

  next(): string {
    return this.names[this.index++];
  }
}

// Collection interface
interface IterableCollection<T> {
  createIterator(): IIterator<T>;
}

// Concrete Collection
class NameRepository implements IterableCollection<string> {
  private names = ["Alice", "Bob", "Charlie"];

  createIterator(): IIterator<string> {
    return new NameIterator(this.names);
  }
}

// Client
const repo = new NameRepository();
const iterator = repo.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
