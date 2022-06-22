import java.util.Scanner;

public class SumOfDigits {
    public static int getSumOfDigits(int n){
        if(n/10==0){
            return n%10;
        }
        else{
            return (n%10)+getSumOfDigits(n/10);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number : ");
        int n = sc.nextInt();
        int answer = getSumOfDigits(n);
        System.out.println("The sum of digits is"+answer);
    }    
}
