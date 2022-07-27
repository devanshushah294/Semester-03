class Node {
    int number;
    Node next;
    public Node(int n){
        this.number = n;
        this.next = null;
    }
}
class LinkedList {
    Node head;
    public int getHeadNumber(){
        if(head == null){
            return -1;
        }
        return head.number;
    }
    public void insertNumberFromFirst(int number){
        Node newNode = new Node(number); 
        newNode.next = head;
        head = newNode;
    }

    public void insertNumberFromLast(int number){
        Node newNode = new Node(number);
        if(head == null){
            head = newNode;
            return;
        }
        Node currentNode = head;
        while(currentNode.next != null){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;

    }

    public void printLL(){
        if(head == null) {
            System.out.println("List is Empty");
            return;
        }
        Node currentNode = head;
        while (currentNode != null){
            System.out.print(currentNode.number+"->");
            currentNode = currentNode.next;
        }
        System.out.println("NULL");
    }

    public Node deleteFromFront(int indexFromFront){
        if(head == null){
            return head;
        }
        Node currentNode = head;
        for(int i = 1; i<indexFromFront-1; i++){
            currentNode = currentNode.next;
        }
        Node returnNode = currentNode.next; 
        if(returnNode == head){
            head = head.next;
        }
        else{
            currentNode.next=currentNode.next.next;
        }
        return returnNode;
    }

    public Node deleteLastElement(){
        if(head == null){
            return head;
        }
        Node currentNode = head;
        while(currentNode.next.next!=null){
            currentNode = currentNode.next;
        }
        Node returnNode = currentNode.next;
        if(returnNode == head){
            head = null;
        }
        else{
            currentNode.next = currentNode.next.next;
        } 
        return returnNode;
    }
}
public class LinkedListBySaperateClass{
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.insertNumberFromLast(1);
        ll.insertNumberFromLast(2);
        ll.insertNumberFromLast(3);
        ll.insertNumberFromLast(4);
        ll.insertNumberFromLast(5);
        ll.insertNumberFromLast(6);
        ll.insertNumberFromLast(9);
        ll.insertNumberFromLast(7);
        ll.insertNumberFromLast(8);
        ll.printLL();
        ll.insertNumberFromLast(ll.deleteFromFront(7).number);
        ll.insertNumberFromFirst(0);
        ll.deleteLastElement();
        ll.deleteLastElement();
        ll.printLL();

    }
}