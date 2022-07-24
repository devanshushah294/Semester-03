import java.util.Scanner;
class Stack{
    Scanner sc = new Scanner(System.in);
    int[] Stack;
    int top = -1;

    public Stack(){
        System.out.println("Enter the size of Stack:");
        int n = sc.nextInt();
        Stack = new int[n];
    }
    public void push(int n){
        if(top>Stack.length){
            System.out.println("Sorry! you cant enter the number");
        }
        else{
            top++;
            Stack[top] = n;
        }
    }
    public void push(){
        if(top>Stack.length){
            System.out.println("Sorry! you cant enter the number");
        }else{
            System.out.println("Enter the number you want to store int Stack :");
            int m = sc.nextInt();
            top++;
            Stack[top] = m;
        }
        System.out.println("The value of top is : "+top);
    }
    public int pop(){
        if(top<0){
            System.out.println("Sorry! no element to remove");
            return 1;
        }else{
            top--;
            return Stack[top+1];
        }
    }

    public void displayStack(){
        for(int i = 0;i<top;i++){
            System.out.println("the number at index "+i+"is"+Stack[i]);
        }
        System.out.println("The value of top is : "+top);
    }

    public void change(int n, int number){
        if(top-n+1<=top && top-n+1>-1){
            Stack[top-n+1] = number;
            System.out.println("the number has being changed");
        }else{
            System.out.println("Enter the correct index:");
        }
    }
    public int peep(){
        if(top == -1){
            System.out.println("The Stack is empty");
            return top;
        }else{
            return Stack[top];
        }
    }
}
public class StackDemo {
    public static void main(String[] args) {
        Stack stk1 = new Stack();
        stk1.push();
        int n = stk1.pop();
        stk1.peep();

    }

}