| Pattern              | Purpose                                      | Use When                                                   | Real-World Example                                         |
|----------------------|----------------------------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| Iterator             | Access elements without exposing structure   | You need sequential access to a collection                  | Browsing items in a playlist or shopping cart              |
| Observer             | Notify dependents on state change            | An object change should trigger updates in others           | Weather app updating all widgets                           |
| Strategy             | Select algorithm at runtime                  | You need different variants of an algorithm dynamically     | Payment method selection (Credit, PayPal, UPI, etc.)       |
| Command              | Encapsulate requests as objects              | You want to queue, log, or undo operations                  | Remote control triggering commands like ON/OFF             |
| State                | Change behavior based on internal state      | Object's behavior depends on its current state              | Vending machine (Ready, Dispensing, Out-of-Stock)          |
| Template Method      | Define skeleton of algorithm, let subclass fill steps | Algorithm varies slightly across subclasses             | Cooking recipe template with customizable steps            |
| Visitor              | Separate operations from object structure    | You want to perform operations on object hierarchy          | Tax calculation over different invoice types               |
| Mediator             | Centralize communication between components  | Complex inter-component interactions need coordination      | Chatroom, air traffic control system                        |
| Memento              | Capture and restore object state             | You want to implement undo/rollback                         | Text editor undo history                                   |
| Chain of Responsibility | Pass request through chain of handlers   | Multiple handlers may process the request                   | Customer support escalation (bot → agent → supervisor)     |

