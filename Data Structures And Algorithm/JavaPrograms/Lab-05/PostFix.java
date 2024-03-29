import java.util.Scanner;
class Stack{
    char[] operators;
    int top = -1;
    public Stack(int n){
        operators = new char[n];
    }
    public void push(char opr){
        if(top>=operators.length){
            System.out.println("Stack overflow");
        }
        else{
            top++;
            operators[top] = opr;            
        }
    }
    public char getTop(){
        if(top==-1){
            return 'a';
        }
        else{
            return operators[top];
        }
    }
    public char pop(){
        if(top<=-1){
            System.out.println("Stack Underflow");
            return 'a';
        }
        else{
            return operators[top--];
        }
    }
}

public class PostFix {
    public static int checkPrecedence(char operator){
        int operatorPrecedence = 0;    
        switch(operator){
            case'+':
            operatorPrecedence = 2;
            break;
            
            case'-':
            operatorPrecedence = 2;
            break;
    
            case'*':
            operatorPrecedence = 4;
            break;
    
            case'/':
            operatorPrecedence = 4;
            break;

            case 'a':
            operatorPrecedence = 0;
        }
        return operatorPrecedence;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the operation you want to convert in PostFix");
        String str = sc.next();
        String postfixOperation = "";
        Stack s1 = new Stack(str.length());
        for(int i = 0; i<str.length(); i++){
            char ch=str.charAt(i);
            if(Character.isLetter(ch)){
                postfixOperation+=ch;
            }
            else if(ch=='('){
                s1.push(ch);
            }
            else if(ch==')'){
                while(s1.getTop()!='(' && s1.top!=-1){

                    postfixOperation+=s1.pop();
                }
                s1.pop();
            }
            else{
                if(checkPrecedence(ch)<=checkPrecedence(s1.getTop())){
                    postfixOperation+=s1.pop();
                }
                s1.push(ch);
            }
        }
        while(s1.top!=-1){
            postfixOperation+=s1.pop();
        }
        System.out.println(postfixOperation);
    }
}