!(function() {

    function selectionSort(arr) {
        let temp
        let minIndex = 0

        for(let i = 0; i < arr.length - 1; i ++) {
            minIndex = i;
            for(let j = i+1; j < arr.length; j ++) {
                if(arr[minIndex] > arr[j]) {
                    minIndex = j
                }

            }

            if(minIndex != i) {

                temp = arr[minIndex]
                arr[minIndex] = arr[i]
                arr[i] = temp
            }
        }


    }

    window.selectionSort = selectionSort
})();