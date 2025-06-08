package _LLD.OOD.Class.Examples;

public class Student {
   // Attributes
   String name;
   String id;
   int age;
   int gradYear;


   // Behaviours/functions
   public void rateClass(int rating) {
      System.out.println("You have rated the class with"+rating);
   };

   public void solveAssignment(String assignment) {
      System.out.println("You are solving the "+ assignment);
   }

   public void displayDetails() {
      System.out.println("Your id:"+id);
      System.out.println("Your name:"+name);
      System.out.println("Your age:"+age);
      System.out.println("Your gradYear:"+gradYear);
   }
}