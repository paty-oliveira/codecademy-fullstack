const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (right > left) {
        const indexToCheck = Math.floor((left + right) / 2);
        const checking = arr[indexToCheck];
        console.log(indexToCheck);

        if (checking === target) {
            return indexToCheck;
        } else if (checking < target) {
            left = indexToCheck + 1;
        } else {
            right = indexToCheck;
        }
    }
    return null;
  }

export default binarySearch;