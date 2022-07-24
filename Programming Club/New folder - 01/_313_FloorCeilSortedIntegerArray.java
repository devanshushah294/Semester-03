import java.util.Scanner;
public class _313_FloorCeilSortedIntegerArray{
    public static int getFloor(int[] floorCeilSet, int n) {
        int floor = -1;
        for(int i = floorCeilSet.length-1; i>=0; i--){
            if(n>=floorCeilSet[i]){
                floor = floorCeilSet[i];
                break;
            }
        }
        return floor;
    }
    public static int getCeil(int[] floorCeilSet,int n) {
        int ceil = -1;
        for(int i = 0; i<floorCeilSet.length; i++){
            if(n<=floorCeilSet[i]){
                ceil = floorCeilSet[i];
                break;
            }
        }
        return ceil;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int floorCeilSet[] = {1,4,6,8,9};
        System.out.println("Enter the initial number:");
        int initialNumber = sc.nextInt();
        System.out.println("Enter the final number:");
        int finalNumber = sc.nextInt();
        for(int i=initialNumber;i<finalNumber+1;i++){
            int floor = getFloor(floorCeilSet, i);
            int ceil = getCeil(floorCeilSet, i);
            System.out.println("Number "+i+" --> ceil is "+ceil+", floor is "+floor);
        }
        sc.close();
    }
}