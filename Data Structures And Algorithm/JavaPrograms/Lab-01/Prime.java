import java.util.Scanner;

public class Prime {
    public static void isPrime(int n){
        boolean flag = false;
        for(int i =2; i<n; i++){
            if(n%i==0){
                flag = true;
                break;
            }
        }
        if(flag){
            System.out.println("The number is not prime:");
        }else{
            System.out.println("the number is prime:");
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number : ");
        int n = sc.nextInt();
        isPrime(n);
    }
}
