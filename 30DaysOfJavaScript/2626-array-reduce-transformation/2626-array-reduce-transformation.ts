type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let answer = init
    for (let i=0; i<nums.length; i++) {
      answer = fn(answer, nums[i])
    }
    return answer
};