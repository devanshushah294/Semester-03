import java.util.Stack;
public class EvaluatePrefix{
	public static void main(String[] args) {
		String str="-32";
		Stack<Integer> s=new Stack<>();
			for (int i=0;i<str.length();i++){
				char c=str.charAt(i);
				s.push(c-'0');
			 }
			for (int i=0;i<str.length()-2;i++) {
				int val2=s.pop();
				int val1=s.pop();
				int opp=s.pop();
				switch (opp){
				case -6:
					s.push(val1*val2);
				break;
				case -5:
					s.push(val1+val2);
				break;
				case -3:
					s.push(val1-val2);
				break;
				case -1:
					s.push(val1/val2);
				break;
				}
			}
			System.out.println(s.pop());
	}
}