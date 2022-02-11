 var searchInsert = function(nums, target) {
  
    var [left, right ] = [0, nums.length-1];
    while(left <= right){
        var pivot  = Math.floor((left + right) / 2);
        if(nums[pivot] == target){
            return pivot;
        }else if(target< nums[pivot]){
            right = pivot - 1;
        }else {
            left = pivot + 1;
        }
    }
    if(target > nums[pivot]){
        return pivot+1;
    }else{
        return pivot;
    }
};