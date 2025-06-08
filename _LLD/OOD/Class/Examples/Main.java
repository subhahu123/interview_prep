package _LLD.OOD.Class.Examples;

class BankAccount {
   double balance;
   String ownerName;

   public boolean deposit(double amount) {
      if(amount < 0) {
         System.err.println("deposit amount can't be negative");
         return false;
      }
      balance+=amount;
      return true;
   } 

   public double withdraw(double amount) {
      if(amount > 0 && balance-amount < 0) {
         System.err.println("Insufficient account balance to withdraw"+amount);
         return 0;
      }
      balance -= amount;
      return amount;
   }
}

public class Main {
   public static void main(String[] args) {
      BankAccount ba = new BankAccount();
      ba.balance = 100;
      ba.ownerName = "Sai Teja";
      System.out.println(ba.deposit(1000));
      System.out.println(ba.withdraw(10000));
   }
}
