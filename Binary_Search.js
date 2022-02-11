/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    //-1 0 3 5 9 12    
    var left = 0;
    var right = nums.length - 1;
    while(left<= right){
       
            var pivot = Math.floor((left + right) / 2);
            if(target == nums[pivot]){
                return pivot;
            }else if(target < nums[pivot]){
                right = pivot - 1;
            }else{
                left = pivot + 1;
            }
        
        
    }
    
    return -1;
};