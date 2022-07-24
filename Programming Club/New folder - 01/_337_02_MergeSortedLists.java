import java.util.*;

public class _337_02_MergeSortedLists {
    public static void main(String[] args) {
        int[][] numbersIn2D = {
            {10, 20, 30, 40},
            {15, 25, 35, 45},
            {27, 29, 37, 48},
            {32, 33, 39, 50},
            {16, 18, 22, 28}
        };
        List<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < numbersIn2D.length; i++) {
            for (int j = 0; j < numbersIn2D[i].length; j++) { 
                list.add(numbersIn2D[i][j]); 
            }
        }
        int[] numbers = new int[list.size()];
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = list.get(i);
        }
        for(int i=0; i<numbers.length-1; i++) {
            for(int j=i+1; j<numbers.length; j++) {
                if (numbers[i]>numbers[j]) {
                    int extra = numbers[i];
                    numbers[i] = numbers[j];
                    numbers[j] = extra;

                }
            }
        }
        for(int i = 0; i<numbers.length;i++){
            System.out.print(numbers[i]+" ");
        }
    }
}
