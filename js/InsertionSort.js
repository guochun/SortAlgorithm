!(function() {

    function insertionSort_old (arr) {
        let temp
        let baseIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            baseIndex = i;
            for(let j = i - 1; j >= 0; j--) {
                if(arr[baseIndex] >= arr[j]) break;
                 temp = arr[baseIndex];
                 arr[baseIndex] = arr[j];
                 arr[j] = temp;
                 baseIndex = j;
            }
           
        }

    }

    function insertionSort (arr) {
        let temp
        for (let i = 1; i < arr.length; i++) {
            let baseIndex = i;
            let baseValue = arr[baseIndex];
            for(let j = i - 1; j >= 0; j--) {
                if(baseValue >= arr[j]) break;
                arr[j+1] = arr[j]
                baseIndex = j;
            }
            arr[baseIndex] = baseValue;
        }

    }
    window.insertionSort = insertionSort
   
})()