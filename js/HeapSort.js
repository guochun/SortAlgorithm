!(function() {

    function initMinHeap(arr) {
        for(let i = findParentIndex(arr.length-1); i >= 0 ; i --) {
            shiftDown(arr,i,arr.length);
        }
    }

    function shiftUp(arr) {
        if(arr.length <= 1 ) return; 
        let childIndex = arr.length - 1;
        let parentIndex = findParentIndex(childIndex);
        let temp = arr[childIndex];
        while(childIndex> 0 && temp > arr[parentIndex]) {
           arr[childIndex] = arr[parentIndex];
           childIndex = parentIndex;
           parentIndex = findParentIndex(childIndex);
          
        }
        
        arr[childIndex] = temp;

    }

    function shiftDown(arr, parentIndex, length) {
        let childIndex = findLeftChildIndex(parentIndex);
        let temp = arr[parentIndex];
        while(childIndex < length) {

            if(childIndex + 1 < length && arr[childIndex+1] > arr[childIndex] ) {
                childIndex ++;
            }
            if(arr[childIndex] <= temp) break;
            arr[parentIndex] = arr[childIndex];
            parentIndex = childIndex;
            childIndex = findLeftChildIndex(parentIndex);    
        }

        arr[parentIndex] = temp;

    }

    function heapSort(arr) {
        initMinHeap(arr);
        console.log(arr);
        let temp;
        for(let i = arr.length - 1; i > 0; i --) {
            temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            shiftDown(arr,0,i);
        }
        
    }

    function findParentIndex(index) {

        return  Math.floor((index-1)/2);
    }

    function findLeftChildIndex(index) {

        return index*2 + 1
    }

    function findRightChildIndex(index) {
        return index*2+2
    }

    window.heapSort = heapSort;
})();