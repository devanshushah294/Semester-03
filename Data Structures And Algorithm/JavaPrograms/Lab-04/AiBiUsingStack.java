import java.util.Scanner;

class Stack{
    char[] a = new char[100];
    private int top = -1;

    public void push(char ch){
        if(top>99){
            System.out.println("Stack Underflow");
            return;
        }
        else{
            top++;
            a[top] = ch;
        }
    }

    public void pop(){
        if(top==-1){
        System.out.println("Stack Underflow");
        return;
        }
        else{
            top--;
        }
    }
    public int getTop(){
        return top;
    }
}
public class AiBiUsingStack {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        for(int i = 0;i<str.length();i++){
            
        }
    }
    
}
