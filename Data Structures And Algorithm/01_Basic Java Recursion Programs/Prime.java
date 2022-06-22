import java.util.Scanner;

public class Prime {
    public static int checkPrime(int n){
        if(n%(2)!=0){
            return 0;
        }
        else{
            return (n%(n/2)) 
        }

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number");
        int n = sc.nextInt();
    }    
}
