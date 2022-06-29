/* Scan the time in hour and minutes and give the angle between hour and minute hand */
import java.util.Scanner;

public class TimeDegree {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the hour time:");
        int hour = sc.nextInt();
        System.out.println("Enter the minutes time:");
        int minutes = sc.nextInt();
        double hourInMinutes = 0.00;
        
        if(hour<13&&hour>0&&minutes>=0&&minutes<60){
            if(hour>0&&hour<12){
                hourInMinutes = (hour)*5+(0.083*minutes);
            }
            else if(hour==12){
                hourInMinutes = (0.083*minutes);
            }
            double difference = Math.abs(hourInMinutes - minutes);
            System.out.println("The angle is : "+difference*6.00); 
            }
        else{
            System.out.println("Please enter the correct time");
        }
    
    }
}
