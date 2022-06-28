import java.util.Scanner;
public class SecondLargestNumber{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number you want to give:");
        int n = sc.nextInt();
        int [] array = new int[n];
        for(int i = 0 ; i<n ; i++){
            System.out.println("Enter the number"+(i+1));
            array[i] = sc.nextInt();
        }
        int secondLargest=array[0];
        int largest=array[0];

        for(int i = 0;i<n;i++){
            if(i==0){
                largest=array[i];
                secondLargest=Integer.MIN_VALUE;
            }
            else if(array[i]>largest){
                secondLargest = largest;
                largest = array[i];
            }
            else if(secondLargest<array[i]){
                secondLargest = array[i];
            }
        }
        System.out.println("the second largest number is :"+secondLargest);
    }
}