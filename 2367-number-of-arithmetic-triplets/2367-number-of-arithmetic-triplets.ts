function arithmeticTriplets(nums: number[], diff: number): number {
  let count=0
  for (const num of nums) {
    if (nums.includes(num+diff) && nums.includes(num+diff*2)) {
      count++
    }
  }
  return count
};