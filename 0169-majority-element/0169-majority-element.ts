function majorityElement(nums: number[]): number {
    let max = 0
    const hash = {}
    let val = 0
    for (const num of nums) {
      hash[num] ? hash[num]++ : hash[num] = 1
      
      if (hash[num] > max) {
        max = hash[num]
        val = num
      }
    }
  
  return val
};