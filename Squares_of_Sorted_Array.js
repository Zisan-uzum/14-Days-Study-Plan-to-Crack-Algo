var sortedSquares = function(nums) {
    const result = [nums.length];
    let [left,right] = [0, nums.length-1];
    
        for(var i = nums.length-1; i> -1; i--){
            if(Math.pow(nums[right],2) > Math.pow(nums[left],2)){
            result[i] = Math.pow(nums[right],2);           
            right -= 1;
            console.log("i is "+ i);
            }else if(Math.pow(nums[right],2) < Math.pow(nums[left],2)){
            result[i] = Math.pow(nums[left],2);            
            left+=1;
            console.log("i is" + i);
            }else{
            result[i] = Math.pow(nums[right],2);
            right--;
            }
        
        }

        return result;
};