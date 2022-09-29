# Merge Sort

Merge sort is a sorting algorithm created by John von Neumann in 1945. Merge sort’s “killer app” was the strategy that breaks the list-to-be-sorted into smaller parts, sometimes called a *divide-and-conquer algorithm*.

In a divide-and-conquer algorithm, the data is continually broken down into smaller elements until sorting them becomes really simple.

Merge sorting takes two steps: splitting the data into “runs” or smaller components, and the re-combining those runs into sorted lists (the “merge”).

When splitting the data, we divide the input to our sort in half. We then recursively call the sort on each of those halves, which cuts the halves into quarters. This process continues until all of the lists contain only a single element. Then we begin merging.

When merging two single-element lists, we check if the first element is smaller or larger than the other. Then we return the two-element list with the smaller element followed by the larger element.

![Merge Sort Diagram](./img/merge-sort.png)
