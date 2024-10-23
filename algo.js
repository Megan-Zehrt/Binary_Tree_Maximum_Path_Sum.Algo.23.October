// 124. Binary Tree Maximum Path Sum



// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.





/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    // Initialize sum to the smallest possible number
    let maxSum = -Infinity;

    // Define the dfs function to compute max path sums
    function dfs(node) {
        // Base case: if the node is null, return 0
        if (node == null) return 0;

        // Recursively calculate the max path sum of left and right subtrees
        let left = dfs(node.left);
        let right = dfs(node.right);

        // Calculate the max path through the current node
        // Only consider positive contributions
        let temp1 = Math.max(left, 0);
        let temp2 = Math.max(right, 0);
        
        // Calculate the maximum path sum including the current node and both children
        let currentMax = node.val + temp1 + temp2;
        
        // Update the global maximum path sum
        maxSum = Math.max(maxSum, currentMax);

        // Return the maximum path sum that can be extended to the parent
        return node.val + Math.max(temp1, temp2);
    }

    // Start the DFS from the root
    dfs(root);

    // Return the overall maximum path sum found
    return maxSum;
};