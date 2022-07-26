class CQueue {
    private int cQueueArray[];
    private int front = -1;
    private int rear = -1;

    public CQueue(int n){
        cQueueArray = new int[n];
    }

    public void cQInsert(int element){
        if(rear>=cQueueArray.length-1 && front==0){
            System.out.println("CQueue Overflow");
        }
        else{
            if(front-1==rear){
                System.out.println("CQueue Overflow");
            }
            else if(rear<cQueueArray.length-1){
                rear++;
                cQueueArray[rear] = element;
                if(front==-1){
                    front++;
                }
            }
            else{
                rear = 0;
                cQueueArray[rear] = element;
            }
            

        }
    }
    
    public int cQDelete(){
        if(front==rear){
            int extra = front;
            front = -1;
            rear = -1;
            return cQueueArray[extra];
        }
        else if(front<cQueueArray.length-1){
            front++;
            return cQueueArray[front-1];
        }
        else{
            front=0;
            return cQueueArray[cQueueArray.length-1];
        }
        
    }

    public void displayQueue(){
        if(rear>front){
            for(int i = front; i<rear+1; i++){
                System.out.print(cQueueArray[i]+" ");
            }
        }
        if(rear<front){
            for(int i = front;i<cQueueArray.length;i++){
                System.out.print(cQueueArray[i]+" ");
            }
            for(int i = 0;i<=rear;i++){
                System.out.print(cQueueArray[i]+" ");
            }
        }
    }
    
}

public class CQueueDemo{
    public static void main(String[] args) {
        CQueue q1 = new CQueue(6);
        q1.cQInsert(25);
        q1.cQInsert(26);
        q1.cQInsert(27);
        q1.cQInsert(52);
        q1.cQInsert(62);
        q1.cQInsert(72);
        q1.cQDelete();
        q1.cQInsert(81);
        q1.cQDelete();
        q1.cQDelete();
        q1.cQDelete();
        q1.cQInsert(89);
        q1.cQInsert(99);
        q1.cQInsert(109);
        q1.cQDelete();

        q1.displayQueue();
    }
}
