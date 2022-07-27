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
        if(head.next==null){
            head=null;
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

class Stack {
    LinkedList ll = new LinkedList();
    Node top;
    public void push(int n){
        ll.insertNumberFromLast(n);
    }
    public void pop(){
        ll.deleteLastElement();
    }
    public void displayStack(){
        ll.printLL();
    }

}
public class StackUsingLinkedList{
    public static void main(String[] args) {
        Stack stk = new Stack();
        stk.push(25);
        // stk.push(36);
        // stk.push(85);
        stk.pop();
        stk.displayStack();
    }
}