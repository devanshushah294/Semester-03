public class _326_InversionsInSortingArray {
    public static void main(String[] args) {
        int inversions = 0;
        int[] numbers = {1, 9, 6, 4, 5};
        int lastInversions = 0;
        String inversionString = "";
        do {
            lastInversions=inversions;
            for(int i = 0;i<numbers.length-1;i++){
                if(numbers[i]>numbers[i+1]){
                    inversionString += "("+numbers[i]+","+numbers[i+1]+"), "; 
                    int extra = numbers[i];
                    numbers[i] = numbers[i+1];
                    numbers[i+1] = extra;
                    inversions++;
                     
                }
            }
        } while(inversions>lastInversions);

        // not getting perfect answers using for loop
        // for(int i=0; i<numbers.length-1; i++) {
        //     for(int j=i+1; j<numbers.length; j++) {
        //         if (numbers[i]>numbers[j]) {
        //             inversionString += "("+numbers[i]+","+numbers[j]+"), ";
        //             int extra = numbers[i];
        //             numbers[i] = numbers[j];
        //             numbers[j] = extra;
        //             inversions++;
        //         }
        //     }
        // } 
        for(int i = 0; i<numbers.length; i++) {
            System.out.print(numbers[i]+"  ");
        }
        System.out.println("");
        System.out.println("the number of inversions are "+inversions);
        System.out.print("There are "+inversions+" inversions in the array: ");
        System.out.println(inversionString.substring(0, inversionString.length()-2));
    }   
}