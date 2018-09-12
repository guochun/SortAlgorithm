!(function() {

    function quickSort(arr) {

        function _quickSort(arr,startIndex,endIndex) {
            if(startIndex >= endIndex) return;
            let middle = Math.floor((startIndex + endIndex / 2));
            let pivotIndex = Math.floor(Math.random*(endIndex - startIndex+1)) + startIndex; 
            let pivotValue = arr[pivotIndex];
            let left = startIndex;
            let right = endIndex;
            while(left < right) {

                while(left < right) {
                    if(arr[right] > pivotValue){
                        
                    }
                }

                while(left < right) {

                }

            }
            _quickSort(arr,0,middle);
            _quickSort(arr,middle+1,endIndex);
        }

        _quickSort(arr,0,arr.length - 1);
    }
    
    window.quickSort = quickSort

})();