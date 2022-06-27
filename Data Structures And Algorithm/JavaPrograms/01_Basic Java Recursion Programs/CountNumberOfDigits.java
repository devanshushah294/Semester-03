import java.util.Scanner;

public class CountNumberOfDigits {
    public static int findNumberOfDigits(int n){
        if(n/10==0){
            return 1;
        }
        else{
            return 1+findNumberOfDigits(n/10);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number");
        int n = sc.nextInt();
        int answer = findNumberOfDigits(n);
        System.out.println("The number of digits in "+n+" are"+answer);
        

    }    
}
