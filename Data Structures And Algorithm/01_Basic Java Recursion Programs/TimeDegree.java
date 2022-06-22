import java.util.Scanner;

public class TimeDegree {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the hour time:");
        int hour = sc.nextInt();
        System.out.println("Enter the minutes time:");
        int minutes = sc.nextInt();
        
        double hourInMinutes = (hour)*5+(0.083*minutes);
        double difference = Math.abs(hourInMinutes - minutes);
        System.out.println("The angle is : "+difference*6.00); 
    }
    
}
