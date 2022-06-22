/* Read number in array then read 2 different numbers the and replace first
number with second number & print the changed indexes and also print the final arrray */
import java.util.Scanner;
public class Array_01{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the numbers:");
        int n =sc.nextInt();
        int[] numbers = new int[n];
        
        for(int i = 0;i<n;i++){
            System.out.println("Enter the numbers ");
            numbers[i] = sc.nextInt();
        }
        System.out.println("Enter the number in you want to replace:");
        int x = sc.nextInt();
        System.out.println("Enter the number which you want to give");
        int y = sc.nextInt();
        for(int i = 0;i<n;i++){
            if(numbers[i]==x){
                numbers[i]=y;
                System.out.println("index"+i+"is changed");
            }
        }
        for(int i = 0; i<n; i++){
            System.out.println("number"+(i+1)+"is"+numbers[i]);
        }

    }
}