// bridge structure design pattern decouples an abstraction from the implementation so two can vary independently

/**
 You are building a Remote Control system. You want:

Multiple types of Remotes:

BasicRemote

AdvancedRemote

To support multiple devices:

TV

Radio

Projector

Now, without the Bridge pattern, you’d need to create a class for every combination:

BasicRemoteForTV, AdvancedRemoteForTV

BasicRemoteForRadio, AdvancedRemoteForRadio

etc...

That quickly becomes unmanageable.

✅ The Bridge Solution
Instead of creating many subclasses, Bridge splits the class into two hierarchies:

Abstraction: The Remote types (BasicRemote, AdvancedRemote)

Implementation: The Device types (TV, Radio)

Now, each Remote “has-a” Device and can operate on any of them via a common interface.
   
*/
interface Device {
  turnOn(): void;
  turnOff(): void;
}

// Concrete implementations
class TTV implements Device {
  turnOn() { console.log("TV is ON"); }
  turnOff() { console.log("TV is OFF"); }
}

class Radio implements Device {
  turnOn() { console.log("Radio is ON"); }
  turnOff() { console.log("Radio is OFF"); }
}

// Abstraction
class Remote {
  constructor(protected device: Device) {}
  togglePower() {
    this.device.turnOn();
  }
}

// Client
const remote = new Remote(new TTV());
remote.togglePower(); // "TV is ON"