// Write a program to determine if an input character string is of the form aib i where i >= 1 i.e. Number of ‘a’ should be equal to number of ‘b’. (Home Work)
import java.util.Scanner;
public class AiBi {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the string 1:");
        String str = sc.nextLine();
        int numberOfA = 0;
        int numberOfB = 0;
        String str2 = str.toLowerCase();
        for(int i = 0;i<str.length();i++){
            if(str.charAt(i)!='a'&&str.charAt(i)!='b'){
                continue;
            }
            else if(str.charAt(i)=='a'){
                numberOfA++;
            }
            else{
                numberOfB++;
            }
        }
        if(numberOfA == numberOfB){
            System.out.println(str+" is in AiB form");
        }
        else{
            System.out.println(str+" is not in AiB form");
        }
    }
}
