// Command behavior design patterns encapsulate requests as objects. This enables features like undo/redo, queuing, logging, and decoupling sender from receiver.

// command abstract class
abstract class Command {
   abstract execute():void;
   abstract undo():void;
}


// Concrete recievers who that the actual work
class Light {
    state;
    public  on() {
      this.state = true;
        console.log("Light turned ON");
    }

    public  off() {
      this.state = false;
        console.log("Light turned OFF");
    }
}

class Thermostat {
   public setTemperator(temp:number) {
      console.log('setting'+temp+' temperator')
   }
}

// command class which are calling the recievers
class LightsOff implements Command {

   constructor(private light:Light) {
      
   }

   execute(): void {
       this.light.off();
   }

   undo(): void {
       this.light.state ? this.light.off() : this.light.on();
   }
}

class LightsOn implements Command {

   constructor(private light:Light) {
      
   }

   execute(): void {
       this.light.on();
   }

   undo(): void {
       this.light.state ? this.light.off() : this.light.on();
   }
}

// invocker
class SmartButton {
   currCommand:Command;
   history:Command[]

   constructor(private cmd:Command) {
      this.currCommand = cmd;
      this.history.push(cmd)
   }

   setCommand(cmd:Command) {
      this.currCommand = cmd;
      this.history.push(cmd);
   }

   executeCommand() {
      this.currCommand.execute();
   }

   undoCommand() {
      this.currCommand.undo()
   }
}

const light = new Light();
const lightoff = new LightsOff(light);

const smtBtn = new SmartButton(lightoff);
smtBtn.executeCommand()

const lighton = new LightsOn(light);
smtBtn.setCommand(lighton);

smtBtn.executeCommand();
smtBtn.undoCommand();