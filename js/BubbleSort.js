!(function() {

    function bubbleSort_old(arr) {

        let temp;
        for(let i = 1; i < arr.length; i ++) {

            for(let j = 0; j < arr.length - i; j ++) {

                if(arr[j] > arr[j+1]) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                }
            }
        }

    }
    
    function bubbleSort(arr) {

        let temp;
        let isSorted = false;
        let lastChangeIndex = 0;
        let sortBoder = arr.length - 1;
        for(let i = 1; i < arr.length; i ++) {
            isSorted = true;
            for(let j = 0; j < sortBoder; j ++) {

                if(arr[j] > arr[j+1]) {
                    temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    isSorted = false;
                    lastChangeIndex = j;
                }
            }
            sortBoder = lastChangeIndex;
            if(isSorted) {
                break;
            }
        }

    }
    window.bubbleSort = bubbleSort

})();