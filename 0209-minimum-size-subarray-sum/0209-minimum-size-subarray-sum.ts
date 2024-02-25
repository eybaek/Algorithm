function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Infinity;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength !== Infinity ? minLength : 0;
};