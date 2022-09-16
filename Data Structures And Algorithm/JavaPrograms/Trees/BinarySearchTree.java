import java.util.Stack;

class Node {
  int info;
  Node left,right;
  public Node(int info) {
    this.info = info;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  Node root;
  public void insert(int n) {
    Node newNode = new Node(n);
    if(root==null) {
      root = newNode;
      return;
    }
    Node pred = null;
    Node temp = root;
    while(temp != null) {
      pred = temp;
      if(temp.info>newNode.info) {
        temp = temp.left;
      }
      else if(temp.info<=newNode.info) {
        temp = temp.right;
      }
      else {
        return;
      }
    }
    if(pred.info>newNode.info){
      pred.left = newNode;
    }
    else{
      pred.right = newNode;
    }  
  }

  public void inOrder() {
    if(root==null) {
      System.out.println("tree is empty");
      return;
    }
    Node temp = root;
    Stack<Node> st = new Stack<Node>();
    while(temp!=null||!st.empty()){
      while(temp!=null) {
        st.push(temp);
        temp = temp.left;
      }
      temp = st.pop();
      System.out.print(temp.info+" ");
      temp = temp.right;
    }
  }

  // public void postOrder(){
  //   Stack<Node> stack1 = new Stack<>();
  //   Stack<Node> stack2 = new Stack<>();
  //   stack1.push(root);
  //   while(stack1.size()>0){
  //     Node temp = stack1.pop();
  //     stack2.push(temp);
  //     if(temp.right!=null) {
  //       stack1.push(temp.right);
  //     }
  //     if(temp.left!=null) {
  //       stack1.push(temp.left);
  //     }
  //   }
  //   while(stack2.size()>0) {
  //     System.out.print(stack2.pop().info+",");
  //   }
  // }
  public void postOrder() {
    if(root==null) {
      System.out.println("tree is empty");
      return;
    }
    Stack<Node> st1 = new Stack<Node>(); 
    Stack<Node> st2 = new Stack<Node>();
    Node temp = root;
    st1.push(temp);
    while(!st1.empty()) {
      temp=temp.left;
      if(temp!=null) {
        st1.push(temp);
      }
      temp = st1.pop();
    }
  }

  public void preOrder() {
    if(root==null) {
      System.out.println("Tree is empty");
      return;
    }
    Node temp = root;
    Stack<Node> st = new Stack<Node>();
    st.push(temp);
    while(!st.empty()) {
      temp = st.pop();
      System.out.print(temp.info+" ");
      if(temp.right!=null){
        st.push(temp.right);
      }
      if(temp.left!=null){
        st.push(temp.left);
      }
    }
    
  }
  // public void deleteNode(int n) {
  //   Node parent = null;
  //   Node temp = root;
  //   if(temp.info == n) {
  //     temp = null;
  //     return;
  //   }
  //   while(temp!=null && temp.info==n) {
  //     if(n<temp.info) {
  //       temp = temp.left;
  //     }
  //     else if(n>temp.info) {
  //       temp = temp.right;
  //     }
  //   }
  //   if(parent.right.info==n) {
  //     parent.right = null;
  //   }
  //   else{
  //     parent.left = null;
  //   }
  // }
}
public class BinarySearchTree{
  public static void main(String[] args) {
    Tree tree = new Tree();
    tree.insert(6);
    tree.insert(5);
    tree.insert(10);
    tree.insert(7);
    tree.insert(9);
    tree.insert(1);
    tree.insert(3);
    tree.insert(2);
    tree.insert(8);
    tree.postOrder();
  }
}