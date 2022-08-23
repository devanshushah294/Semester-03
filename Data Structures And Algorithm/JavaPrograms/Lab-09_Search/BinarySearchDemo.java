import java.util.Scanner;
public class BinarySearchDemo {
  public static int binarySearch(int[] sortedArray,int number) {
    int firstIndex = 0;
    int lastIndex = sortedArray.length-1;
    int mid;
    while(firstIndex<=lastIndex){
      if(sortedArray[firstIndex]==number){
        return firstIndex;
      }
      else if(sortedArray[lastIndex]==number){
        return lastIndex;
      }
      else{
        mid = (firstIndex+lastIndex)/2;
        if(sortedArray[mid]>number){
          lastIndex = mid;
        }
        else if(sortedArray[mid]<number){
          firstIndex = mid;
        }
        else{
          return mid;
        }
      }
    }
    return -1;
  }
  public static int[] sort(int[] arr){
    for(int i=0; i<arr.length-1; i++) {
      for(int j=i+1; j<arr.length; j++) {
        if (arr[i]>arr[j]) {
          int extra = arr[i];
          arr[i] = arr[j];
          arr[j] = extra;
        }
      }
    }
    return arr;
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter the number of numbers in array:");
    int n = sc.nextInt();
    int[] arr = new int[n];
    for(int i=0 ;i<n; i++){ 
      System.out.println("Enter the number:");
      arr[i] = sc.nextInt();    
    }
    System.out.println("Enter the number you want to search for:");
    int number = sc.nextInt();
    arr = sort(arr);
    int index = binarySearch(arr,number);
    System.out.println("index = "+index);
  }
}