// decorator structural design pattern (wrapping a object over other object to add additional functionality to avoid modifying the existing code)

abstract class Coffee {
   abstract getCost():number;
   abstract getDescription():string;
}

// Concreate Implementation
class PlainCoffee implements Coffee {
   getCost(): number {
       return 100
   }

   getDescription(): string {
       return '- Simple Plain Coffee'
   }
}

class CoffeeDecorator implements Coffee {
   coffee:Coffee;
   cost:number = 0;
   description:string = '';
   constructor(coffee:Coffee) {
      this.coffee = coffee
   }
   
   getCost(): number {
       return this.coffee.getCost()
       
   }

   getDescription(): string {
       return this.coffee.getDescription();
   }
}

class MilkCoffeeDecorator extends CoffeeDecorator {

   constructor(coffee:Coffee) {
      super(coffee)
   }
   getCost(): number {
       return 5+this.coffee.getCost()
   }

   getDescription(): string {
       return this.coffee.getDescription()+',MILK'
   }
}

class SugarCoffeeDecorator extends CoffeeDecorator {
   constructor(coffee:Coffee) {
      super(coffee)
   }
   getCost(): number {
       return 10+this.coffee.getCost()
   }

   getDescription(): string {
       return this.coffee.getDescription()+',Sugar'
   }
}

const myCoffee = new SugarCoffeeDecorator(new MilkCoffeeDecorator(new PlainCoffee()))