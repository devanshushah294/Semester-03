import java.util.Scanner;

class Matrix{
    Scanner sc2 = new Scanner(System.in);
    int i;
    int j;
    public Matrix(int i,int j){
        this.i = i;
        this.j = j;
    }
    public void printElements(){
        for(int m = 0; m<i;m++){
            for(int n = 0; n<j;n++){
                System.out.print(matrixValues[m][n]+"       ");
            }
            System.out.println("");
        }
    }

    public Matrix(){
        System.out.println("Enter the number of rows : ");
        this.i = sc2.nextInt();
        System.out.println("Enter the number of columns : ");
        this.j = sc2.nextInt();
    }

    int[][] matrixValues = new int[i][j];
    // for(int m = 0 ; m<i ; m++){
        // for(int n = 0 ; n<j ; n++){
            // matrixValues[m][n] = 0;
        // }
    // }    
    public void setElementsValues(){
        for(int m = 0;m<this.i;m++){
            for(int n = 0; n<this.j ; j++){
                System.out.println("Enter the number["+(m+1)+"]["+(n+1)+"]");
                matrixValues[m][n] = sc2.nextInt();
            }
        }
    }

    public Matrix multiplyMatrix(Matrix gMatrix){
        Matrix aMatrix = new Matrix(this.i,gMatrix.j);
        if(gMatrix.i != this.j){
            System.out.println("your matrix can't be multiplied.The Answer you may get will be wrong");
        }
        else{
            for(int m = 0;m<aMatrix.i;m++){
                for(int n = 0;n<aMatrix.j;n++){
                    for(int x = this.j;x>0;x--){
                        for(int y = this.j;y>0;y--){
                            aMatrix.matrixValues[m][n] += this.matrixValues[x][y]*gMatrix.matrixValues[y][x]; 
                        }
                    }
                }
            }
        }
        return aMatrix;
    }
}

public class MatrixMultiplication {
    public static void main(String[] args) {
        Matrix m1 = new Matrix();
        m1.setElementsValues();
        Matrix m2 = new Matrix();
        m2.setElementsValues();
        Matrix m3 = m1.multiplyMatrix(m2);
        m3.printElements();
    }
}
