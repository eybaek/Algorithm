function firstMissingPositive(nums: number[]): number {
    const set = new Set(nums)
    let idx = 1
    
    while(set.has(idx)) {
      idx++
    }
  return idx
};