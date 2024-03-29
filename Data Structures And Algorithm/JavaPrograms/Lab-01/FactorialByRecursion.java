import java.util.Scanner;

public class FactorialByRecursion{
    public static int findFactorial(int n){
        if(n==0||n==1){
            return 1;
        }
        else{
            return n*findFactorial(n-1);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number:");
        int n = sc.nextInt();
        int answer = findFactorial(n);
        System.out.println(n+"!="+answer);
    }
}