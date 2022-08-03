class LinkedList{
    Node head,last;
    class Node{
        int data;
        Node next;
        public Node(int data){
            this.data = data;
            this.next = null;
        }
    }
    public void insertFromLast(int n){
        Node newNode = new Node(n);
        if(head == null){
            head = newNode;
            last =newNode;
            return;
        }
        else{
            last.next=newNode;
            last=last.next;
        }

    }
    public void deleteFromLast(){
        if(head == null){
            System.out.println("List is Empty");
            return;
        }
        else{
            if(head.next==null){
                head=null;
                return;
            }
            Node currentNode = head;
            while(currentNode.next!= last){
                currentNode = currentNode.next;
            }
            currentNode.next = null;
            last = currentNode;
        }
    }
    public void printLL(){
        if(head == null) {
            System.out.println("List is Empty");
            return;
        }
        Node currentNode = head;
        while (currentNode != null){
            System.out.print(currentNode.data+"->");
            currentNode = currentNode.next;
        }
        System.out.println("NULL");
    }
}
public class StackUsingLinkedList{
    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.insertFromLast(25);
        ll.insertFromLast(26);
        ll.deleteFromLast();
       // ll.deleteFromLast();
        ll.printLL();
    }
}