class LinkedList {
    public static class Node {
        int number;
		Node next;
		public Node(int n){
            this.number = n;
			this.next = null;
		}
	}
    static Node head;

	public void insert(int number){
		Node newNode = new Node(number);
		if (head == null) {
			head = newNode;
		}
        else{
            newNode.next = head;
            head = newNode;
        }
	}

	public static void printList() {
		Node currentNode = head;
		System.out.print("LinkedList: ");
		while(currentNode != null) {
			System.out.print(currentNode.number+" ");
			currentNode = currentNode.next;
		}
	}
}

public class BasicLinkedList{
    public static void main(String[] args){
        LinkedList list = new LinkedList();
        LinkedList.Node newlist = list.new Node(1);
        list.insert(2);
        list.insert(3);
        list.insert(4);
        list.insert(5);
        list.insert(6);
        list.insert(7);
        list.insert(8);
        list.printList();
    }
}

