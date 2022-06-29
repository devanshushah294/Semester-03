import java.util.Scanner;
class Stack{
    Scanner sc = new Scanner(System.in);
    int[] stack;
    int top = -1;

    public Stack(){
        System.out.println("Enter the size of Stack:");
        int n = sc.nextInt();
        stack = new int[n];
    }

    public void push(){
        if(top>stack.length){
            System.out.println("Sorry! you cant enter the number");
        }else{
            System.out.println("Enter the number you want to store int stack :");
            int m = sc.nextInt();
            top++;
            stack[top] = m;
        }
        System.out.println("The value of top is : "+top);
    }
    public void pop(){
        if(top<0){
            System.out.println("Sorry! no element to remove");
        }else{
            top--;
        }
        System.out.println("The value of top is : "+top);
    }

    public void displayStack(){
        for(int i = 0;i<top;i++){
            System.out.println("the number at index "+i+"is"+stack[i]);
        }
        System.out.println("The value of top is : "+top);
    }

    public int peek(){
        if(top == -1){
            System.out.println("The stack is empty");
            return top;
        }else{
            return stack[top];
        }
    }
}
public class StackDemo {
    public static void main(String[] args) {
        Stack stk1 = new Stack();
        stk1.push();
        stk1.pop();
        stk1.peek();

    }

}