function twoSum(numbers: number[], target: number): number[] {
  let sum=0
  let left=0
  let right= numbers.length-1
  
  while(left<right) {
    sum = numbers[left] + numbers[right]
    
    if (sum < target) {
      left++
    } else if (sum > target) {
      right--
    } else if (sum == target) {
      return [left+1, right+1]
    }
  }
};