// strategy behavior design pattern which let you define a family of algo into different class and make use of them interchangebly during runtime

class Order {
   cost:number;
   quantity:number;
   weight:number;
}

interface ShippingStrategy {
   calculateCost(order:Order):number
}

class ShippingCostCalculator {
   constructor(private strategy:ShippingStrategy) {}

   setShippingStrategy(strategy:ShippingStrategy) {
      this.strategy = strategy;
   }

   calculateShippingCost(order:Order) {
      this.strategy.calculateCost(order);
   }
}

class FixedCostShipping implements ShippingStrategy {
   constructor(private fixed:number) {}

   calculateCost(order: Order): number {
       return this.fixed*order.cost*order.quantity;
   }
}

class WeightBasedCostShipping implements ShippingStrategy {
   constructor(private costperkg) {}

   calculateCost(order: Order): number {
       return this.costperkg*order.weight*order.quantity
   }
}

function ClientCall() {
   const order = new Order()

   const fixedRate1 = new FixedCostShipping(10);

   const shippingCost = new ShippingCostCalculator(fixedRate1);
   shippingCost.calculateShippingCost(order)

   const weightBasedRate1 = new WeightBasedCostShipping(10);
   shippingCost.setShippingStrategy(weightBasedRate1);
   shippingCost.calculateShippingCost(order)
}
