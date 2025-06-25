// adapter structural design pattern

// Old Interface
abstract class OldPaymentProcesser {
   abstract pay(amount:number):void
}

class StripePayment {
   makePayment(amount:number) {
      console.log('paid amount'+amount)
   }
}

class StripePaymentAdapter implements OldPaymentProcesser{
   stripePayment:StripePayment;

   constructor() {
      this.stripePayment = new StripePayment();
   }

   pay(amount:number) {
      this.stripePayment.makePayment(amount*10);
   }
}

