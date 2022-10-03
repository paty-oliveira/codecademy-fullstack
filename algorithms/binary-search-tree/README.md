# Binary Search Tree

A binary tree is an efficient data structure for fast data storage and retrieval due to its `O(log N)` runtime. It is a specialized tree data structure that is made up of a root node, and at most two child branches or subtrees. Each child node is itself a binary tree.

Each node has the following properties:

- data
- a depth value, where depth of 1 indicates the top level of the tree and a depth greater than 1 is a level somewhere lower in the tree
- a left pointer that points to a left child which is itself a binary tree, and must have a data lesser than the root node’s data
- a right pointer that points to a right child which is itself a binary tree, and must have a data greater than the root node’s data

![Binary Search Tree](./img/binary-search-tree.png)