var moveZeroes = function(nums) {
    
    // 0 1 0 3 12
    var index = 0;
    for(var i = 0; i< nums.length; i++){
        if(nums[i] != 0){
            nums[index] = nums[i];
            index++;
        }
    }
    nums.fill(0, index);
    
    return nums;
    
    
    
};