import java.util.Scanner;
class Stack{
    char[] operators;
    int top = -1;
    String operation = "";
    public Stack(int n){
        operators = new char[n/2];
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
            return 'n';
        }
        else{
            return operators[top];
        }
    }
    public char pop(){
        if(top<=-1){
            System.out.println("Stack Underflow");
            return (char)-1;
        }
        else{
            top--;
            return operators[top+1];
        }
    }
}

public class PostFixBasic {
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

            case 'n':
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
            if(str.charAt(i)=='+'||str.charAt(i)=='-'||str.charAt(i)=='*'||str.charAt(i)=='/'){
                if(checkPrecedence(str.charAt(i))<=checkPrecedence(s1.getTop())){
                    while(s1.getTop()!='n'){
                        postfixOperation += s1.pop();
                    }
                    s1.push(str.charAt(i));
                }
                else{
                    s1.push(str.charAt(i));
                }
            }
            else{
                postfixOperation += str.charAt(i);
            }
        }
        while(s1.getTop()!='n'){
            postfixOperation += s1.pop();
        }
        System.out.println(postfixOperation);
    }
    
}
