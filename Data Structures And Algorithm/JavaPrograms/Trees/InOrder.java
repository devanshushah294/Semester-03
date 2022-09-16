import java.util.Stack;


class Node{

    Node left;
    Node right;
    int info;
    Node(int info){
        this.left=null;
        this.right=null;
        this.info=info;
    }
}

class Tree{
    Node root;
    public void insert(int a){
        Node nnode=new Node(a);
        if(root==null){
            root=nnode;
        }
        else{
        Node temp=root;
        while(temp.left!=null || temp.right!=null){
            if(nnode.info>=temp.info && temp.right != null ){
                temp=temp.right;
            }
            else if(nnode.info<=temp.info && temp.left!=null){
                temp=temp.left;
            }
            else{
                break;
            }
        }
        if(nnode.info>=temp.info){
            temp.right=nnode;
        }
        else{
            temp.left=nnode;
        }
    }
    }
    public void postOrder(){
        Stack<Node> stack1 = new Stack<>();
        Stack<Node> stack2 = new Stack<>();
        stack1.push(root);
        while(stack1.size()>0){
          Node temp = stack1.pop();
          stack2.push(temp);
          if(temp.right!=null) {
            stack1.push(temp.right);
          }
          if(temp.left!=null) {
            stack1.push(temp.left);
          }
        }
        while(stack2.size()>0) {
          System.out.print(stack2.pop().info+" ");
        }
      } 

    public void inOrder(){
        Node temp=root;
        Stack <Node> st=new Stack <Node>();

        if(root==null){
            System.out.println("tree is empty ");
        }
        while(temp!=null || !st.empty()){
            while(temp!=null){
                st.push(temp);
                temp=temp.left;
            }
            temp= st.pop();
            System.out.print(temp.info+"  ");
            temp=temp.right;
        }
    }

    public void preOrder(){
        if(root==null){
            System.out.println("stack empty");
            return;
        }
        Stack<Node> st=new Stack<>();
        st.push(root);
        while(st.size()>0){
            Node t = st.pop();
            System.out.print(t.info+"  ");
            if(t.right!=null){//8  4  2  1  3  5  6  7  9
                st.push(t.right);
            }
            if(t.left!=null){
                st.push(t.left);
            }
        }
    }
    public void deleteLeafNode(int n) {
        Node parent = null;
        Node temp = root;
        while(temp!=null && temp.info!=n) {
            parent =temp;
          if(n<temp.info) {
            temp = temp.left;
          }
          else if(n>temp.info) {
            temp = temp.right;
          }
        }
        
    }
}

public class InOrder{

    public static void main(String[] args) {
        Tree tree=new Tree();
        tree.insert(6);
        tree.insert(5);
        tree.insert(10);
        tree.insert(7);
        tree.insert(9);
        tree.insert(1);
        tree.insert(3);
        tree.insert(2);
        tree.insert(8);
        tree.preOrder();
        System.out.print("InOrder :");
        tree.inOrder();
        System.out.println();
        System.out.print("preOrder :");
        tree.preOrder();
        System.out.print("\nPostOrder :");
        tree.postOrder();
        tree.deleteLeafNode(5);
        System.out.print("\nPostOrder :");
        tree.postOrder();
    }
}