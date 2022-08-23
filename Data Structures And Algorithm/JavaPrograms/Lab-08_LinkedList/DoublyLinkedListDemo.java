import java.util.Scanner;

class DoublyLinkedList {
    class Node {
        Node prev;
        int data;
        Node next;
        public Node(int data){
            this.data = data;
            this.prev = null;
            this.next = null;
        }
    }
    Node head;
    public void deleteFromLast() {
        if(head == null) {
            System.out.println("The list is empty");
            return;
        }
        else if(head.next == null){
            head = null;
            return;
        }
        Node currentNode = head;
        while(currentNode.next != null) {
            currentNode = currentNode.next;
        }
        currentNode.prev.next = null;
    }
    public void deleteFromFirst() {
        if(head == null){
            System.out.println("The list is empty");
            return;
        }
        else if(head.next == null){
            head = null;
            return;
        }
        head = head.next;
        head.prev = null;
    }
    public void insertFromFirst(int number) {
        Node newNode = new Node(number);
        if(head == null){
            head = newNode;
            return;
        }
        head.prev = newNode;
        newNode.next = head;
        head = newNode;
    }
    public void insertFromLast(int number){
        Node newNode = new Node(number);
        if(head == null){
            head = newNode;
            return;
        }
        Node currentNode = head;
        while(currentNode.next!=null) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        newNode.prev = currentNode;
    }
    public void printLL(){
        if(head == null) {
            System.out.println("List is Empty");
            return;
        }
        System.out.print("NULL<->");
        Node currentNode = head;
        while (currentNode != null){
            System.out.print(currentNode.data+"<->");
            currentNode = currentNode.next;
        }
        System.out.println("NULL");
    }
}

public class DoublyLinkedListDemo{
    public static void main(String[] args) {
        Scanner  sc = new Scanner(System.in);
        DoublyLinkedList ll = new DoublyLinkedList();
        ll.insertFromLast(25);
        ll.insertFromLast(36);
        ll.insertFromFirst(85);
        ll.printLL();
        ll.deleteFromLast();
        ll.deleteFromLast();
        ll.deleteFromLast();
        ll.printLL();
    }
}