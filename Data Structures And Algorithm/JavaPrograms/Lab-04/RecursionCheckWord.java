import java.util.Scanner;
public class RecursionCheckWord {
    public static boolean numberSameRecursion(int numbers[],int n){
       
        if(numbers.length==0){
            return false;
        }
        else if(numbers[0]==n){
            return true;
        }
        else {
            int [] a1 = new int[numbers.length-1];
            for(int j=0; j<numbers.length-1; j++){
                a1[j] = numbers[j+1];
            }
           return numberSameRecursion(a1,n);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numbers [] = {12,24,36,48,60};
        System.out.println("Enter the number you want to scan:");
        int n = sc.nextInt();
        if(numberSameRecursion(numbers,n)){
            System.out.println("the number "+n+" is in the given array");
        }
        else{
            System.out.println("the number "+n+" is not in the given array");
        }

    }
}
