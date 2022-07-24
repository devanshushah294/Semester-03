import java.util.Scanner;

import javax.xml.stream.XMLOutputFactory;

public class _403_GridAndPhrase{
    public static boolean checkLetter(char input,char check){
        if(input == check){
            return true;
        }
        else{
            return false;
        }
    }
    public static boolean checkEqualWord(String str1, String str2){
        if(str1.equals(str2)){
            return true;
        }
        else{
            return false;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the number of words you want to enter:");
        int numberOfWords = sc.nextInt();
        String[] words = new String[numberOfWords];
        System.out.println("Enter the word to check :");
        String wordToCheck = sc.next();
        String temp = "";
        int finalWords = 0;
        for(int i = 0; i<numberOfWords; i++) {
            System.out.println("Enter the word "+i+":");
            words[i] = scan.next();
        }
        char[][] wordsArray = new char[numberOfWords][words[1].length()];
        for(int i = 0; i<numberOfWords;i++){
            for(int j = 0; j<words[1].length();j++){
                wordsArray[i][j] = words[i].charAt(j);
            }
        }
        
        for(int i = 0; i<numberOfWords;i++) {
            for(int j = 0; j<words[1].length();j++) {
                if(checkLetter(wordsArray[i][j], wordToCheck.charAt(0))) {
                    try{
                        if(checkLetter(wordsArray[i-1][j-1], wordToCheck.charAt(1))){
                            for(int l=i,m=j,n=0;l>-1&&m>-1&&n<wordToCheck.length();l--,m--,n++){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }
                    try{
                        if(checkLetter(wordsArray[i-1][j], wordToCheck.charAt(1))){
                            for(int l=i,m=j,n=0;l>-1&&n<wordToCheck.length();l--,n++){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }
                    try{
                        if(checkLetter(wordsArray[i-1][j+1], wordToCheck.charAt(1))){
                            for(int l=i,m=j,n=0;l>-1&&m<words[1].length()&&n<wordToCheck.length();l--,m++,n++){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                finalWords++;
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }
                    try{
                        if(checkLetter(wordsArray[i][j-1], wordToCheck.charAt(1))){
                            for(int l=i,m=j,n=0;m>-1&&n<wordToCheck.length();m--,n++){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }
                    try{
                        if(checkLetter(wordsArray[i][j+1], wordToCheck.charAt(1))){
                            for(int l=i,m=j,n=0;m<words[1].length() && n<wordToCheck.length();m++,n++){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                finalWords++;
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }
                    try{
                        if(checkLetter(wordsArray[i+1][j-1], wordToCheck.charAt(1))) {
                            for(int l=i, m=j, n=0 ; l<numberOfWords && m>-1 && n<wordToCheck.length() ; l++, m--, n++ ){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }
                    try{
                        if(checkLetter(wordsArray[i+1][j], wordToCheck.charAt(1))){
                            for(int l=i, m=j, n=0 ; l<numberOfWords && n<wordToCheck.length() ; l++, n++ ){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                finalWords++;
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }
                    try{
                        if(checkLetter(wordsArray[i+1][j+1], wordToCheck.charAt(1))){
                            for(int l=i, m=j, n=0 ; l<numberOfWords && m<words[1].length() && n<wordToCheck.length() ; l++, m++, n++ ){
                                temp += wordsArray[l][m];
                            }
                            if(checkEqualWord(temp,wordToCheck)){
                                finalWords++;
                                temp = "";
                            }    
                        }
                    }catch(Exception e){
                        temp = "";
                    }   
                }
            }
        }
        System.out.println(finalWords);
        sc.close();
        scan.close();
    }
}