// . Implement Simple Queue using array that performs following operations: INSERT, DELETE, DISPLAY
class Queue {
    private int queueArray[];
    private int front = -1;
    private int rear = -1;

    public Queue(int n){
        queueArray = new int[n];
    }

    public void enQueue(int element){
        if(rear>=queueArray.length-1){
            System.out.println("Queue Overflow");
        }
        else{
            rear++;
            queueArray[rear] = element;
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
            return queueArray[front-1];
        }
    }

    public void displayQueue(){
        for(int i = front; i<rear+1; i++){
            System.out.print(queueArray[i]+" ");
        }
    }
    
}

public class QueueDemo{
    public static void main(String[] args) {
        Queue q1 = new Queue(6);
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

