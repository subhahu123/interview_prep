//The Mediator Design Pattern is a behavioral pattern that promotes loose coupling by ensuring that components (objects) communicate via a central mediator rather than directly with each other.

// Mediator Interface
interface ChatMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}

// Colleague Interface
abstract class User {
  constructor(protected name: string, protected mediator: ChatMediator) {}

  abstract send(message: string): void;
  abstract receive(message: string): void;
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(`${sender.name}: ${message}`);
      }
    }
  }
}

// Concrete Colleague
class ChatUser extends User {
  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string): void {
    console.log(`${this.name} receives: ${message}`);
  }
}

// Client
const chatRoom = new ChatRoom();
const alice = new ChatUser("Alice", chatRoom);
const bob = new ChatUser("Bob", chatRoom);

chatRoom.addUser(alice);
chatRoom.addUser(bob);

alice.send("Hi Bob!");
bob.send("Hey Alice!");
