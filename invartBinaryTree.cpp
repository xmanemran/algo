// Method 1
// Time O(n) | space = 0(d) / O(Log n)
void Bst::invartHelper(Node* rootNode, Node*& newHead){
    if(rootNode != NULL){
        newHead = new Node(rootNode->data);
        invartHelper(rootNode->right, newHead->left);
        invartHelper(rootNode->left, newHead->right);
    }
}
