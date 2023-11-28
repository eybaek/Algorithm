function countPairs(nums: number[], target: number): number {
  nums.sort((a,b) => a-b)
  let count = 0; 
  let left = 0; 
  let right = nums.length-1; 
  
  while(left < right){ 
    let sum = nums[left]+nums[right]
      if(sum < target){
        count += right-left; 
        left++; 
      }else{ 
        right--
      }
  }
  return count
};