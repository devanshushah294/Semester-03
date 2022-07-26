import java.util.Stack;
public class EvaluatePostfix{
	public static void main(String[] args) {
		String exp="54*";
		Stack<Integer> s=new Stack<>();
		for (int i=0;i<exp.length();i++){
			char c= exp.charAt(i);
			if (Character.isDigit(c)){
				s.push(c-'0');
			}
			else{
				int a=s.pop();
				int b=s.pop();
					switch (c){
					case '+':
						s.push(a+b);
						break;
					case '-':
						s.push(a-b);
						break;
					case '*':
						s.push(a*b);
						break;
					case '/':
						s.push(a/b);
						break;			
					}
			}
		}
		System.out.println(s.pop());
	}
}