import java.util.Scanner;

public class FactorialUsingFor {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number:");
        int n = sc.nextInt();
        int answer = 1;
        for(int i = n;i>0;i--){
            answer *= i;
        }
        System.out.println(n+" != "+answer);
    }
}
