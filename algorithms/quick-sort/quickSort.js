import swap from './../bubble-sort/bubbleSort';

const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
    if (leftBound < rightBound) {
        console.log('. Calling partition', array, `with leftBound ${leftBound} and rightBound ${rightBound}`);
        const pivotIndex = partition(array, leftBound, rightBound);
        console.log(`. Returning pivotIndex = ${pivotIndex}`);
        console.log(`\nCalling quicksort for left partition with leftBound ${leftBound} and (pivotIndex-1) ${pivotIndex - 1}`);
        quicksort(array, leftBound, pivotIndex - 1);
        console.log(`\nCalling quicksort for right partition with pivotIndex ${pivotIndex} and rightBound ${rightBound}`);
        quicksort(array, pivotIndex, rightBound);
    }
  return array;
}


const partition = (array, leftIndex, rightIndex) => {
    const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
    console.log(`.. Partitioning with pivot ${pivot} leftIndex ${leftIndex} rightIndex ${rightIndex}`);
    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivot) {
            leftIndex++;
            console.log(`.. ${array[leftIndex-1]} < ${pivot} : Incremented leftIndex => ${leftIndex}`);
        }
        while (array[rightIndex] > pivot) {
            rightIndex--;
            console.log(`.. ${array[rightIndex+1]} > ${pivot} : Decremented rightIndex => ${rightIndex}`);
        }
        if (leftIndex <= rightIndex) {
            const string = `${leftIndex} <= ${rightIndex}`;
            swap(array, leftIndex, rightIndex);
            console.log(`.. ${string} : Swapped leftIndex ${leftIndex} with rightIndex ${rightIndex}`, array);
            leftIndex++;
            rightIndex--;
            console.log(`......... : Incremented leftIndex => ${leftIndex} Decremented rightIndex => ${rightIndex}`);
        }
    }
    return leftIndex;
}

export default {
  quicksort,
  partition
};