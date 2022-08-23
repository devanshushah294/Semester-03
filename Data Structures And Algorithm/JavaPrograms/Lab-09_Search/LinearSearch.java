import java.util.Scanner;
public class LinearSearch {
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the number of elements you want:");
    int n = sc.nextInt();
    int index = -1;
    int[] arr = new int[n];
    for(int i=0;i<n;i++){
      System.out.println("Enter the number");
      arr[i] = sc.nextInt();
    }
    System.out.println("Enter the number you want to search for:");
    int number = sc.nextInt();
    for(int i=0; i<n; i++){
      if(arr[i]==number){
        index = i;
        break;
      }
    }
    if(index == -1){
      System.out.println("The number is not in the array");
    }else{
      System.out.println("The number is at the index"+index);
    }
  }  
}
