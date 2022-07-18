import java.util.Scanner;

class Stack{
    char[] a;
    public Stack(int n){
        a = new char[n];
    }
    private int top = -1;

    public void push(char ch){
        if(top>a.length-1){
            System.out.println("Stack Overflow");
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
        Scanner sc=new Scanner(System.in);
		System.out.println("Enter String = ");
		String str=sc.next();
		Stack s1=new Stack(str.length());
		int countB=-1;
		int length=str.length();
		for(int i=0;i<length;i++){
			char ch=str.charAt(i);
			if(ch=='a'){
				s1.push(ch);
			}
			else{
				countB++;
			}
		}
		// while(s1.top!=-1){
		// 	s1.pop();
		// 	countB--;
		// }
		if(countB==s1.getTop()){
			System.out.println("Valid String");
		}
		else{
			System.out.println("Not valid String");
		}
	}
}
