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

public class PreFix {
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
    public static String postfix(String str){
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
        return postfixOperation;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the operation you want to convert in PostFix");
        String str2 = sc.next();
        StringBuffer str1 = new StringBuffer(str2);
        str1.reverse();
        String str = str1.toString();
        System.out.println("reversed string = "+ str);
        for(int i = 0; i<str.length();i++){
            if(str.charAt(i)=='('){
                str = str.substring(0,i)+')'+str.substring(i+1);
            }
            else if(str.charAt(i)==')'){
                str = str.substring(0,i)+'('+str.substring(i+1);
            }
        }
        System.out.println(str);
        String postfixExpression = postfix(str);
        System.out.println("this  "+postfixExpression);
        str1 = new StringBuffer(postfixExpression);
        System.out.println("this 2  "+str1);
        postfixExpression = (str1.reverse()).toString();
        System.out.println(postfixExpression);
    }
}