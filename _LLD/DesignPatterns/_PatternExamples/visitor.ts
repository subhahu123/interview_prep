// The Visitor Design Pattern is a behavioral pattern used to separate algorithms from the objects on which they operate, allowing you to add new operations without modifying the object structures.

// Visitor Interface
interface Visitor {
  visitBook(book: Book): void;
  visitMovie(movie: Movie): void;
}

// Element Interface
interface Item {
  accept(visitor: Visitor): void;
}

// Concrete Elements
class Book implements Item {
  constructor(public title: string, public price: number) {}
  accept(visitor: Visitor) {
    visitor.visitBook(this);
  }
}

class Movie implements Item {
  constructor(public name: string, public ticketPrice: number) {}
  accept(visitor: Visitor) {
    visitor.visitMovie(this);
  }
}

// Concrete Visitor
class DiscountVisitor implements Visitor {
  visitBook(book: Book): void {
    console.log(`Discounted book price for ${book.title}: ₹${book.price * 0.9}`);
  }

  visitMovie(movie: Movie): void {
    console.log(`Discounted movie ticket for ${movie.name}: ₹${movie.ticketPrice * 0.8}`);
  }
}

// Client
const items: Item[] = [
  new Book("Clean Code", 500),
  new Movie("Inception", 300),
];

const discount = new DiscountVisitor();
items.forEach(item => item.accept(discount));
