public class NumbersSort{
    public static void main(String[] args){
        int[] array = {1,1,1,2,3,4};
        boolean b1 = false;
        if(array[0]==array[1]&&array[1]==array[2]){
            for(int i = 2;i<array.length-1;i++){
                if(array[i]<=array[i+1]){
                    b1 = true;
                }else{
                    b1 = false;
                    break;
                }
            }
        }else{
            b1 = false;
        }
        if(b1){
            System.out.println("1");
        }else{
            System.out.println("0");
        }
    }
}
