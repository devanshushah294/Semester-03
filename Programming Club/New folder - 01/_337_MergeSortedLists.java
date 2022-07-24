class CustomIntStack {
    private int[] numbers;
    private int top = -1;    
    public CustomIntStack(int n){
        numbers = new int[n];
    }
    public void push(int n) {
        if(top==numbers.length-1) {
            System.out.println("Sorry! Stack overflow");
        }
        else {
            top++;
            numbers[top]=n;
        }
    }
    public int pop() {
        if(top==-1) {
            return top;
        }
        else {
            top--;
            return numbers[top+1];
        }
    }
    public int getTop(){
        if(top==-1) {
            
            return top;
        }
        else {
            return numbers[top];            
        }
    }
    public void printCustomIntStack(){
        for(int i = 0; i<top+1;i++){
            System.out.print(numbers[i]+" ");
        }
    }
}
public class _337_MergeSortedLists {
    public static void main(String[] args) {
        int[][] list = {
            {10, 20, 30, 40},
            {15, 25, 35, 45},
            {27, 29, 37, 48},
            {32, 33, 39, 50},
            {16, 18, 22, 28}
        };
        int totalNumberOfElements = 0;
        CustomIntStack s0 = new CustomIntStack(list[0].length);
        CustomIntStack s1 = new CustomIntStack(list[1].length);
        CustomIntStack s2 = new CustomIntStack(list[2].length);
        CustomIntStack s3 = new CustomIntStack(list[3].length);
        CustomIntStack s4 = new CustomIntStack(list[4].length);

        for(int i = 0; i<list[0].length; i++) {
            s0.push(list[0][i]);
        }
        for(int i = 0; i<list[1].length; i++) {
            s1.push(list[1][i]);
        }
        for(int i = 0; i<list[2].length; i++) {
            s2.push(list[2][i]);
        }
        for(int i = 0; i<list[3].length; i++) {
            s3.push(list[3][i]);
        }
        for(int i = 0; i<list[4].length; i++) {
            s4.push(list[4][i]);
        }
        for(int i = 0; i<list.length; i++) {
            for(int j=0; j<list[i].length; j++) {
                totalNumberOfElements++;
            }
        }
        CustomIntStack finalStack = new CustomIntStack(totalNumberOfElements);
        while(s0.getTop()!=-1 || s1.getTop()!=-1 || s2.getTop()!=-1 || s3.getTop()!=-1 || s4.getTop()!=-1){
            if(s0.getTop()>s1.getTop()) {
                if(s0.getTop()>s2.getTop()) {
                    if(s0.getTop()>s3.getTop()) {
                        if(s0.getTop()>s4.getTop()) {
                            finalStack.push(s0.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }
                    else{
                        if(s3.getTop()>s4.getTop()) {
                            finalStack.push(s3.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }
                }
                else {
                    if(s2.getTop()>s3.getTop()) {
                        if(s2.getTop()>s4.getTop()) {
                            finalStack.push(s2.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }
                    else{
                        if(s3.getTop()>s4.getTop()) {
                            finalStack.push(s3.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }    
                }
            }
            else {
                if(s1.getTop()>s2.getTop()) {
                    if(s1.getTop()>s3.getTop()) {
                        if(s1.getTop()>s4.getTop()) {
                            finalStack.push(s1.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }
                    else{
                        if(s3.getTop()>s4.getTop()) {
                            finalStack.push(s3.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }
                }
                else {
                    if(s2.getTop()>s3.getTop()) {
                        if(s2.getTop()>s4.getTop()) {
                            finalStack.push(s2.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }
                    else{
                        if(s3.getTop()>s4.getTop()) {
                            finalStack.push(s3.pop());
                        }
                        else {
                            finalStack.push(s4.pop());
                        }
                    }    
                }
            }
        }
        finalStack.printCustomIntStack();
    }
}