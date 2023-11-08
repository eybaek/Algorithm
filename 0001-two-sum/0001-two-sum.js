/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let answer = [];
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            // if (nums[i] + nums[j] === target) {
            //     answer.push(i);
            //     answer.push(j);
            // }
            if (nums[j] == target - nums[i]) {
                return Array.from([i, j]);
            }
        }
    }
};