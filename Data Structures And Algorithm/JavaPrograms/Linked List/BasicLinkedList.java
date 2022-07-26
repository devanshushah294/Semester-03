class LinkedList {
    Node head;
    class Node {
        int number;
		Node next;
        public Node(int n){
            this.number = n;
			this.next = null;
        }
        public Node getNext() {
            return next;
        }
        public int getNumber() {
            return number;
        }
    }
    public int getHeadNumber(){
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
}
public class BasicLinkedList{
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.insertNumberFromFirst(25);
        ll.insertNumberFromLast(36);
        ll.insertNumberFromLast(96);
        ll.printLL();
    }
}

    