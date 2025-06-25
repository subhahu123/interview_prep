// The Observer Design Pattern is a behavioral pattern that defines a one-to-many dependency between objects so that when one object (the subject) changes its state, all its dependents (observers) are automatically notified and updated.

interface FitnessDataObserver {
   update(data:any):void
} 

class FitnessData {
   subscribers:FitnessDataObserver[];

   constructor(private steps,private calories, private activity) {}

   addSubscriber(subscriber:FitnessDataObserver) {
      this.subscribers.push(subscriber)
   }

   notifySubscribers() {
      this.subscribers.forEach((subscriber) => {
         subscriber.update(this)
      })
   }

   newFitnessData(steps,calories,activity) {
      this.steps = steps;
      this.calories = calories;
      this.activity = this.activity;

      this.notifySubscribers()
   }
}

class FitnessUI implements FitnessDataObserver{
   update(data: any): void {
       console.log(data);
   }
}

class FitnessNotification implements FitnessDataObserver {
   update(data: any): void {
       console.log('Fitness'+JSON.stringify(data));
   }
}

function clientCall() {
   const fitness = new FitnessData(10,20,'walking');
   const ui = new FitnessUI();
   const notify = new FitnessNotification();

   fitness.addSubscriber(ui);
   fitness.addSubscriber(notify)
   fitness.newFitnessData(20,30,'running')
}