class CQueue {
    private int CQueueArray[];
    private int front = -1;
    private int rear = -1;

    public CQueue(int n){
        cQueueArray = new int[n];
    }

    public void enQueue(int element){
        if(rear>=cQueueArray.length-1){
            System.out.println("CQueue Overflow");
        }
        else{
            rear++;
            cQueueArray[rear] = element;
            if(front == -1){
                front++;
            }
        }
    }
    
    public int deQueue(){
        if(front>rear){
            System.out.println("Stack UnderFlow");
            return -1;
        }
        else{
            front++;
            return cQueueArray[front-1];
        }
    }

    public void displayQueue(){
        for(int i = front; i<rear+1; i++){
            System.out.print(cQueueArray[i]+" ");
        }
    }
    
}

public class CQueueDemo{
    public static void main(String[] args) {
        CQueue q1 = new CQueue(6);
        q1.enQueue(25);
        q1.enQueue(82);
        q1.enQueue(24);
        q1.enQueue(42);
        q1.enQueue(5);
        q1.enQueue(2);
        q1.deQueue();
        q1.enQueue(25);
        q1.displayQueue();
    }
}
