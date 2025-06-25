// state behavior design pattern based on the current state we can dynamically change the corresponding state class
// The State Design Pattern is a behavioral pattern that allows an object to alter its behavior when its internal state changes — making it seem as if the object changed its class.


class VendingMachine {
   price;
   item;
   currState;
   constructor() {
      this.setCurrState(new IdleMachineState())
   }

   setPrice(price) {
      this.price = price;
   }

   setItem(item) {
      this.item = item;
   }

   setCurrState(state:MachineState) {
      this.currState = state;
   }

   selectItem(item: string) {
       this.currState.selectItem(this,item);
   }

   insertCoin(coin: number) {
       this.currState.insertCoin(this,coin)
   }

   dispenseItem() {
       this.currState.dispenseItem(this);
   }
}

abstract class MachineState {
   abstract selectItem(context:VendingMachine,item:string);
   abstract insertCoin(context:VendingMachine,coin:number);
   abstract dispenseItem(context:VendingMachine);
}

class ItemSelectedMachineState implements MachineState {
   constructor() {}
   
   selectItem(context: VendingMachine, item: string) {
       console.log('item already selected');
       
   }

   dispenseItem(context: VendingMachine) {
       console.log('insert coin to dispense item');
   }

   insertCoin(context: VendingMachine, coin: number) {
       context.insertCoin(coin);
       //context.setCurrState(new CoinInsertedMachineState())
   }
}


class IdleMachineState implements MachineState {

   constructor() {}
   
   selectItem(context: VendingMachine, item: string) {
       console.log('Selecting the item');
       context.selectItem(item);
       context.setCurrState(new ItemSelectedMachineState())

   }

   dispenseItem(context: VendingMachine) {
       console.log('cannot')
   }
   insertCoin(context: VendingMachine, coin: number) {
       console.log('cannot')
   }
   
}

let vm = new VendingMachine()
vm.selectItem('item');
vm.insertCoin(1);
vm.dispenseItem();
