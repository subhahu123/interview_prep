// The Template Method pattern defines the skeleton of an algorithm in a method, deferring some steps to subclasses. It allows you to keep the overall structure of the process consistent, while giving subclasses the flexibility to customize specific parts of the algorithm.

// Abstract class (Template)
abstract class Beverage {
  public prepare(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.log("Boiling water");
  }

  private pourInCup(): void {
    console.log("Pouring into cup");
  }

  protected abstract brew(): void;
  protected abstract addCondiments(): void;
}

// Concrete subclasses
class Tea extends Beverage {
  protected brew(): void {
    console.log("Steeping the tea");
  }

  protected addCondiments(): void {
    console.log("Adding lemon");
  }
}

class Coffee extends Beverage {
  protected brew(): void {
    console.log("Dripping coffee through filter");
  }

  protected addCondiments(): void {
    console.log("Adding sugar and milk");
  }
}

// Client
const tea = new Tea();
tea.prepare();
/*
Boiling water
Steeping the tea
Pouring into cup
Adding lemon
*/

const coffee = new Coffee();
coffee.prepare();
/*
Boiling water
Dripping coffee through filter
Pouring into cup
Adding sugar and milk
*/
